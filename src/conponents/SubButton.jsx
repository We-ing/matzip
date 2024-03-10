import React, { useEffect } from "react";
import "./subButton.css";
import { useParams } from "react-router-dom";

const { Kakao } = window;

export default function SubButton() {
  let params = useParams();
  let paramsNum = params.flavorId.toString();
  console.log(paramsNum);

  // 배포한 자신의 사이트
  const realUrl = "https://wepublic-weing-test.vercel.app";
  // 로컬 주소 (localhost 3000 같은거)
  // const resultUrl = "http://localhost:3001/";

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAOID);
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 입맛 월드컵😋",
        description:
          "나만 알고 싶은 로컬 맛.zip - 나의 입맛 유형 알아보고 나와 어울리는 입맛 유형 추천 받자🎉",
        imageUrl:
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4f80fd8a-7701-43ec-a1e3-0c988571d912%2F4a686a2a-3b0f-494f-878c-102d7b8337d7%2F%25E1%2584%2580%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25B71.jpg?table=block&id=6790c1f8-c08f-4f33-93f7-a7a2e7697d6c&spaceId=4f80fd8a-7701-43ec-a1e3-0c988571d912&width=2000&userId=4deb6213-419c-4f6d-bf5c-e42b89f05219&cache=v2",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
        {
          title: "결과 보기",
          link: {
            mobileWebUrl: realUrl + "/results/" + paramsNum,
          },
        },
      ],
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          shareKakao();
        }}
        className="button"
      >
        공유하기
      </button>
    </div>
  );
}
