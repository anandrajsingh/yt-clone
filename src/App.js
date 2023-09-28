import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar, Feed} from "./components";


function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Feed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
