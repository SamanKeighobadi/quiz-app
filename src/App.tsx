import axios from 'axios';
import React,{useState,useEffect} from 'react';
import QuestionCard from './components/QuestionCard';


function App() {

  const QUIZ_API = `https://opentdb.com/api.php?amount=10&type=multiple`;

  return (
    <div className="App">
      Hello World
      <QuestionCard />
    </div>
  );
}

export default App;
