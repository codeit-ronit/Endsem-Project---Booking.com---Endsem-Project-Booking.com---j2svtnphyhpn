function InputField({ label, type, placeholder, id }) {
    return (
      <div className="mt-2">
        <label htmlFor={id} className="block text-gray-600 text-sm">
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="block w-[397px] h-[46px] py-2.5 px-3 border border-solid border-blue-500 bg-white text-neutral-300"
          aria-label={label}
        />
      </div>
    );
  }

export default InputField