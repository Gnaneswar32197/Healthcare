const PatientRegister = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

          {/* Left Side */}

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-12 flex flex-col justify-center">

            <h1 className="text-5xl font-bold">
              Your Health,
              <br />
              Your Control
            </h1>

            <p className="mt-6 text-lg">
              Access healthcare services securely from anywhere.
            </p>

            <div className="mt-10 space-y-4">
              <p>✓ Medical Records</p>
              <p>✓ Appointments</p>
              <p>✓ Prescriptions</p>
              <p>✓ Secure Messaging</p>
            </div>

          </div>

          {/* Right Side */}

          <div className="p-12">

            <h2 className="text-3xl font-bold mb-8">
              Create Patient Account
            </h2>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-xl p-4"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="date"
                  className="border rounded-xl p-4"
                />

                <select className="border rounded-xl p-4">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
              >
                Create Account
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PatientRegister;