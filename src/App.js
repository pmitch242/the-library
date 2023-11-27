import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Navbar, Feed, BookDetail, SearchFeed, Favorites } from './components';

const App = () => 
  <BrowserRouter>
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />}/>
        <Route path='/book/:id' element={<BookDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </Box>
  </BrowserRouter>

export default App;
