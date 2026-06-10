import {
  CalendarDays,
  FileText,
  ShieldCheck,
  MessageCircle,
  HeartPulse,
  CreditCard,
 
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <FileText size={40} />,
      title: "Medical Records",
      desc: "Access reports, diagnoses and health history securely.",
    },
    {
      icon: <CalendarDays size={40} />,
      title: "Appointments",
      desc: "Book and manage appointments online.",
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Telehealth",
      desc: "Connect with healthcare providers remotely.",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Billing",
      desc: "Track invoices, insurance and payments.",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Messaging",
      desc: "Communicate securely with providers.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Security",
      desc: "Enterprise-grade healthcare security.",
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* HERO */}

      <section className="relative h-screen w-full overflow-hidden">

  {/* Background Video */}

  <video
    src="/videos/healthcare-hero.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="
      absolute
      top-0
      left-0
      w-full
      h-full
      object-cover
      z-0
    "
  />

  {/* Gradient Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-blue-950/70
      via-blue-900/50
      to-cyan-700/40
      z-10
    "
  />

  {/* Content */}

  <div
    className="
      relative
      z-20
      h-full
      max-w-7xl
      mx-auto
      px-6
      flex
      items-center
    "
  >

    <div className="max-w-3xl">

      <span
        className="
          bg-white/20
          backdrop-blur-md
          border
          border-white/20
          text-white
          px-5
          py-2
          rounded-full
        "
      >
        Healthcare Patient Portal
      </span>

      <h1
        className="
          mt-8
          text-white
          font-bold
          text-6xl
          md:text-7xl
          leading-tight
        "
      >
        Transforming Healthcare
        <br />
        For Patients &
        <span className="text-cyan-300">
          {" "}Providers
        </span>
      </h1>

      <p
        className="
          mt-8
          text-xl
          text-slate-200
          max-w-2xl
        "
      >
        Access medical records, schedule appointments,
        manage prescriptions and communicate securely
        with healthcare providers.
      </p>

      <div className="flex gap-4 mt-10">

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
          "
        >
          Get Started
        </button>

        <button
          className="
            bg-white/20
            backdrop-blur-md
            border
            border-white/20
            text-white
            px-8
            py-4
            rounded-2xl
          "
        >
          Learn More
        </button>

      </div>

    </div>

  </div>

</section>

{/* STATS SECTION */}

<section className="bg-[#030712] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {[
        ["10K+", "Patients"],
        ["500+", "Doctors"],
        ["50+", "Hospitals"],
        ["99.9%", "Uptime"],
      ].map((item) => (
        <div
          key={item[1]}
          className="
            bg-slate-900/80
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-8
            text-center
            transition-all
            duration-300
            hover:border-cyan-500
            hover:-translate-y-2
          "
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            {item[0]}
          </h2>

          <p className="mt-3 text-slate-400 text-lg">
            {item[1]}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
      {/* FEATURES */}

<section className="bg-[#030712] py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
        px-5 py-2
        rounded-full
        bg-blue-500/10
        border border-blue-500/20
        text-cyan-300
      "
      >
        Core Features
      </span>

      <h2 className="mt-6 text-5xl md:text-6xl font-bold">
        Everything In One Platform
      </h2>

      <p className="mt-6 text-slate-400 text-lg">
        Manage appointments, medical records,
        billing and communication from one secure
        healthcare ecosystem.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {features.map((feature) => (
        <div
          key={feature.title}
          className="
          group
          bg-slate-900/70
          backdrop-blur-xl
          border border-slate-800
          rounded-3xl
          p-8
          hover:border-cyan-500
          hover:-translate-y-2
          transition-all
          duration-300
        "
        >
          <div
            className="
            text-cyan-400
            group-hover:scale-110
            transition
          "
          >
            {feature.icon}
          </div>

          <h3 className="text-2xl font-semibold mt-6">
            {feature.title}
          </h3>

          <p className="mt-4 text-slate-400">
            {feature.desc}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>

{/* SHOWCASE */}

<section className="bg-black py-28">

  <div
    className="
    max-w-7xl
    mx-auto
    px-6
    grid
    lg:grid-cols-2
    gap-16
    items-center
  "
  >

    <div>

      <span
        className="
        px-5 py-2
        rounded-full
        bg-cyan-500/10
        border border-cyan-500/20
        text-cyan-300
      "
      >
        Modern Healthcare
      </span>

      <h2 className="mt-6 text-5xl font-bold">
        Better Care Through Technology
      </h2>

      <p className="mt-6 text-slate-400 text-lg leading-relaxed">
        Connect patients, doctors and hospitals
        through one centralized platform with
        secure medical records, telehealth
        consultations and appointment management.
      </p>

      <button
        className="
        mt-8
        bg-blue-600
        hover:bg-blue-700
        px-8
        py-4
        rounded-2xl
        font-semibold
      "
      >
        Learn More
      </button>

    </div>

    <div
      className="
      bg-slate-900
      border border-slate-800
      rounded-[32px]
      p-8
      shadow-2xl
    "
    >

      <img
        src="/images/dashboard.png"
        alt="Healthcare Dashboard"
        className="rounded-2xl"
      />

    </div>

  </div>

</section>

      {/* SECURITY */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            rounded-[40px]
            p-16
          ">

            <h2 className="text-5xl font-bold">
              Security & Privacy First
            </h2>

            <p className="mt-6 text-xl text-blue-100">
              Built with enterprise-grade security,
              encrypted medical records and role-based
              access control.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-6xl font-bold">
            Start Your Healthcare Journey
          </h2>

          <p className="mt-6 text-xl text-slate-400">
            Join thousands of patients and providers
            using our platform.
          </p>

          <button className="
            mt-10
            bg-blue-600
            px-8
            py-4
            rounded-2xl
            font-semibold
          ">
            Create Account
          </button>

        </div>

      </section>

    </div>
  );
};

export default Home;