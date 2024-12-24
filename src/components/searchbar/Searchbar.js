import React from 'react';
import IconButton from '../common/Icon/IconButton';

function Searchbar() {
  return (
    <div className="text-center bg-black h-11 flex justify-center items-center">
      <input className="main-search text-center" type="search" placeholder="Search Market" />
      <IconButton icon="search" alt="검색하기"/>
    </div>
  );
}

export default Searchbar;