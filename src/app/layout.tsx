import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/components/AOSInitializer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sifat Ullah Shoyon | Portfolio",
  description:
    "A personal portfolio website showcasing the skills, projects, and experiences of Sifat Ullah Shoyon. This platform highlights expertise in modern web development technologies, including MERN stack, with a focus on creating secure, scalable, and impactful applications. The site features a clean, responsive design, offering visitors an engaging way to explore professional achievements, technical proficiencies, and personal aspirations. It serves as a central hub for connecting with potential collaborators, clients, and employers while reflecting a passion for continuous learning and innovation in the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
