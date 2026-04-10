import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const questions = [
  { q: "Which part of the robot stores energy?", a: ["Wires", "Battery", "Sensors"], correct: 1 },
  { q: "What is the result of 15 + 25?", a: ["30", "40", "50"], correct: 1 },
  { q: "Which gas do humans need to breathe?", a: ["Carbon Dioxide", "Oxygen", "Nitrogen"], correct: 1 },
  { q: "The 'brain' of a computer is the:", a: ["CPU", "Keyboard", "Mouse"], correct: 0 },
  { q: "Which planet is the closest to the Sun?", a: ["Mars", "Earth", "Mercury"], correct: 2 },
  { q: "What is the square root of 64?", a: ["6", "7", "8"], correct: 2 },
  { q: "Robots use ___ to move their arms.", a: ["Wheels", "Actuators", "Antennas"], correct: 1 },
  { q: "Water boils at how many degrees Celsius?", a: ["50", "100", "200"], correct: 1 },
  { q: "Which is a coding language?", a: ["Lizard", "Python", "Cheetah"], correct: 1 },
  { q: "How many sides does a hexagon have?", a: ["5", "6", "8"], correct: 1 }
];

const Exam = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (qIdx, optIdx) => {
    setAnswers({ ...answers, [qIdx]: optIdx });
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting!");
      return;
    }
    
    try {
      const token = localStorage.getItem('token');
      const API_BASE_URL = import.meta.env.VITE_API_URL;
      await axios.post(`${API_BASE_URL}/api/exam/submit`, 
        { answers, questions },
        { headers: { Authorization: `Bearer ${token}` }}
      );
      navigate('/results');
    } catch {
      alert("Submission failed!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-600 p-8 text-white rounded-b-4xl shadow-lg">
        <h1 className="text-2xl font-black uppercase text-center">Quiz Mission 🚀</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-6">
        {questions.map((item, qIdx) => (
          <div key={qIdx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-black text-slate-800 mb-4">{qIdx + 1}. {item.q}</h3>
            <div className="space-y-3">
              {item.a.map((opt, optIdx) => (
                <button
                  key={optIdx}
                  onClick={() => handleSelect(qIdx, optIdx)}
                  className={`w-full p-4 rounded-2xl text-left font-bold transition-all border-2 ${
                    answers[qIdx] === optIdx 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-slate-100 bg-slate-50 text-slate-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button 
          onClick={handleSubmit}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-5 rounded-3xl shadow-xl text-xl mt-8 mb-10 transition-colors uppercase tracking-widest"
        >
          Submit Results 🏁
        </button>
      </div>
    </div>
  );
};

export default Exam;