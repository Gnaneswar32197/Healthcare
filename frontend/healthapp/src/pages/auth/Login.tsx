import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  HeartPulse,
  Eye,
  EyeOff,
  Building2,
  Users,
} from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/videos/image.png')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-blue-900/40 to-cyan-700/30" />

      {/* Floating Cards */}

      <div
        className="
        hidden lg:flex
        absolute
        top-10
        left-10
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-5
        text-white
        items-center
        gap-3
        z-10
      "
      >
        <Building2 />
        <div>
          <p className="font-bold">50+</p>
          <p className="text-sm text-white/80">
            Hospitals Connected
          </p>
        </div>
      </div>

      <div
        className="
        hidden lg:flex
        absolute
        bottom-10
        right-10
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-5
        text-white
        items-center
        gap-3
        z-10
      "
      >
        <Users />
        <div>
          <p className="font-bold">10,000+</p>
          <p className="text-sm text-white/80">
            Patients Served
          </p>
        </div>
      </div>

      {/* Main Content */}

      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">

        <div
          className="
          w-full
          max-w-md
          bg-white/15
          backdrop-blur-2xl
          border
          border-white/20
          rounded-[40px]
          shadow-2xl
          p-10
        "
        >

          {/* Logo */}

          <div className="text-center">

            <div
              className="
              w-24
              h-24
              mx-auto
              rounded-3xl
              bg-white/20
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
            "
            >
              <HeartPulse
                size={48}
                className="text-white"
              />
            </div>

            <h1 className="mt-6 text-4xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="mt-3 text-white/80">
              Sign in to your healthcare portal
            </p>

          </div>

          {/* Form */}

          <form className="mt-10 space-y-5">

            <div className="relative">

              <Mail
                size={20}
                className="
                  absolute
                  left-4
                  top-5
                  text-white/70
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  placeholder:text-white/60
                  backdrop-blur-md
                  outline-none
                  focus:border-cyan-400
                "
              />

            </div>

            <div className="relative">

              <Lock
                size={20}
                className="
                  absolute
                  left-4
                  top-5
                  text-white/70
                "
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="
                  w-full
                  pl-12
                  pr-12
                  py-4
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  placeholder:text-white/60
                  backdrop-blur-md
                  outline-none
                  focus:border-cyan-400
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute
                  right-4
                  top-4
                  text-white/70
                "
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="
                  text-cyan-300
                  text-sm
                  hover:text-cyan-200
                "
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                text-lg
                hover:from-blue-700
                hover:to-cyan-600
                transition
              "
            >
              Login
            </button>

          </form>

          {/* Footer */}

          <div className="mt-8 text-center">

            <p className="text-white/80">
              Don't have an account?

              <Link
                to="/register"
                className="
                  ml-2
                  text-cyan-300
                  font-semibold
                "
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;