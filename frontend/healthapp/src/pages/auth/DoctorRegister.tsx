
const DoctorRegister = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

          {/* Left Side */}

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-12 flex flex-col justify-center">

            <h1 className="text-5xl font-bold">
              Join Our
              <br />
              Healthcare Network
            </h1>

            <p className="mt-6 text-lg">
              Provide care, manage appointments and connect with patients.
            </p>

            <div className="mt-10 space-y-4">
              <p>✓ Patient Management</p>
              <p>✓ Telehealth Services</p>
              <p>✓ Digital Prescriptions</p>
              <p>✓ Appointment Scheduling</p>
            </div>

          </div>

          {/* Right Side */}

          <div className="p-12">

            <h2 className="text-3xl font-bold mb-8">
              Doctor Registration
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Specialization"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="MCI Registration Number"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Languages (English, Hindi...)"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={4}
                placeholder="Professional Bio"
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

              {/* Documents */}

              <div className="border-2 border-dashed rounded-xl p-6">
                <label className="font-medium">
                  Upload Medical License
                </label>

                <input
                  type="file"
                  className="mt-3 block"
                />
              </div>

              <div className="border-2 border-dashed rounded-xl p-6">
                <label className="font-medium">
                  Upload Degree Certificate
                </label>

                <input
                  type="file"
                  className="mt-3 block"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                <p className="text-blue-700">
                  Your account will remain under review until
                  your credentials have been verified.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
              >
                Submit For Verification
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DoctorRegister;