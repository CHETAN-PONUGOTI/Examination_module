import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      const token = localStorage.getItem('token');
      const API_BASE_URL = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API_BASE_URL}/api/exam/results`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(res.data);
    };
    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-emerald-600 p-8 text-white flex items-center justify-between shadow-lg">
        <button onClick={() => navigate('/dashboard')} className="font-bold">← Back</button>
        <h1 className="text-xl font-black uppercase">My Progress</h1>
        <div className="w-8"></div>
      </div>

      <div className="p-6 max-w-md mx-auto space-y-4">
        {data.length === 0 ? (
          <div className="text-center p-20 text-slate-400 font-bold">No exams taken yet!</div>
        ) : (
          data.map((res, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border-l-8 border-emerald-500 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  {new Date(res.date).toLocaleDateString()}
                </p>
                <h3 className="text-lg font-black text-slate-700">General Science</h3>
              </div>
              <div className="text-center">
                <span className="text-3xl font-black text-emerald-600">{res.score}</span>
                <span className="text-slate-400 font-bold block text-xs">/ {res.totalQuestions}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Results;