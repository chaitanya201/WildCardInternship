import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../store/currentUser";
import {updateAllAlbums} from "../store/allAlbums"
export default function Albums() {
  const user = useSelector((state) => state.currentUser.currentUser);
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const allAlbums = useSelector((state) => state.allAlbums.allAlbums);
  const dispatch = useDispatch();
  useEffect(() => {
    
    const getAllAlbums = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch(updateAllAlbums(response.data));
    };
    getAllAlbums();
  }, []);

  console.log("all posts are ", allAlbums);
  return (
    <div className="relative left-1/3">
      <div className="py-3 uppercase font-semibold text-lg">
        <h1>Albums</h1>
      </div>
      <table>
        <thead>
          <tr className="bg-teal-500">
            <th className="space-x-4">Id</th>
            <th className="space-x-2">Title</th>

            <th className="space-x-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-teal-100">
          {allAlbums ? (
            allAlbums.map((album) => {
              return (
                <tr key={album.id} className="hover:bg-white">
                  <td className="space-x-6">{album.id}</td>
                  <td className="space-x-6">{album.title}</td>

                  <td className="space-x-2">
                    <div className="flex space-x-6">
                      <div className="hover:bg-blue-600 rounded-lg text-black">
                        <Link
                          to="/user-details"
                          onClick={() => {
                            //   e.preventDefault()
                            //   console.log("e is ", e)
                            console.log("pst is ", album.userId);

                            for (let j = 0; j < allUsers.length; j++) {
                              if (album.userId === allUsers[j].id) {
                                dispatch(updateCurrentUser(allUsers[j]));
                                console.log("case matched", user);
                                console.log("user kfa ", allUsers[j]);
                                return;
                              }
                            }
                          }}
                        >
                          View User
                        </Link>
                      </div>
                      <div className="hover:bg-blue-600 rounded-lg text-black">
                        <Link to="/album-details" state={{ album: album }}>
                          View Photos
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
