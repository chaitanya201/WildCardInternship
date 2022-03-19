import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AlbumDetails() {
  const [photos, setPhotos] = useState(null);
  const location = useLocation();
  const { album } = location.state;
  console.log("album is ", album.title);
  useEffect(() => {
    const getPhotos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/" + album.id + "/photos"
      );
      setPhotos(response.data);
      console.log(response.data);
    };
    getPhotos();
  }, []);
  return (
    <div>
      <div className="bg-slate-200">
        <div className="text-center uppercase text-lg">
          <h1>{album.title}</h1>
        </div>
        <br />
        <div>
          <div>
            <div className="text-xl px-6">
              <h1>Photos: </h1>
            </div>
            <div className="justify-center py-3 relative overflow-y-hidden grid md:grid-cols-3 gap-8  max-w-5xl m-auto ">
              {photos ? (
                photos.map((photo) => {
                  return (
                    <div key={photo.id} className='py-3 overflow-y-hidden '>
                      <div className="bg-slate-50  py-4 rounded-lg place-content-center px-4 border-2 shadow-lg">
                        <div className="py-3">
                          <div className="max-w-0">
                            <div>
                              <img
                                src={photo.url}
                                alt="img"
                                className="max-w-sm"
                              />
                            </div>
                            <div>
                              <label htmlFor="title">Thumbnail </label>
                              <img
                                src={photo.thumbnailUrl}
                                alt="img"
                                className="max-w-sm"
                              />
                            </div>
                            <div>{photo.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No photos found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
