const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
            z-10
            backdrop-blur-md 
            bg-white/60
            w-screen
            h-full
            fixed
            top-0
            left-0
            overflow-hidden
            transition-all 
            delay-300
        
        "
    ></div>
  );
};

export default BackDrop;
