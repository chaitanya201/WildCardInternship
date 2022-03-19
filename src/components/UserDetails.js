import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function UserDetails() {
  // const location = useLocation();
  const user = useSelector((state) => state.currentUser.currentUser);
  // const { user } = location.state;
  console.log("usre is ", user);
  return (
    <div className=" relative left-40 ">
      <div className="px-5">
        <div className="uppercase text-left text-4xl py-1">
          <h1>{user.username}</h1>
        </div>
        <h4>Details:</h4>
      </div>
      <div className="px-4 py-3">
        <div className="flex px-2 space-x-11">
          <label htmlFor="id">ID: </label>
          <input
            value={user.id}
            readOnly
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex px-2 space-x-4 py-5">
          <label htmlFor="name">Name: </label>
          <input
            value={user.name}
            readOnly
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex px-2 space-x-5 py-5">
          <label htmlFor="email">Email: </label>
          <input
            value={user.email}
            readOnly
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex px-2 space-x-4 py-3">
          <label htmlFor="Phone">Phone: </label>
          <input
            value={user.phone}
            readOnly
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" px-2 space-x-1 py-2">
          <label htmlFor="address">Address: </label>
          <div className="py-3 px-7">
            <div className="flex space-x-5">
              <label htmlFor="street">Street: </label>
              <input
                value={user.address.street}
                readOnly
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex space-x-7 py-3">
              <label htmlFor="suite">suite: </label>
              <input
                value={user.address.suite}
                readOnly
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex space-x-10">
              <label htmlFor="city">city: </label>
              <input
                value={user.address.city}
                readOnly
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex space-x-2 py-3">
              <label htmlFor="zipcode">zipcode: </label>
              <input
                value={user.address.zipcode}
                readOnly
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <div className="py-5">
                <label htmlFor="geolocation">GeoLocation: </label>
                <div className="px-7">
                  <div className="py-3 space-x-4">
                    <label htmlFor="lat">Latitude: </label>
                    <input
                      value={user.address.geo.lat}
                      readOnly
                      className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="space-x-1">
                    <label htmlFor="lng">Longitude: </label>
                    <input
                      value={user.address.geo.lng}
                      readOnly
                      className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="company">Company: </label>
          <div className="px-4">
          <div className="flex px-4 space-x-3 py-3">
            <label htmlFor="name">Name: </label>
            <input
              value={user.company.name}
              readOnly
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex px-4 space-x-9 py-3">
            <label htmlFor="name">BS: </label>
            <input
              value={user.company.bs}
              readOnly
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </div>
        </div>
        <div className="flex space-x-64 py-3">
          <div>
            <Link to="/view-posts">
              <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                View {user.name}
              </button>
            </Link>
          </div>
          <div>
            <Link to="albums" state={{ user: user }}>
              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                View Albums
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
