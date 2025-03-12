import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@pages/home";
import SearchPage from "@pages/search";
import WritePage from "@pages/write";
import MessagePage from "@pages/message";
import ProfilePage from "@pages/profile";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
