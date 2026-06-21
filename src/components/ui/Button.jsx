const Button = ({ variant = "primary", size = "md", disabled = false, onClick, children }) => {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;