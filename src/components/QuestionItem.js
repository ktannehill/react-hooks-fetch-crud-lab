import React from "react";

function QuestionItem({ question, onDeleteQuestion, onEditQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => onDeleteQuestion(question))
    .catch(err => alert(err))
  }

  const handleEditClick = (e) => {
    // console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
    .then(resp => resp.json())
    .then((updatedQuestion) => onEditQuestion(updatedQuestion))
    .catch(err => alert(err))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} 
          onClick={handleEditClick}>{options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
