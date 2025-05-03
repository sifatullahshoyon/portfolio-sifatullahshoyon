"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { SiAxios, SiExpress, SiNextdotjs, SiReactrouter } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { TextShimmer } from "../../../../components/motion-primitives/text-shimmer";

const projects = [
  {
    id: 1,
    title: "Papyrus",
    description:
      "Papyrus is an e-commerce platform for stationery products. It allows users to browse a wide range of stationery items, add them to cart, and make secure payments.",
    image:
      "https://res.cloudinary.com/dowpaz8fo/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746282034/Papyrus_mgvpbx.png",
    category: "react",
    liveLink: "https://papyrus-client.vercel.app/",
    icons: [
      <FaReact key="react" className="text-[#53C1DE]" size={20} />,
      <FaNodeJs key="node" className="text-[#21A366]" size={20} />,
      <SiExpress key="cart" className="text-[#000000]" size={20} />,
      <BiLogoMongodb key="payment" className="text-[#4DB33D]" size={20} />,
      <BiLogoTypescript key="payment" className="text-[#007acc]" size={20} />,
      <TbBrandRedux key="payment" className="text-[#764abc]" size={20} />,
    ],
  },
  {
    id: 2,
    title: "Hand To Hand",
    description:
      "HandToHand web application a modern, user-friendly platform designed to make buying and selling used products seamless, secure, and efficient.",
    image:
      "https://res.cloudinary.com/dowpaz8fo/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746282034/hand_to_hand_krtqni.png",
    category: "nextjs",
    liveLink: "https://hand-to-hand-frontend.vercel.app/",
    icons: [
      <SiNextdotjs key="react" className="text-[#000000]" size={20} />,
      <FaNodeJs key="node" className="text-[#21A366]" size={20} />,
      <SiExpress key="cart" className="text-[#000000]" size={20} />,
      <BiLogoMongodb key="payment" className="text-[#4DB33D]" size={20} />,
      <BiLogoTypescript key="payment" className="text-[#007acc]" size={20} />,
      <TbBrandRedux key="payment" className="text-[#764abc]" size={20} />,
    ],
  },
  {
    id: 3,
    title: "Tech Hiem",
    description:
      "Tech Heim is an innovative online store that offers a diverse selection of digital gadgets, available for purchase in both cash and installment options. Embodying the motto. '",
    image:
      "https://res.cloudinary.com/dowpaz8fo/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746282034/tech_hiem_mevrxy.png",
    category: "react",
    liveLink: "https://techheim.netlify.app/",
    icons: [
      <FaReact key="react" className="text-[#53C1DE]" size={20} />,
      <FaNodeJs key="node" className="text-[#21A366]" size={20} />,
      <SiExpress key="cart" className="text-[#000000]" size={20} />,
      <BiLogoMongodb key="payment" className="text-[#4DB33D]" size={20} />,
      <SiReactrouter key="payment" className="text-[#D0021B]" size={20} />,
      <SiAxios key="payment" className="text-[#764abc]" size={20} />,
    ],
  },
];

export function ProjectTabs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tab: string) => {
    setIsLoading(true);
    setSelectedCategory(tab);

    // Simulate API loading delay (remove in production)
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Tabs defaultValue="all" className="w-full mt-8 mb-2 mx-auto">
      <TabsList className="grid w-full grid-cols-4 gap-2 bg-gradient-to-b from-[#1a0c2e] to-[#0e051a]">
        {["all", "react", "nextjs", "sql"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            onClick={() => handleTabChange(tab)}
            className="relative group text-[#ffffff] data-[state=active]:text-[#1a0c2e] data-[state=active]:bg-[#ffffff] rounded transition-all overflow-hidden"
          >
            <h4 className="relative z-10 ">{tab.toUpperCase()}</h4>
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 rounded-full opacity-0 group-data-[state=active]:opacity-100 z-0"
            />
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={selectedCategory} className="mt-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((skeleton) => (
              <motion.div
                key={skeleton}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative mx-auto bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden border border-purple-900/20 max-w-[385px] h-[400px]">
                  <CardHeader className="p-4">
                    <div className="w-full h-[180px] bg-[#1f102f] rounded-lg animate-pulse"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-6 w-3/4 bg-[#1f102f] rounded animate-pulse mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-[#1f102f] rounded animate-pulse"></div>
                      <div className="h-3 w-5/6 bg-[#1f102f] rounded animate-pulse"></div>
                      <div className="h-3 w-4/6 bg-[#1f102f] rounded animate-pulse"></div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 bg-[#1f102f] rounded-full animate-pulse"
                      ></div>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                >
                  <Card className="relative mx-auto bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden border border-purple-900/20 hover:scale-[1.02] hover:shadow-purple-900/40 transition-transform max-w-[385px]">
                    <CardHeader className="p-4">
                      <Lens zoomFactor={2} lensSize={150} isStatic={false}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={500}
                          className="rounded-lg object-cover"
                        />
                      </Lens>
                    </CardHeader>
                    <CardContent className="">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-[#ffffff] mb-2">
                          {project.title}
                        </h3>
                        <Link
                          href={project.liveLink}
                          className="text-[#bdacff] flex text-base gap-2 items-center"
                          target="_blank"
                        >
                          <p>Live Site</p>
                          <SquareArrowOutUpRight size={15} />
                        </Link>
                      </div>
                      <p className="text-sm text-[#A4A4A4] leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                      {project.icons.map((icon, idx) => (
                        <span
                          key={idx}
                          className="text-purple-400 text-2xl hover:text-purple-300 hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse shadow-md shadow-purple-500/20 rounded-full p-2 bg-[#1f102f] flex"
                        >
                          {icon}
                        </span>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center col-span-full py-10">
                <TextShimmer
                  className="font-poppins text-xl font-semibold mb-4 capitalize tracking-wide"
                  duration={1}
                >
                  projects not available at this time.
                </TextShimmer>
              </div>
            )}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
