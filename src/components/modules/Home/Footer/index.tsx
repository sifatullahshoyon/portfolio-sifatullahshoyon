import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/sifat-ullah-shoyon-porfolio-logo.png";
import SocialLinks from "@/components/shared/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0e051a] text-white py-12">
      {/* Dot Pattern Background */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"
        )}
      />

      {/* Footer Content */}
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mx-auto justify-center lg:w-[85%] ">
          {/* Logo Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col items-center md:items-start "
          >
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={200}
                placeholder="blur"
                loading="lazy"
                blurDataURL="all"
                className="hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <p className="mt-8 text-sm text-[#A4A4A4] text-center md:text-left tracking-wide leading-relaxed">
              Building secure and impactful web applications with modern
              technologies.
            </p>
          </div>

          {/* Quick Links Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-[#A4A4A4]">
              <li>
                <Link
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold text-white">Social Links</h4>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Address Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold text-white">Address</h4>
            <p className="mt-6 text-sm text-[#A4A4A4]">Dhaka, Bangladesh 🇧🇩</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700 lg:w-[85%] mx-auto" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#A4A4A4] lg:w-[85%] mx-auto">
          <p>&copy; {currentYear} Sifat Ullah Shoyon. All rights reserved.</p>
          <p>
            Designed with <span className="text-red-500">♥</span> by Sifat Ullah
            Shoyon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
