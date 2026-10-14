import { useState } from "react";
import axios from 'axios';

// Hook que encapsula la lógica de preguntas
export const useQuestionController = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Question",
      questionType: "radio",
      options: [
        { optionText: "Option 1" },
        { optionText: "Option 2" },
      ],
      required: false,
    },
  ]);

  // Agregar una nueva pregunta
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "New question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        required: false,
      },
    ]);
  };

  // Eliminar una pregunta
  const deleteQuestion = (index) => {
    if (questions.length > 1) {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
    } else {
      alert("You must have at least one question.");
    }
  };

  // Guardar las preguntas
  const saveQuestions = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/questions/save`,
        { questions }
      );
      return response.data
    } catch (error) {
      console.error('Error al guardar las preguntas:', error);
      alert('Hubo un error al guardar las preguntas.');
    }
  };
  return {
    questions,
    setQuestions,
    addQuestion,
    deleteQuestion,
    saveQuestions,
  };
};
