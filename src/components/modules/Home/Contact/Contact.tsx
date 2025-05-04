import React from "react";
import style from "./Contact.module.css";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${style.background} relative w-full mt-12 flex items-center justify-center bg-[#0e051a] text-white overflow-hidden`}
    >
      {/* Purple glow effect - bottom left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Container */}
      <div className="container px-4 md:px-6">
        <ContactSection />
      </div>
    </section>
  );
};

export default Contact;
