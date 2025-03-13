import { Routes, Route, useLocation } from "react-router-dom";
// 페이지
import HomePage from "@pages/home";
import SearchPage from "@pages/search";
import WritePage from "@pages/write";
import MessagePage from "@pages/message";
import ProfilePage from "@pages/profile";
import LoginPage from "@pages/login"

// 레이아웃
import Layout from "@/components/layout/Layout";

function AppRoutes() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default AppRoutes;
