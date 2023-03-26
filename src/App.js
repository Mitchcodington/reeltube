
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, VideosFeed } from './components';

const App = () => (
    <BrowserRouter>
    <div className="route-wrap" >
    <Navbar />
      <Routes>
        <Route exact path='/' element={<VideosFeed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
export default App