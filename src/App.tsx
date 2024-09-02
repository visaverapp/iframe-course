import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage/MainPage";
import {VideoPage} from "@/pages/VideoPage/VideoPage";
import {Layout} from "@/components/Layout/Layout";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="/video" element={<VideoPage />}/>
        </Route>
      </Routes>
  );
};

export default App;