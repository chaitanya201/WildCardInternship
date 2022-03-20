import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ViewPosts() {
  const location = useLocation()
  const {user} = location.state
  const allPosts = useSelector((state) => state.allPosts.allPosts);

  return (
    <div>
      <div className="text-center py-4 uppercase">
        <h1>{user.name} posts</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8  max-w-5xl m-auto py-3">
        {allPosts ? (
          allPosts.map((post) => {
            if (post.userId === user.id) {
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
