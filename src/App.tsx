import 'assets/Global.css'
import Header from "./layouts/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import MyStories from "./pages/my-stories/MyStories.tsx";
import LikedStories from "./pages/liked-stories/LikedStories.tsx";
import AddNewStory from "./pages/add-new-story/AddNewStory.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='app-content'>
          <Routes>
            <Route path={'/home'} element={<Home />} />
            <Route path={'/my-stories'} element={<MyStories />} />
            <Route path={'/liked-stories'} element={<LikedStories />} />
            <Route path={'/add-new-story'} element={<AddNewStory />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
