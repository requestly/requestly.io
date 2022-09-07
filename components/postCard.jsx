// Blog Post card
import React, { useEffect, useState } from "react";
import Link from "next/link";
import blogCategories from "../utils/json/blogCategories.json";
import {
  submitCustomEvent,
  trackBlogCardClickedEvent,
  trackBlogCategoryClickedEvent,
  trackBlogViewedEvent,
} from "../utils/Analytics";
import { CONSTANTS } from "../utils/constants";

const PostInfo = ({ post, featured }) => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    const getDate = () => {
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setDate(new Date(post.date).toLocaleDateString("en-IN", options));
    };
    getDate();
  }, [post.date]);

  return (
    <div className="card-body d-flex flex-column justify-content-between align-content-center col-auto py-4 p-lg-5">
      {/* LINK TO POST */}
      <Link
        onClick={() => {
          //Analytics
          trackBlogCardClickedEvent(post.permalink);
        }}
        href={`/blog/${post.permalink}`}
      >
        <a className="mb-0 d-flex justify-content-center align-items-center flex-column">
          <img
            src={post.coverImage}
            width={featured ? "50%" : "400px"}
            height={featured ? "auto" : "300"}
            className="rounded-xl mb-3 d-block border-gray-400 border object-fit-cover"
            alt={post.title}
          />
          <h3 align="center">{post.title}</h3>
        </a>
      </Link>
      <div className="d-flex flex-column justify-content-center align-content-center my-3">
        {/* BLOG CATEGORY BADGES */}
        <div className="d-flex justify-content-center align-items-center flex-xl-wrap row-gap">
          {post.category.map((name, key) => {
            const categoryKey = Object.keys(blogCategories).find(
              (x) =>
                blogCategories[x].title.toLowerCase() === name.toLowerCase()
            );
            return (
              <a
                key={key}
                onClick={() => {
                  // Analytics
                  trackBlogCategoryClickedEvent(categoryKey);
                }}
                href={`/blog/category/${categoryKey}`}
                className={`badge badge-sm badge-${blogCategories[categoryKey].style} text-uppercase mr-2 px-3`}
              >
                {name}
              </a>
            );
          })}
        </div>
        {/* POST DATE */}
        <h6 className="d-flex text-muted font-weight-normal mb-0 mt-3 justify-content-center align-items-center">
          <i className="far fa-calendar-alt mr-2"></i>
          <time dateTime="2019-04-25">{date}</time>
        </h6>
      </div>
      {/* EXCERPT */}
      <p className="d-flex justify-content-center align-items-center text-center">
        {post.excerpt.length < 100
          ? post.excerpt
          : `${post.excerpt.slice(0, 100)}...`}
      </p>
    </div>
  );
};

export default PostInfo;
