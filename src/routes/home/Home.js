import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import New from "../../components/new/New";
import Best from "../../components/best/Best";

const Home = () => {

  return (
    <div>
      <Sidebar />
      <New />
      <Best />
      {/* <Breads/> */}
    </div>
  );
};

export default Home;