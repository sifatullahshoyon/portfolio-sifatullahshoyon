import Blog from "@/components/modules/Home/Blog/Blog";
import Navbar from "@/components/modules/Home/Header/Navbar/Navbar";
import React from "react";

const BlogPage = () => {
  return (
    <section>
      <Navbar />
      {/* End Navbar  */}
      <Blog />
    </section>
  );
};

export default BlogPage;
