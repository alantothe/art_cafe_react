import React from "react";
import { Link } from "react-router-dom";

function ArtDetail({ art }) {
  return (
    <div>
      <div>
        <Link to={`/id/${art.imageId}`}>
          <div className="w-1/4">
            <div>
              <img className="" src={art.imageURL} alt={art.title} />
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
