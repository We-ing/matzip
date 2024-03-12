import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progressbar = ({ count, round }) => {
  return round === 0 ? (
    <ProgressBar
      className="pl-8 pt-7"
      bgColor="#9e3ef9"
      completed={(count * 100) / 16}
      labelSize="0"
      height="10px"
      width="91%"
    />
  ) : round === 1 ? (
    <ProgressBar
      className="pl-8 pt-7"
      bgColor="#fcfc20"
      completed={(count * 100) / 8}
      labelSize="0"
      height="10px"
      width="91%"
    />
  ) : round === 2 ? (
    <ProgressBar
      className="pl-8 pt-7"
      bgColor="#74f617"
      completed={(count * 100) / 4}
      labelSize="0"
      height="10px"
      width="91%"
    />
  ) : round === 3 ? (
    <ProgressBar
      className="pl-8 pt-7"
      bgColor="#fc8c0c"
      completed={(count * 100) / 3}
      labelSize="0"
      height="10px"
      width="91%"
    />
  ) : round === 4 ? (
    <ProgressBar
      className="pl-8 pt-7"
      bgColor="#f10808"
      completed={50}
      labelSize="0"
      height="10px"
      width="91%"
    />
  ) : null;
};

export default Progressbar;
