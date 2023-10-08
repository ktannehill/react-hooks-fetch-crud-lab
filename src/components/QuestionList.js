import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onEditQuestion }) {

  const mappedQuestions = questions.map(question => (
    <QuestionItem key={question.id} question={question} 
      onDeleteQuestion={onDeleteQuestion} 
      onEditQuestion={onEditQuestion}
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
