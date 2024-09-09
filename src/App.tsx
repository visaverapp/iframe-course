import {Route, Routes} from "react-router-dom";
import {VideoLayout} from "@/layouts/VideoLayout/VideoLayout";
import QuizPage from "@/pages/QuizPage/QuizPage";
import {SearchResultPage} from "@/pages/SearchResultPage/SearchResultPage";
import {SearchLayout} from "@/layouts/SearchLayout/SearchLayout";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<VideoLayout/>} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="search" element={<SearchLayout />} >
          <Route index element={<SearchResultPage />} />
        </Route>
      </Routes>
  );
};

export default App;