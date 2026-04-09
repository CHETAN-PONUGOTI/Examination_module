import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userName', res.data.name);
      localStorage.setItem('userPhone', res.data.phone);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl w-full max-w-md text-center border-8 border-blue-50">
        
        {/* Robot Image Container */}
        <div className="relative w-32 h-32 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
          <img 
            src="/robot.png" 
            alt="RoboKalm Friend" 
            className="w-24 h-24 drop-shadow-lg animate-bounce"
            onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" }}
          />
        </div>

        <h1 className="text-3xl font-black text-blue-600 mb-2">
          {isLogin ? "Welcome Back!" : "Join the Club!"}
        </h1>
        <p className="text-slate-400 mb-8 font-medium">
          {isLogin ? "Log in to start your adventure" : "Create your profile to play"}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-4 ring-blue-100 transition-all font-semibold"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          )}
          
          <input 
            type="text" 
            placeholder="Phone Number"
            required
            className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-4 ring-blue-100 transition-all font-semibold"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          
          <input 
            type="password" 
            placeholder="Secret Password" 
            required
            className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-4 ring-blue-100 transition-all font-semibold"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg transform active:scale-95 transition-all text-lg uppercase tracking-widest mt-4">
            {isLogin ? "Let's Play!" : "Create Account"}
          </button>
        </form>

        <p className="mt-8 text-slate-500 font-bold">
          {isLogin ? "New here?" : "Already have an account?"} 
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 ml-2 underline decoration-2 underline-offset-4"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;