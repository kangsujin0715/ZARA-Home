import React from 'react';

function Searchbar() {
  return (
    <div className="text-center bg-black h-11 flex justify-center items-center">
      <input className="main-search text-center" type="search" placeholder="Search Market" />
      <button className="main-search-btn"></button>
    </div>
  );
}

export default Searchbar;