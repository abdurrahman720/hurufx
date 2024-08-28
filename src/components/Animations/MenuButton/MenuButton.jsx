import "./MenuButtons.css";

function MenuButton({ onClick }) {
  const hrStyle = "border border-white transform duration-500";

  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 items-end group cursor-pointer"
    >
      <hr className={`w-8 group-hover:w-12 ${hrStyle}`} />
      <hr className={`w-12 group-hover:w-8 ${hrStyle}`} />
      <hr className={`w-8 group-hover:w-12 ${hrStyle}`} />
    </div>
  );
}

export default MenuButton;
