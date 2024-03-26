import "./Button.css";

const Button = ({ title, icon, onClick }) => {
  return (
    <button className="custom_button" onClick={onClick}>
      {icon} {title}
    </button>
  );
};

export default Button;
