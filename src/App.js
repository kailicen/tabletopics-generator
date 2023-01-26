import './App.css';
import Questions from './components/Questions';
import React, { useState, useEffect } from 'react';



function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('questions.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Questions questions={questions} />
      <div className='footer'>
        <a className='footer__a' href='https://kailicen.com' target='_blank' rel="noreferrer">Kaili Cen</a>
        . Questions from the <a className='footer__a' href='https://dist8tm.org/wp-content/uploads/2017/08/365_Sample_Table_Topics_Questions.pdf' 
        target='_blank' rel="noreferrer">365 Table Topics Questions</a>.
      </div>

    </div>
  );
}

export default App;
