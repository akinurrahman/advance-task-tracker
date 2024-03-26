import React from "react";

const InputField = ({ label, ...rest }) => {
  return (
    <div className="flex items-center space-x-4 space-y-2">
      <label className="w-20">{label}</label>
      <input
        {...rest}
        className={`${rest.disabled && "cursor-not-allowed"} flex-1 border border-solid border-gray-500 bg-transparent px-1 py-1 outline-none`}
      />
    </div>
  );
};

export default InputField;
