import Link from "next/link";

import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
      <Link
        href="https://www.facebook.com/SifatUllahShoyon"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <FaSquareFacebook size={25} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sifatullahshoyon/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <FaLinkedin size={25} />
      </Link>
      <Link
        href="https://x.com/sifatullah5484"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <FaSquareXTwitter size={25} />
      </Link>
      <Link
        href="https://www.instagram.com/sifatullahshoyon/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <FaSquareInstagram size={25} />
      </Link>
      <Link
        href="https://github.com/sifatullahshoyon"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <FaSquareGithub size={25} />
      </Link>
    </div>
  );
};

export default SocialLinks;
