import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/worldcup">
        <button>시작버튼</button>
      </Link>
    </div>
  );
};

export default Main;
