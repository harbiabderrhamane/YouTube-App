import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelDetail from "./components/ChannelDetail/ChannelDetail";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";

const App = () => {
  const user = null;

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
