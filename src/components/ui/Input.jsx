/**
 * Input Component
 * Props:
 * - label: input label text
 * - placeholder: placeholder text
 * - type: text | email | password | number
 * - value: input value
 * - onChange: function
 * - error: error message
 */

const Input = ({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border px-4 py-2 outline-none transition-all duration-300 ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
        }`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;