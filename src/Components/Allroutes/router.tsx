import Main from "../Home/Home";
import Register from "../Home/User/Register/Register";
import LoginPage from "../Home/User/Login/LoginPage";
import UserAccount from "../Home/User/Account/UserAccount";
import Posts from "../Home/Categories/Posts/Posts";
import PostForm from "../Home/Categories/Posts/PostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/e-portal" element={<Main />} />
          <Route path="e-portal/register" element={<Register />} />
          <Route path="e-portal/login" element={<LoginPage />} />
          <Route path="e-portal/UserAccount" element={<UserAccount />} />
          <Route path="e-portal/posts" element={<Posts />} />
          <Route path="e-portal/postData" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default router;
