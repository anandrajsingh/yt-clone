import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Box sx={{borderColor: '#000'}}>
        <Navbar/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
