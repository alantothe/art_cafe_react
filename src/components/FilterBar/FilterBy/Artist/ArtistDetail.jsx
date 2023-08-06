import React from "react";

function ArtistDetail({ art }) {
  return (
    <div>
      <p className=" text-xs">{art.artist !== null ? art.artist : "Unknown"}</p>
    </div>
  );
}

export default ArtistDetail;
