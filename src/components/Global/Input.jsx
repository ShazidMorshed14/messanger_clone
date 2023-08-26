import React from "react";

const Input = ({
  label = "",
  name = "",
  type = "text",
  isRequired = false,
  placeholder = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="mb-6">
      <label
        for={name}
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        isRequired={isRequired}
        onChange={onChange}
        class="block w-full rounded-md border-0 p-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
