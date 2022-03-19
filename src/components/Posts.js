import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import view from '../Images/view.png'
export default function Posts() {
  const user = useSelector((state) => state.currentUser.currentUser)

    const [allPosts, setAllPosts] = useState(null);
    useEffect(() => {
        const posts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setAllPosts(response.data)
        }
        posts()
    }, []);
  return (
    <div>
        <table className="table-auto ">
            <thead>
                <tr className="bg-slate-400">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="bg-slate-200">
                {
                    allPosts? allPosts.map((post) => {
                        return(
                            <tr key={post.id} className='hover:bg-white'>
                                <td>
                                    {post.id}
                                </td>
                                <td>
                                    {post.title}
                                </td>
                                <td>
                                    {post.body}
                                </td>
                                <td>
                                    <div className="flex space-x-3">
                                        <div className="space-x-2">
                                            <Link to="/user-details" state={{user:user}} >
                                                <img src={view} alt="view"  className="w-20 min-w-min" />
                                            </Link>
                                        </div>
                                        <div className="hover:bg-emerald-400 rounded-lg space-x-1">
                                            <Link to="/post-details" state={{post:post}}>Comments</Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }) : <tr>
                        <td>
                            No data found
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    </div>
  )
}
