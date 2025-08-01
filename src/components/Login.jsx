// src/components/Login.js
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdEmail } from "react-icons/md";
import { IoLockClosed, IoEye, IoEyeOff } from "react-icons/io5";
import Cookies from "js-cookie";
import { ShowToast } from "../utils/ShowToast";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle state
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (!success) {
      ShowToast("Invalid email or password", "error");
      return;
    }
    try {
      ShowToast("Login successful", "success");
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard");
  };

  return (
    <div className="Login-wrapper h-[75vh] w-full flex items-center justify-center text-gray-700">
      <div className="container w-84 h-80 md:w-90 bg-white/90 backdrop-blur-md ring shadow-xl rounded-lg px-14 pt-4">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl font-semibold font-serif text-center mb-5">Login</h4>

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

          {/* Password Field with Eye Toggle */}
          <div className="form-field-wrapper mb-4">
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
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-lg focus:outline-none cursor-pointer"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <label htmlFor="login">
            <div className="form-field-wrapper bg-blue-600 flex items-center justify-center h-8 rounded-md mb-2 cursor-pointer">
              <input type="submit" value="Login" className="btn text-white cursor-pointer" id="login" />
            </div>
          </label>

          {/* Link to Signup */}
          <p className="text-xs text-center">
            Don't have an account? <Link to="/signup" className="text-blue-400 underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
