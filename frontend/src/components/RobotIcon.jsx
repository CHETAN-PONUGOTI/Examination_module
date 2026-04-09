const RobotIcon = ({ className = "w-32 h-32" }) => {
  return (
    <div className={`relative transition-transform duration-500 hover:rotate-12 ${className}`}>
      <img 
        src="https://i.ibb.co/9d348c/robot.png" 
        alt="RoboKalm Assistant" 
        className="w-full h-full object-contain drop-shadow-2xl"
      />
      <div className="absolute -bottom-2 w-full h-4 bg-black/10 rounded-[100%] blur-md -z-10 animate-pulse"></div>
    </div>
  );
};

export default RobotIcon;