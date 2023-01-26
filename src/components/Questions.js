import React, { useState, useEffect } from 'react';

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(props.questions[Math.floor(Math.random() * props.questions.length)]);
  
  

  useEffect(() => {
    // select a random question from the list when the component mounts
    setCurrentQuestion(props.questions[Math.floor(Math.random() * props.questions.length)]);
  }, [props.questions]);

  const handleNextButtonClick = () => {
    // select a random question from the list when the "next" button is clicked
    setCurrentQuestion(props.questions[Math.floor(Math.random() * props.questions.length)]);
  }
  
  return (
    <div>
      { currentQuestion && (
        <div className='question-block '>
          <div className='question-block__id'>#{currentQuestion.id}</div>
          <div>{currentQuestion.content}</div>
          <button className='question-block__button' onClick={handleNextButtonClick}>Next</button>
        </div>
      )}

    </div>
  );
}

export default Questions;
