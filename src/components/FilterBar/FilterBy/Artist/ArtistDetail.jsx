import React, { useState } from "react";

function ArtistDetail({ art }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        id={art.artist}
        checked={isChecked}
        onChange={handleCheckboxChange}
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
