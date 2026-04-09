const Sidebar = ({ isOpen, onClose }) => {
  const navLinks = [
    { name: 'My Dashboard', icon: '🏠', path: '/dashboard' },
    { name: 'Active Exams', icon: '📝', path: '/exam' },
    { name: 'My Results', icon: '📊', path: '/results' },
    { name: 'Profile Settings', icon: '⚙️', path: '#' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity" 
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-blue-600">RoboKalm</h2>
            <button onClick={onClose} className="text-gray-400 text-xl font-bold">×</button>
          </div>

          <div className="space-y-2">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.path}
                className="flex items-center space-x-4 p-4 rounded-2xl text-slate-600 font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 p-4 bg-rose-50 text-rose-600 rounded-2xl font-black border-2 border-rose-100 hover:bg-rose-100 transition-all"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;