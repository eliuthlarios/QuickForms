import React from "react";
import { Button, Select, MenuItem, IconButton, Switch } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaTrashAlt } from "react-icons/fa";
import { useQuestionController } from "../../controllers/question.controller"; 
import "./Question_form.css";

function QuestionForm() {
  const {
    questions,
    setQuestions,
    addQuestion,
    deleteQuestion,
    saveQuestions,
  } = useQuestionController();

  const handleSave = async () => {
    try {
      await saveQuestions(questions);
      alert('Formulario guardado exitosamente.');
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Hubo un error al guardar el formulario.');
    }
  };

  return (
    <div className="question_form">
      <div className="section">
        <div className="question_title">
          <input
            type="text"
            className="form_title"
            placeholder="Untitled document"
          />
          <input
            type="text"
            className="form_description"
            placeholder="Form description"
          />
        </div>

        {questions.map((ques, qIndex) => (
          <div key={qIndex} className="question_container">
            <div className="question_top">
              <input
                type="text"
                className="question_input"
                placeholder="Question"
                value={ques.questionText}
                onChange={(e) => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[qIndex].questionText = e.target.value;
                  setQuestions(updatedQuestions);
                }}
              />
              <Select
                value={ques.questionType}
                onChange={(e) =>
                  setQuestions((prev) => {
                    const updated = [...prev];
                    updated[qIndex].questionType = e.target.value;
                    if (e.target.value === "text") {
                      updated[qIndex].options = [];
                    } else if (updated[qIndex].options.length === 0) {
                      updated[qIndex].options = [{ optionText: "Option 1" }];
                    }
                    return updated;
                  })
                }
              >
                <MenuItem value="text">Paragraph</MenuItem>
                <MenuItem value="checkbox">Checkboxes</MenuItem>
                <MenuItem value="radio">Multiple Choice</MenuItem>
              </Select>
            </div>

            {ques.questionType === "text" ? (
              <textarea
                className="paragraph_input"
                placeholder="Write your response here..."
              />
            ) : (
              ques.options.map((op, oIndex) => (
                <div key={oIndex} className="option_row">
                  <input
                    type={ques.questionType}
                    disabled
                    style={{ marginRight: "10px" }}
                  />
                  <input
                    type="text"
                    className="option_input"
                    placeholder="Option"
                    value={op.optionText}
                    onChange={(e) => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[qIndex].options[oIndex].optionText =
                        e.target.value;
                      setQuestions(updatedQuestions);
                    }}
                  />
                  <IconButton
                    onClick={() => {
                      const updatedQuestions = [...questions];
                      if (updatedQuestions[qIndex].options.length > 1) {
                        updatedQuestions[qIndex].options.splice(oIndex, 1);
                        setQuestions(updatedQuestions);
                      } else {
                        alert("At least one option is required.");
                      }
                    }}
                  >
                    <FaTrashAlt />
                  </IconButton>
                </div>
              ))
            )}

            {ques.questionType !== "text" && (
              <Button
                className="add_option_btn"
                onClick={() => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[qIndex].options.push({
                    optionText: "New Option",
                  });
                  setQuestions(updatedQuestions);
                }}
              >
                Add an Option
              </Button>
            )}

            <div className="question_footer">
              <div className="mandatory_toggle">
                <Switch
                  checked={ques.required}
                  onChange={() =>
                    setQuestions((prev) => {
                      const updated = [...prev];
                      updated[qIndex].required = !updated[qIndex].required;
                      return updated;
                    })
                  }
                />
                <span>Mandatory</span>
              </div>
              <IconButton onClick={() => deleteQuestion(qIndex)}>
                <FaTrashAlt />
              </IconButton>
              <button className="add_question_btn" onClick={addQuestion}>
                <AddIcon />
              </button>
            </div>
          </div>
        ))}

        {/* Botón de guardar */}
        <div className="save_button_container">
          <Button className="save_button" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
