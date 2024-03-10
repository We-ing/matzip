import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import FoodCard from "../conponents/FoodCard";
import FoodData from "../FoodData.json";

const Worldcup = () => {
  const [shuffleFood, setShuffleFood] = useState([]);
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(32);
  const [count, setCount] = useState(0);

  // 선택한 음식은 다음 라운드에서 대기
  const onClickChoice = (v) => () => {
    setChoice(choice + 2);
    setCount(count + 1);

    setNextRound([...nextRound, v]);
  };

  // 첫 렌더링 때, 나올 음식을 배열을 셔플
  useEffect(() => {
    let shuffleFoodData = FoodData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleFood(shuffleFoodData);
  }, []);

  useEffect(() => console.log(nextRound), [nextRound]);

  // 각 라운드 종료 후 state 초기화
  useEffect(() => {
    if (choice === end) {
      setShuffleFood(nextRound);
      setNextRound([]);
      setEnd(end / 2);
      setChoice(0);
    }
  }, [choice]);

  return (
    <div className="flex justify-center bg-purple-300 min-h-screen items-center">
      <div className="bg-InGame w-[360px] h-[800px]">
        <div className="flex justify-center items-center pt-10 text-white">
          당신의 선택은 ?
        </div>
        <ProgressBar
          className="pl-8 pt-7"
          bgColor="#FFFF00"
          completed={(count * 100) / 31}
          labelSize="0"
          height="10px"
          width="91%"
        />
        <FoodCard
          food={shuffleFood[choice]}
          choice={choice}
          onClickChoice={onClickChoice}
        />
        <FoodCard
          food={shuffleFood[choice + 1]}
          choice={choice + 1}
          onClickChoice={onClickChoice}
        />
      </div>
    </div>
  );
};

export default Worldcup;
