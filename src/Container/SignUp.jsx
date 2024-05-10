import React, { useState } from "react";
import { Logo } from "../assets";
import { UserAuthInput } from "../Components";
import { FaEnvelope, FaGit, FaGithub } from "react-icons/fa6";
import { MdPassword } from "react-icons/md";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] =
    useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full py-6">
      <img
        src={Logo}
        alt="Logo"
        className="object-contain w-32 opacity-50 h-auto"
      />
      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-12 text-xl text-primaryText">Join With Us! 🤩</p>

        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
          {/* email */}

          <UserAuthInput
            label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            setGetEmailValidationStatus={setGetEmailValidationStatus}
          />

          {/* Password */}

          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword}
          />

          {/* alert */}

          {/* login button */}

          {isLogin ? (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full  bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700"
            >
              <p className="text-xl text-white">Log In</p>
            </motion.div>
          ) : (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full  bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700"
            >
              <p className="text-xl text-white">Sign Up</p>
            </motion.div>
          )}

          {/* account text section */}

          {!isLogin ? (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3">
              Already have an account!{" "}
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
                className="text-emerald-500 cursor-pointer"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3">
              If you Doesn't Have an Account!{" "}
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
                className="text-emerald-500 cursor-pointer"
              >
                Create Here
              </span>
            </p>
          )}

          {/* or section */}

          <div class="flex items-center justify-center gap-11">
            <div class="h-px bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p class="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
            <div class="h-px bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          {/* sign in with goggle */}

          <motion.div
            className="flex items-center justify-center bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <FcGoogle className="text-3xl px-1"/>
              <p className="text-xl text-white ">
                Sign in with Goggle
              </p>
          </motion.div>

          {/* or section */}

          <div class="flex items-center justify-center gap-11">
            <div class="h-px bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p class="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
            <div class="h-px bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          {/* sign in with github */}

          <motion.div
            className="flex items-center justify-center bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-3xl px-1"/>
              <p className="text-xl text-white ">
                Sign in with GitHub
              </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
