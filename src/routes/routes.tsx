import { Routes, Route, useLocation } from "react-router-dom";
// 컴포넌트
import NavBar from "@/components/navBar/Navbar";

// 페이지
import HomePage from "@pages/home";
import SearchPage from "@pages/search";
import WritePage from "@pages/write";
import MessagePage from "@pages/message";
import ProfilePage from "@pages/profile";

function AppRoutes() {
  // 현재 페이지 경로 가져오기
  const location = useLocation();

  // 네비게이션이 표시될 경로 목록
  const showNavbarPaths = ["/", "/search", "/profile"];
  // 현재 경로가 네비게이션을 보여줄 페이지인지 확인
  const showNavbar = showNavbarPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        {/* 네비게이션을 보여줘야 하는 페이지들 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/write" element={<WritePage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
      {showNavbar && <NavBar />}
    </>
  );
}

export default AppRoutes;
