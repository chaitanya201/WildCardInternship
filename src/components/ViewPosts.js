import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { updateAllPosts } from '../store/postsSlice';

export default function ViewPosts() {
  const dispatch = useDispatch()
  useEffect(() => {
    
    const getAllPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch(updateAllPosts(response.data))
      console.log("posts ", response.data);
  }
  getAllPosts()
    
  }, []);
  const location = useLocation()
  const {user} = location.state
  console.log("user is *****", location.state);
  const currentUser = useSelector((state) => state.currentUser.currentUser)
  const allPosts = useSelector((state) => state.allPosts.allPosts);
  let us = null
  user ? us = {...user} : us = {...currentUser}
  console.log("us is ", us);
  console.log("all posts" , allPosts);
  return (
    <div>
      <div className="text-center py-4 uppercase">
        <h1>{us.name} posts</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8  max-w-5xl m-auto py-3">
        {allPosts ? (
          allPosts.map((post) => {
            if (post.userId === us.id) {
              return (
                <div key={post.id} className="px-2">
                  <div className="bg-slate-50 border-b-2 border-gray-200 shadow max-w-sm min-w-min rounded-lg text-center ">
                    <div className="bg-slate-200 py-4 hover:bg-slate-400 ">
                      <h2 className="">{post.title}</h2>
                    </div>
                    <div className="bg-white">
                      <h4>{post.body}</h4>
                    </div>
                  </div>
                  <br />
                </div>
              );
            }
          })
        ) : (
          <div>No posts found </div>
        )}
      </div>
    </div>
  );
}
