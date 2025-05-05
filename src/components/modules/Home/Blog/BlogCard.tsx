import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";
import { AnimatedList } from "@/components/magicui/animated-list";
import ProfilePic from "@/components/shared/ProfilePic";

export default function BlogCard() {
  const posts = [
    // {
    //   title: " SSG vs SSR: Which One Should You Choose?",
    //   author: "Sifat Ullah Shoyon",
    //   role: "MERN Stack Developer",
    //   date: "4 months ago",
    //   content:
    //     "Static Site Generation (SSG) and Server-Side Rendering (SSR) are two powerful rendering strategies in modern web development, each with its own strengths and ideal use cases. SSG pre-builds pages as static HTML files during the build phase, offering lightning-fast load times, excellent SEO benefits, and minimal server load since pages are served directly without dynamic processing. This makes SSG perfect for content that rarely changes, such as blogs, documentation sites, portfolios, or product listings. However, SSG struggles with real-time updates and personalized content, requiring a rebuild to reflect new data. On the other hand, SSR generates HTML dynamically on each request, ensuring users always see the latest content, making it ideal for news sites, live dashboards, e-commerce checkouts, or any application requiring fresh, user-specific data. While SSR excels in dynamic content delivery, it comes with slower load times and higher server strain due to repeated processing. Choosing between SSG and SSR ultimately depends on your project’s needs—SSG for speed and efficiency with static content, and SSR for real-time, dynamic user experiences.",
    //   tags: ["MERN", "Next Js", "SSR", "SSG"],
    // },
    {
      title:
        "SSR with Caching Confusion in Next.js: When to Use no-store vs force-cache?",
      author: "Sifat Ullah Shoyon",
      role: "MERN Stack Developer",
      date: "5 months ago",
      content:
        "In Next.js, choosing between cache: 'no-store' and cache: 'force-cache' in SSR depends on your data freshness needs. Using force-cache with revalidate improves performance but delays updates, making it unsuitable for real-time apps like chats or stock trackers. On the other hand, no-store ensures every request fetches fresh data, crucial for dynamic dashboards or live updates. While force-cache works well for semi-static content like blogs or product listings, no-store maintains SSR's true purpose—delivering up-to-date content instantly. Always match your caching strategy to your app's real-time requirements.",
      tags: ["MERN", "force-cache", "SSR", "Cashing", "no-store"],
    },
    {
      title:
        "Callback and Higher-Order Functions: Powerful JavaScript Concepts",
      author: "Sifat Ullah Shoyon",
      role: "MERN Stack Developer",
      date: "6 months ago",
      content:
        "In JavaScript, callback and higher-order functions (HOF) are fundamental to functional programming. A callback function is a function that is passed as an argument to another function and gets executed later, commonly used in event handlers or API responses. On the other hand, a higher-order function is a function that either takes another function as an argument or returns a function, such as map(), filter(), and reduce(). These concepts make code more modular, reusable, and expressive, playing a crucial role in JavaScript's asynchronous and functional programming paradigms.",
      tags: ["JavaScript", "HOF", "programming", "function", "API"],
    },
  ];

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="container mx-auto  px-4 py-8 max-w-4xl relative flex  w-full flex-col overflow-hidden"
    >
      <AnimatedList>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-transparent border-[#1a0c2d]"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <ProfilePic />
                  <div>
                    <h4 className="font-medium text-[#ffffff] mb-1">
                      {post.author}
                    </h4>
                    <p className="text-xs text-[#A4A4A4]">{post.role}</p>
                  </div>
                </div>
                <CardDescription className="text-sm mb-2 text-[#A4A4A4]">
                  {post.date}
                </CardDescription>
                <CardTitle className="text-2xl text-[#ffffff]">
                  <h2>{post.title}</h2>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="mb-6 text-[#A4A4A4]">{post.content}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      className="px-3 py-1 bg-purple-900/20 text-purple-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <hr className="my-4 border-gray-700" />

                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="text-[#A4A4A4]">5 min read</span>

                  <Link href="/blog">
                    <ShinyButton className="">
                      <span className="text-[#ffffff] cursor-pointer">
                        Read more
                      </span>
                    </ShinyButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedList>
    </div>
  );
}
