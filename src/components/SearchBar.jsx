import React from "react";

function SearchBar() {
  return (
    <>
      <form>
        <div
          className="h-40 flex item-center justify-center"
          style={{
            backgroundColor: "#fdf7f3",
          }}
        >
          <div className="flex items-center m-10 w-3/4">
            <input
              className="flex justify-center flex-grow h-20 pl-3 border-2 border-black focus:outline-none 
font-sans bg-inherit shadow-lg"
              placeholder="Search by artist, title, keyword"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
