import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useResultsController } from "../../controllers/results.controller.js";
import "./ResultsPage.css";

const ResultsPage = ({ match }) => {
  const { fetchResults } = useResultsController(); // Lógica del controlador
  const { id: formId } = match.params; // ID del formulario desde la URL

  const [resultsData, setResultsData] = useState([]); // Datos procesados de las respuestas

  // Obtener resultados al montar el componente
  useEffect(() => {
    fetchResults(formId)
      .then((data) => setResultsData(data))
      .catch((error) => console.error(error.message));
  }, [formId, fetchResults]);

  return (
    <div className="results_page">
      {resultsData.map((data, index) => (
        <div key={index} className="result_card">
          {/* Gráfica de pastel para preguntas de opción múltiple */}
          {data.type === "multipleChoice" ? (
            <div>
              <h3>{data.question}</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.options}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {data.options.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            // Lista de respuestas para preguntas de texto
            <div>
              <h3>{data.question}</h3>
              <div className="responses">
                {data.responses.map((response, i) => (
                  <p key={i}>{response}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
