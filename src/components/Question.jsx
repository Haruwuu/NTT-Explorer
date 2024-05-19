import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Question = ({ questionNumber, question, options, correctAnswer, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    handleAnswer(option === correctAnswer);
  };

  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <div className="question fw-semibold">{question}</div>
          <div className="options-container mt-3">
            {options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <hr /> 
    </Container>
  );
};

export default Question;
