import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지 입니다.</p>

            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/profileName">profileName의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/homer">homer의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
            </ul>
        </>
    )
}

export default Home;