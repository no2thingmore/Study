import React from "react";
import { useLocation } from "react-router";

function About() {
    const location = useLocation();

    return (
        <>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습하는 예제입니다.</p>
            <p>쿼리스트링 : {location.search}</p>

            {/* params 실습 첫번째는 여기까지 */}
        </>
    )
}

export default About;