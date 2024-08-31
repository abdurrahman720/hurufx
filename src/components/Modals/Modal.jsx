const Modal = ({ children, isOpen, setIsOpen, handler, xButton }) => {
  //NOTE: optional handler has extra function that should be invoked when closing the modal

  return (
    <div
      className={`w-full h-screen flex justify-center items-center fixed top-0 left-0 z-20  ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className="w-full h-screen fixed top-0 left-0 bg-gray-400 z-40 opacity-60 flex items-center justify-center "
        onClick={() => {
          setIsOpen(false);
          handler && handler(null);
        }}
      ></div>
      <div className="w-3/4 bg-white rounded-lg shadow-md z-50  overflow-scroll relative">
        {children}
    {xButton && (
          <button
            onClick={() => {
              setIsOpen(false);
              handler && handler(null);
            }}
            className="absolute top-1 right-1 rounded-full w-5 h-5 bg-white"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
