import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PostDetails() {
  const location = useLocation();
  const { post } = location.state;
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + post.id + "/comments"
      );
      setComments(response.data);
      console.log("post is ", post);
      console.log("comments are ", response.data);
    };
    getComments();
  }, []);
  return (
    <div className="bg-slate-400 px-3 py-3  ">
      <div className="border-solid shadow-lg  block rounded-lg  bg-slate-200 py-3 text-center content-center">
        <div className="text-gray-600 text-lg leading-tight font-medium mb-2 uppercase px-5 py-2">
          <h2>
            <div>{post.title} </div>
          </h2>
        </div>
        <div className="px-3  text-center ">{post.body}</div>
      
      <div>
        
        <div className="  px-2">
          <div className="py-2 uppercase text-gray-90000 text-lg bg-green-400 text-center rounded-lg ">
            <h3>comments</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8  max-w-5xl m-auto py-3 ">
            {comments ? (
              comments.map((comment) => {
                return (
                  <div className="py-3 bg-white  rounded-lg px-4" key={comment.id}>
                    <div
                      key={comment.id}
                      className="flex-grow max-w-sm min-w-min block rounded-lg   "
                      >
                      <div className="bg-teal-400 px-2" >
                        <label
                          htmlFor="name"
                          className="uppercase text-base font-serif  "
                        >
                          Name{" "}
                        </label>
                        <big>{comment.name}</big>
                      </div>
                      <div className="bg-cyan-500 px-2">
                        <label
                          htmlFor="email"
                          className="uppercase text-base font-serif"
                        >
                          email:{" "}
                        </label>
                        <big>{comment.email}</big>
                      </div>
                      <div className="hover:bg-slate-200">
                        <big>{comment.body}</big>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No comments found</div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
