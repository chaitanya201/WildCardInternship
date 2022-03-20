import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateAllAlbums } from "../store/allAlbums";

export default function ViewAlbums() {
    const location = useLocation();
    const dispatch = useDispatch()
    const allAlbums = useSelector((state) => state.allAlbums.allAlbums)
  const { user } = location.state;
  console.log("location is ", location.state);
  useEffect(() => {
    const getAllUserAlbums = async () => {
      const getAllAlbums = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/"
      );
      dispatch( updateAllAlbums(getAllAlbums.data));
      console.log(getAllAlbums.data, " all albums");
    };
    getAllUserAlbums();
  }, []);
  return (
    <div className="bg-slate-300">
    <div className="text-center py-3 uppercase">
      <h1>{user.name} Albums</h1>
    </div>
        <div className="relative left-1/3">
        {
            allAlbums ? allAlbums.map((album) => {
                if(album.userId === user.id) {
                    return (
                      <div key={album.id} className=' rounded-lg py-3 max-w-sm text-center'>
                          <div className="bg-emerald-500">
                              <h2>{album.title}</h2>
                          </div>
                          
                      </div>
                  )
                }
              }) : <div>No posts found </div>
          }
        </div>
    </div>
  )
}
