"use client";

import { DotPattern } from "@/components/magicui/dot-pattern";
import DualTextEffect from "@/components/shared/DualTextEffect";
import { cn } from "@/lib/utils";
import BlogCard from "./BlogCard";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Blog = () => {
  const pathName = usePathname();

  return (
    <section
      id="blog"
      className="relative mt-12 flex flex-col items-center justify-center overflow-hidden bg-[#0e051a] text-white py-12"
    >
      {/* Purple glow effect - bottom left */}
      <div className="absolute top-36 left-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Dot Pattern Background */}

      {pathName !== "/blog" && (
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
      )}

      {/* container */}
      <div className="container px-4 md:px-6 lg:px-16">
        {/* start text section */}
        <div
          className="flex flex-col items-center justify-center space-y-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Dual Text Effect */}
          <DualTextEffect
            largeText="Blogs"
            smallText="Blogs"
            largeTextColor="text-[#3a2a5e18]" // Subtle translucent purple for large text
            smallTextColor="text-white" // White for small text
            largeTextSize="text-[40px] md:text-[80px] lg:text-[100px]" // Responsive text sizes
            smallTextSize="text-lg md:text-2xl lg:text-[40px]" // Responsive text sizes
          />
        </div>
        {/* End Text Section */}

        <div className="lg:pl-20">
          <BlogCard />
        </div>

        {/* end blog card */}

        {pathName !== "/blog" && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center  "
          >
            <Link href="/blog">
              <ShimmerButton background="#6000fa" className="shadow-2xl">
                <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
                  View More
                </span>
              </ShimmerButton>
            </Link>
          </div>
        )}
        {/* end view more btn */}
      </div>
    </section>
  );
};

export default Blog;
