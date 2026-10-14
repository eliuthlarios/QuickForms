import API from './api';
import { toast } from 'react-hot-toast';

export const saveQuestions = async (questions) => {
  try {
    const response = await API.post('/document', { questions });
    toast.success("Questions saved successfully.");
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to save questions.");
  }
};

export const createDocument = async (documentData) => {
    try {
      if (!documentData || !documentData.documentName || !documentData.questions) {
        toast.error("Invalid document data.");
        return;
      }
  
      const response = await API.post('/document', documentData);
      toast.success("Document created successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to create document.");
      throw error; // Retira este throw si no necesitas manejar el error en otro lugar
    }
  };