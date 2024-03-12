import Loading from "../conponents/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Test = () => {
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    const handleClickButton = (e) => {
        setShowLoading(true);
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
        <div>
            <div>여기는 바로바로 테스트 하는 구간 </div>
            <button className="bg-red-100" onClick={handleClickButton}>
                안녕
            </button>

            {showLoading && <Loading />}
        </div>
    );
};
export default Test;
