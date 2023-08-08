import React from "react";

function ArtistDetail({ art, isChecked, onArtistClick }) {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        id={art.artist}
        checked={isChecked}
        onChange={(e) => onArtistClick(art.artist, e.target.checked)}
      />
      <label htmlFor={art.artist}>
        <p className="text-xs">
          {art.artist !== null ? `${art.artist} (${art.count})` : "Unknown"}
        </p>
      </label>
    </div>
  );
}

export default ArtistDetail;
