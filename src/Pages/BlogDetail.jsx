import React from "react";
import { useParams } from "react-router-dom";
import blog from "../../src/images/blog1.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncBlogDetail } from "../Redux/blogSlice";
import Loader from "../components/Loader";
import { isLoading } from "../Redux/blogSlice";
import removeSelectedBlog from "../Redux/blogSlice";
const BlogDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const isLoader = useSelector(isLoading);
  const blog = state.blogSlice.selectedBlog;
  useEffect(() => {
    dispatch(fetchAsyncBlogDetail(id));
    return () => dispatch(removeSelectedBlog());
  }, [id, dispatch]);
  console.log(id);
  return (
    <div className="blog-detail-wrapper">
      {!isLoader ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="top-content">
            <div className="posted-date">
              <p>Posted on act 12</p>
              <p>
                <span className="m-1">
                  <i className="fa-sharp fa-solid fa-eye mr-4"></i>
                </span>
                23 views
              </p>
            </div>
            <p className="top-heading">{blog?.Title}</p>

            <p className="para">{blog?.Subtitle}</p>
          </div>
          <div className="blog-image">
            <img src={blog?.Image} alt="" />
          </div>

          <div>
            <p className="small-blog">{blog?.Title}</p>
            <p className="para">{blog?.Article}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
