import React from "react";
import { Link } from "react-router-dom";

function ArtDetail({ art }) {
  return (
    <div>
      <div>
        <Link to={`/id/${art.imageId}`}>
          <div>
            <div className="flex justify-center">
              <img
                className="h-80"
                src={
                  art.imageURL !== "https://http.cat/status/204"
                    ? art.imageURL
                    : "https://puam-loris.aws.princeton.edu/loris/notavailnew.jp2/full/!650,650/0/default.jpg"
                }
                alt={art.title}
              />
            </div>
            <div className="flex flex-row">
              <p className=" font-bold text-sm">{art.title}</p>
              <p className=" text-sm">{art.date}</p>
            </div>
            <div>
              <p className="">{art.artist}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ArtDetail;
