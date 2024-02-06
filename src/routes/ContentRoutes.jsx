import { Route, Routes } from "react-router-dom";
import Profile from "../components/contentProfile/Profile";
import ShotList from "../components/contentShotList/ShotList";
import LoginForm from "../components/LoginForm";
import "../style/homePage.css"

export default function ContentRoutes(props) {
  return (
    <Routes>
        <Route index element={<div><img className="homeImage" src="/images/image-asset.jpeg" alt="floor directing image"></img></div>}>
            
        </Route>
      {/* <Route index element={<Homepage {...props} />} /> */}
      <Route path="login" element={<LoginForm {...props}/>}/>
      {/* <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      > */}
        <Route path="ShotList" element={<ShotList />} />

        <Route path="Profile" element={<Profile />} />
      {/* </Route> */}

      {/* <Route path="*" element={<PageNotFound />} /> */}
      {/* <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <PostsPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route index element={<PostList />} />

        <Route path=":id" element={<Post />} />
      </Route> */}
    </Routes>
  );
}