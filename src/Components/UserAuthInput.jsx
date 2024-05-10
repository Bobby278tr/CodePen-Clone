import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  key,
  setStateFunction,
  Icon,
  setGetEmailValidationStatus
}) => {
  const [value, setvalue] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleTextChange = (e) => {
    setvalue(e.target.value);
    setStateFunction(e.target.value);

    if (placeHolder === "Email") {
      const emailRegex = /^[^\sQ]+@[^\sQ]+\.[^\sQ]+$/;
      const status = emailRegex.test(value);
      setIsEmailValid(status);
      setGetEmailValidationStatus(status)
    }
  };
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label htmlFor="" className="text-sm text-gray-300">
        {label}
      </label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${
          !isEmailValid &&
          placeHolder === "Email" &&
          value.length > 0 &&
          "border-2 border-red-500"
        }`}
      >
        <Icon className="text-text555 text-2xl"></Icon>
        <input
          type={isPass && !showPass ? "password" : "text"}
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
          value={value}
          onChange={handleTextChange}
        />
        {isPass && (
          <motion.div
            onClick={() => setShowPass(!showPass)}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEye className="text-text555 text-xl"></FaEye>
            ) : (
              <FaEyeSlash className="text-text555 text-xl"></FaEyeSlash>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
