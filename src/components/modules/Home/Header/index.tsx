import Navbar from "./Navbar/Navbar";
// import Hero from "./Hero";

export default function Header() {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex flex-col justify-center items-center bg-[#0e051a] text-white overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "90px 90px", // Adjusted grid spacing for better visibility
        }}
      ></div>

      {/* Purple Glow - Top Left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Purple Glow - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="z-10 text-center px-4">
        <Navbar />
        {/* <Hero /> */}
      </div>
    </section>
  );
}
