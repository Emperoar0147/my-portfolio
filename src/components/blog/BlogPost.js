// src/components/blog/BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    // 👇 Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    import(`../../blogs/${slug}.js`)
      .then((module) => {
        const { content, frontmatter } = module;
        setTitle(frontmatter.title);
        setContent(content);
      })
      .catch((err) => {
        console.error("Error loading blog post:", err);
        setTitle("Not Found");
        setContent("This blog post does not exist.");
      });
  }, [slug]);

  return (
    <div className="py-20 max-w-3xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-designColor mb-6">{title}</h1>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
