const Modal = ({ children, isOpen, setIsOpen, handler }) => {
  //NOTE: optional handler has extra function that should be invoked when closing the modal

  return (
    <div
      className={`w-full h-screen flex justify-center items-center fixed top-0 left-0 z-20  ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className="w-full h-screen fixed top-0 left-0 bg-black z-40 opacity-60 flex items-center justify-center "
        onClick={() => {
          setIsOpen(false);
          handler && handler(null);
        }}
      ></div>
      <div className="w-[90%]   rounded-lg shadow-md z-50  overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default Modal;
