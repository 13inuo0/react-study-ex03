import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Tabs from "./Tabs";
import NotFound from "./NotFound";
import User from "./User";
import User01 from "./User01";

function App() {
  const username = "홍길동";
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link> | <Link to="/contact">연락</Link> |
        <Link to="/login">로그인</Link> |<Link to="/tab">탭기능</Link>|<Link to={`/user/${username}`}>이름</Link>
      |  <Link to="/user01/홍길동01/32/대구">이름 01</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tab" element={<Tabs />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/user01/:name/:age/:city" element={<User01 />} />

        {/* 404페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
