const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
            z-10
            backdrop-blur-md 
            bg-white/30
            w-screen
            h-screen
            fixed
            top-0
            left-0
            overflow-hidden
        
        "
    ></div>
  );
};

export default BackDrop;
