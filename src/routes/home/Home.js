import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import New from "../../components/new/New";
import Best from "../../components/best/Best";
import Interior from "../../components/interior/Interior";

const Home = () => {

  return (
    <div className={`pb-[270px]`}>
      <Sidebar />
      <New />
      <Best />
      <Interior />
    </div>
  );
};

export default Home;