// src/components/Signup.js
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdEmail } from "react-icons/md";
import { IoLockClosed, IoPerson, IoEye, IoEyeOff } from "react-icons/io5";
import { ShowToast } from "../utils/ShowToast";
import Cookies from "js-cookie";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", password2: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = form;

    if (password !== password2) {
      ShowToast("Passwords do not match", "error");
      return;
    }

    const success = signup(name, email, password);
    if (!success) {
      ShowToast("User already exists", "error");
      return;
    }

    try {
      ShowToast("Registered successfully", "success");
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard");
  };

  return (
    <div className="Login-wrapper h-[75vh] w-full flex items-center justify-center text-gray-700">
      <div className="container md:h-auto md:w-90 w-84 bg-white/90 backdrop-blur-md ring shadow-xl rounded-lg px-14 py-4">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl font-semibold font-serif text-center mb-5">Sign Up</h4>

          {/* Name Field */}
          <div className="form-field-wrapper mb-3">
            <label htmlFor="nameId">Name:</label>
            <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring">
              <IoPerson />
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="flex-grow bg-transparent outline-none w-full"
                id="nameId"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="form-field-wrapper mb-3">
            <label htmlFor="emailId">Email:</label>
            <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring">
              <MdEmail />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email..."
                className="flex-grow bg-transparent outline-none w-full"
                id="emailId"
              />
            </div>
          </div>

          {/* Password Field with Eye Icon */}
          <div className="form-field-wrapper mb-3">
            <label htmlFor="passwordId">Password:</label>
            <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring pr-2">
              <IoLockClosed />
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password..."
                className="flex-grow bg-transparent outline-none w-full"
                id="passwordId"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="text-lg focus:outline-none cursor-pointer"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field with Eye Icon */}
          <div className="form-field-wrapper mb-4">
            <label htmlFor="cpasswordId">Confirm Password:</label>
            <div className="flex items-center gap-1 rounded-md pl-2 h-8 ring pr-2">
              <IoLockClosed />
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="password2"
                value={form.password2}
                onChange={handleChange}
                placeholder="Confirm password..."
                className="flex-grow bg-transparent outline-none w-full"
                id="cpasswordId"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(prev => !prev)}
                className="text-lg focus:outline-none cursor-pointer"
              >
                {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <label htmlFor="signup">
            <div className="form-field-wrapper bg-blue-600 flex items-center justify-center h-8 rounded-md mb-2 cursor-pointer">
              <input type="submit" value="Register" className="btn text-white cursor-pointer" id="signup" />
            </div>
          </label>

          {/* Link to Login */}
          <p className="text-xs text-center">
            Already have an account? <Link to="/login" className="text-blue-400 underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
