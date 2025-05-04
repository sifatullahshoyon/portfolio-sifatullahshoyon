import ContactForm from "@/components/form/ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ffffff] mb-4">
            Have Any Questions?
          </h2>
          <p className="text-base text-[#A4A4A4] max-w-2xl mx-auto ">
            Are you interested in working together? I&apos;d love to hear about
            your project. Please use the form below to send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info Cards */}

          <ContactInfo />

          {/* Right Column - Contact Form */}

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
