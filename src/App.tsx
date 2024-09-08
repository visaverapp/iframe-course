import {Route, Routes} from "react-router-dom";
import {VideoLayout} from "@/layouts/VideoLayout/VideoLayout";
import {SearchLayout} from "@/layouts/SearchLayout/SearchLayout";
import {SearchResultPage} from "@/pages/SearchResultPage/SearchResultPage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<VideoLayout/>} />
        <Route path="search" element={<SearchLayout />}>
          <Route index element={<SearchResultPage />} />
        </Route>
      </Routes>
  );
};

export default App;