import React from "react";

const InputField = ({ label, ...rest }) => (
  <div className="flex items-center space-x-4 space-y-2">
    <label className="w-20">{label}</label>
    <input
      {...rest}
      className="flex-1 border border-solid border-gray-500 bg-transparent px-1 py-1 outline-none"
    />
  </div>
);

export default InputField;
