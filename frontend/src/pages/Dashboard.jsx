import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('userName') || "Chetan";
  const phone = localStorage.getItem('userPhone') || "8897543517";

  const menuItems = [
    { title: 'Exam', icon: '📝', color: 'bg-indigo-50', route: '/exam' },
    { title: 'Practice', icon: '🎯', color: 'bg-emerald-50' },
    { title: 'Theory', icon: '📚', color: 'bg-sky-50' },
    { title: 'Live Lecture', icon: '📺', color: 'bg-rose-50' },
    { title: 'Recorded', icon: '🎬', color: 'bg-blue-50' },
    { title: 'Bookmark', icon: '⭐', color: 'bg-amber-50' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* --- DESKTOP NAVBAR (Flat design) --- */}
      <nav className="hidden lg:flex items-center justify-between bg-white px-10 py-4 border-b border-slate-100 sticky top-0 z-30">
        <div className="flex items-center space-x-8">
          <h2 className="text-2xl font-black text-blue-600 tracking-tighter">RoboKalm</h2>
          <h1 className="text-xl font-bold text-slate-700">Hi, {name}! 🚀</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3 pr-4 border-r border-slate-100 text-right">
            <div>
              <p className="font-bold text-slate-700 leading-none">{name}</p>
              <p className="text-xs text-slate-400">{phone}</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=chetan" className="w-10 h-10 rounded-full" />
          </div>
          <button onClick={handleLogout} className="text-rose-600 font-black hover:text-rose-800 transition-colors">Logout</button>
        </div>
      </nav>

      {/* --- MOBILE HEADER --- 
          FIXED: Removed border-radius from the top/sides. 
          Only rounded-b-[40px] creates the bottom curve.
      */}
      <header className="lg:hidden bg-[#1E6B45] p-8 pb-20 text-white w-full rounded-none rounded-b-[45px]">
        <div className="flex justify-between items-center mb-10">
          <button onClick={handleLogout} className="bg-white/10 p-3.5 rounded-xl">
            Logout
          </button>
          <img src="https://i.pravatar.cc/150?u=chetan" className="w-12 h-12 rounded-full border-2 border-white/20" />
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/70 font-semibold text-sm">Welcome back</p>
            <h1 className="text-4xl font-black tracking-tight leading-none">{name}</h1>
          </div>
          <p className="text-white/60 text-sm font-bold font-mono">{phone}</p>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- 
          FIXED: Removed inner card shadows and border-spaces.
          Dashboard grid now sits on a clean white background.
      */}
      <main className="px-6 md:px-12 lg:px-20 -mt-10 lg:mt-0 flex-1 py-10 bg-white">
        <div className="bg-white rounded-t-[40px] lg:rounded-none p-6 md:p-10 lg:p-0">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-8 uppercase tracking-widest">Dashboard</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {menuItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => item.route && navigate(item.route)}
                className="flex flex-col items-center justify-center p-6 rounded-3xl transition-all active:scale-95 border-2 border-slate-100"
              >
                <div className={`${item.color} w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl rounded-2xl mb-3`}>
                  {item.icon}
                </div>
                <span className="font-bold text-slate-600 text-sm md:text-lg">{item.title}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-black text-slate-800 mt-12 mb-8 uppercase tracking-widest">Reports</h2>
          <div 
            onClick={() => navigate('/results')}
            className="flex items-center space-x-6 p-6 md:p-8 bg-slate-50 rounded-3xl cursor-pointer hover:bg-slate-100 transition-all border border-transparent"
          >
            <div className="bg-emerald-100 p-4 rounded-2xl text-3xl">📊</div>
            <div>
              <span className="font-black text-slate-700 text-lg md:text-2xl block">My Exam Results</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Track progress</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;