import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import view from '../Images/view.png'
import album from '../Images/album.png'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../store/currentUser";
const UsersScreen = () => {
  const [allUsers, setAllUsers] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  useEffect(() => {
    const getUsers = async () => {
      const getAllUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setAllUsers(getAllUsers.data);
      console.log("all usrs", getAllUsers.data);
      console.log("all usrs", allUsers);
    };
    getUsers();
  }, []);
  console.log("current user is ", currentUser);
  return (
    <div className="container flex justify-center mx-auto ">
      <div className="">
        <div className="w-full min-w-min">
          <div className="border-b border-gray-200 shadow">
            <div>
              <h1>Users</h1>
            </div>
            <div>
              <table className="bg-gray-200"> 
                <thead>
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">Id</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Email</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {allUsers ? (
                    allUsers.map((user) => {
                      return (
                        <tr key={user.id} className="hover:bg-slate-100" >
                          <td className="px-6 py-4 text-sm text-gray-500">{user.id}</td>
                          <td className="px-5 py-4 hover:text-green-500">
                            <Link
                              to="/user-details"
                              onClick={() => {
                                dispatch(updateCurrentUser(user));
                              }}
                            >
                              {user.name}
                            </Link>
                          </td>
                          <td className="px-5 py-4">{user.email}</td>
                          <td className="px-5 py-4">
                            <div className="flex px-2 space-x-6">
                              <div className="py-3 bg-green-500 rounded-t-lg rounded-b-lg rotate-90 border-solid shadow-md max-w-lg min-w-max ">
                                <Link className="bg-green-400 rounded-full"
                                  to="/view-posts"
                                  onClick={() => {
                                    dispatch(updateCurrentUser(user));
                                  }}
                                >
                                  <img src={view} alt="View" className="rotate-90" />
                                </Link>
                              </div>
                              <div className="bg-orange-400 rounded-t-lg rounded-b-lg max-w-lg min-w-max">
                                <Link to="/view-albums" state={{ user: user }}>
                                  <img src={album} alt="Album" />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <th>no data present</th>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersScreen;
