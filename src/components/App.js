import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(setQuestions)
    .catch(err => alert(err))
  }, [])

  const handleNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const handleDeleteQuestion = (deletedQuestion) => {
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  const handleEditQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map(question => 
      question.id === updatedQuestion.id ? updatedQuestion : question
    )
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
          onNewQuestion={handleNewQuestion} 
        /> : 
        <QuestionList questions={questions} 
          onDeleteQuestion={handleDeleteQuestion} 
          onEditQuestion={handleEditQuestion}
        />
      }
    </main>
  );
}

export default App;
