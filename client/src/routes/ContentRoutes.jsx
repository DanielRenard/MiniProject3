import { Route, Routes } from "react-router-dom";
import Profile from "../components/contentProfile/Profile";
import ShotList from "../components/contentShotList/ShotList";
import LoginForm from "../components/LoginForm";
import "../style/homePage.css";
import SignUpPage from "../components/SignUpPage";

export default function ContentRoutes(props) {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <img
              className="homeImage"
              src="/images/image-asset.jpeg"
              alt="floor directing image"
            ></img>
          </div>
        }
      ></Route>
      <Route path="login" element={<LoginForm {...props} />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="ShotList" element={<ShotList />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
  );
}
