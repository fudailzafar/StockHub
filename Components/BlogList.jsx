import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BlogItem from "./BlogItem";

// Define your category tabs here
const categories = ["All", "Introduction", "Technical", "Fundamental", "Personal"];

// This component renders the fancy chip tabs
const CategoryTabs = ({ selected, setSelected }) => {
  return (
    <div className="px-4 py-10 flex justify-center items-center flex-wrap gap-2">
      {categories.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

// Chip component with Framer Motion animation
const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-black hover:text-white hover:bg-slate-500"
      } text-sm  md:text-2xl transition-colors px-2.5 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-black rounded-md"
        />
      )}
    </button>
  );
};

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <CategoryTabs selected={menu} setSelected={setMenu} />

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              thumbnailDescription={item.thumbnailDescription}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
