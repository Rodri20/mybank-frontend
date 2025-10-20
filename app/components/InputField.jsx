export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full 
          px-4 py-2 
          rounded-lg 
          border border-gray-300 
          focus:outline-none 
          focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
          text-gray-800
          placeholder:text-gray-400
          transition-all
          bg-white
        "
        autoComplete="off"
      />
    </div>
  );
}
