// src/components/blog/BlogList.js
import React from "react";
import { Link } from "react-router-dom";

// Dynamically load all blog modules in src/blogs
const blogModules = require.context("../../blogs", false, /\.js$/);
const blogs = blogModules
  .keys()
  .map((key) => blogModules(key).frontmatter)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const BlogList = () => (
  <section className="w-full py-20 border-b-[1px] border-b-black">
    <h2 className="text-5xl font-bold mb-4 text-center">Blog Posts</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {blogs.map(({ slug, title, date }) => (
        <Link
          to={`/blog/${slug}`}
          key={slug}
          className="bg-[#1e2024] hover:bg-[#2a2d31] p-6 rounded-lg shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-designColor mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{new Date(date).toDateString()}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default BlogList;
