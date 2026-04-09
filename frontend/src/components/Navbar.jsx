const Navbar = ({ name, phone, onMenuClick }) => {
  return (
    <nav className="bg-[#1E6B45] pt-8 px-8 pb-16 rounded-b-[40px] text-white relative shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={onMenuClick}
          className="bg-white/20 p-3 rounded-2xl active:scale-90 transition-all"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-white/70 font-bold uppercase tracking-widest leading-none">Status</p>
            <p className="text-sm font-black text-emerald-300 uppercase">Online</p>
          </div>
          <img 
            src="https://i.pravatar.cc/150?u=poetri" 
            alt="Student Profile" 
            className="w-14 h-14 rounded-full border-4 border-white/30 shadow-xl"
          />
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/70 font-semibold tracking-wide">Welcome back</p>
        <h1 className="text-3xl font-black tracking-tight">{name}</h1>
        <div className="flex items-center mt-2 space-x-2 text-white/50 text-sm">
          <span className="bg-white/20 px-2 py-0.5 rounded-lg">ID: RB-2026</span>
          <span>•</span>
          <p>{phone}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;