import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { updateAllAlbums } from '../store/allAlbums';
import { updateAllComments } from '../store/commentsSlice';
import { updateAllPosts } from '../store/postsSlice';
import { updateAllUsers } from '../store/userSlice';
export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getAllUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(updateAllUsers(response.data))
        }
        getAllUsers()
        const getAllPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(updateAllPosts(response.data))
            console.log("posts ", response.data);
        }
        getAllPosts()
        const getAllAlbums = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            dispatch(updateAllAlbums(response.data))
        }
        getAllAlbums()
        
    }, []);
  return (
    <div>Home</div>
  )
}
