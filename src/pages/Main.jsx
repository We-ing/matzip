import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import "./animate.css";
import StartButtons from "../conponents/StartButtons";
import Loading from "../conponents/Loading";

export default function Main() {
    const flavorCheck = "입맛\n첵췤";

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    const handleClickButton = (e) => {
        setShowLoading(true);
        setIsButtonClicked(true);
    };

    useEffect(() => {
        let timer;
        if (showLoading) {
            timer = setTimeout(() => {
                setShowLoading(false);
                navigate("/worldcup");
            }, 2000);
        }
        return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 초기화
    }, [showLoading, navigate]);

    return (
        <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
            <div className="relative w-[360px] h-[800px] flex flex-col justify-center items-center">
                {!isButtonClicked && (
                    <>
                        <img
                            className="absolute z-0"
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
                        <button onClick={handleClickButton}>
                            <StartButtons />
                        </button>
                    </>
                )}
                {showLoading && <Loading />}
            </div>
        </div>
    );
}
