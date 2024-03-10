import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./animate.css";
import StartButtons from "../conponents/StartButtons";
import Loading from "../conponents/Loading";

export default function Main() {
  const flavorCheck = "입맛\n첵췤";
  const [loading, setLoading] = useState(false);

  const handleStartButtonClick = () => {
    // 버튼 클릭 시 로딩 시작
    setLoading(true);
  };

  useEffect(() => {
    // 로딩이 시작되면 2초 후에 로딩 종료 및 SecondPage로 이동
    if (loading) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);

      // 컴포넌트가 언마운트될 때 타이머를 정리하여 메모리 누수 방지
      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  return (
    <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-[360px] h-[800px] flex flex-col justify-center items-center">
        <img
          className="absolute"
          src={`${process.env.PUBLIC_URL}/images/bg.png`}
          alt="animals"
        />
        <div className="card mb-24">
          <div className="bg">
            <div className="font-bold text-7xl justify-center items-center flex ml-3 leading-tight tracking-[15px] whitespace-pre-wrap">
              {flavorCheck}
            </div>
          </div>
          <div className="blob"></div>
        </div>
        <button onClick={handleStartButtonClick}>
          <StartButtons />
        </button>
      </div>
    </div>
  );
}
