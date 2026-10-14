import API from './api';

export const fetchResults = async (formId) => {
  try {
    const response = await API.get(`/response/${formId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching results:", error);
    throw new Error("Unable to fetch results.");
  }
};
