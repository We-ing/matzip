import React from "react";
import SubButton from "../conponents/SubButton";
import SubButton2 from "../conponents/SubButton2";
import { useParams } from "react-router-dom";
import Dummy from "../Dummy.json";

export default function Result() {
  let params = useParams();

  const filteredItems = Dummy.filter(
    (item) => item.flavorId === params.flavorId.toString()
  );

  return (
    <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
      {filteredItems.map((v, i) => {
        return (
          <div
            className="relative w-[360px] h-[800px] flex flex-col justify-center items-center"
            key={i}
          >
            <img
              className="absolute"
              src={`${process.env.PUBLIC_URL}/images/bgBlack.png`}
              alt="animals"
            />

            <img
              src={`${process.env.PUBLIC_URL}/images/${v.images}.png`}
              className="mt-36 w-[312px] h-[234px] z-20 rounded-3xl"
              alt="animals"
            ></img>

            <div className="z-20 w-[312px] h-[116px] mt-5">
              <div className="font-bold text-3xl text-white">{v.flavor}</div>
              <div className="font-bold text-md text-white">
                {v.description}
              </div>
            </div>
            <div className="w-[312px] h-[58px] z-20 mt-5">
              <div className="flex flex-grow justify-center items-center">
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-white mr-8">
                    환상의 입맛 짝꿍
                  </div>
                  <div className="font-bold text-md text-white">
                    {v.goodCombi}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-white">
                    최악의 입맛 짝꿍
                  </div>
                  <div className="font-bold text-md text-white">
                    {v.badCombi}
                  </div>
                </div>
              </div>
            </div>
            <div className="z-2 w-[312px] h-[68px] mt-5 flex justify-center items-center">
              <div className="mr-8">
                {/* <SubButton /> */}
              </div>
              <SubButton2 />
            </div>
          </div>
        );
      })}
    </div>
  );
}
