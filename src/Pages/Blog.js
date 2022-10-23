import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import arrow from "../../src/images/Arrow.png";
import "../css/style.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncBlogs, isLoading } from "../Redux/blogSlice";
import Loader from "../components/Loader";
import { useState } from "react";
const Blog = () => {
  const state = useSelector((state) => state);
  const isLoader = useSelector(isLoading);
  const dispatch = useDispatch();
  const blogs = state.blogSlice.blogs;
  const blog =
    state.blogSlice.blogs &&
    state.blogSlice.blogs[Math.floor(Math.random() * blogs.length)];
  const [loadMore, setLoadMore] = useState(6);
  const handleLoadMore = () => {
    setLoadMore(loadMore + 6);
  };
  useEffect(() => {
    dispatch(fetchAsyncBlogs());
  }, []);
  return (
    <div>
      <Header />
      <div className="featured-blog">
        <div className="container">
          {!isLoader ? (
            <Loader />
          ) : (
            <div className="row gx-4">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="left-wrapper">
                  <img src={blog.Image} alt="car" />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="right-wrapper">
                  <div className="top-wrapper">
                    <div>
                      <p>Posted on act 12</p>
                      <p>
                        <span className="m-1">
                          <i className="fa-sharp fa-solid fa-eye mr-4"></i>
                        </span>
                        23 views
                      </p>
                    </div>
                    <p className="featured">Featured</p>
                  </div>
                  <p className="featured-heading">{blog.Title}</p>
                  <p className="para mb-4">{blog.Subtitle}</p>
                  <Link
                    to={`/BlogDetail/${Math.floor(
                      Math.random() * blogs.length
                    )}`}
                    className="read-more"
                  >
                    Read More <img src={arrow} alt="arrow" className="mx-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="blogs">
        <div className="container">
          <div className="row gy-5">
            {!isLoader ? (
              <Loader />
            ) : (
              blogs.slice(0, loadMore).map((blog, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <Link to={`/BlogDetail/${blog.id}`}>
                      <div className="blog-image">
                        <span className="view">
                          <i className="fa-sharp fa-solid fa-eye"></i>
                        </span>
                        <img src={blog.Image} alt="blog1" />
                      </div>
                    </Link>

                    <div className="posted-date">
                      <p>Posted on act 12</p>
                      <p>
                        <span className="m-1">
                          <i className="fa-sharp fa-solid fa-eye mr-4"></i>
                        </span>
                        23 views
                      </p>
                    </div>
                    <p className="blog-small-heading">{blog.Title}</p>
                    <p className="blog-text">{blog.Subtitle}</p>
                  </div>
                );
              })
            )}
          </div>
          {isLoader ? (
            <button
              className="btn btn-dark lead-more-btn"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Blog;
