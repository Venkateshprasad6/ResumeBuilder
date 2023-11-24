import React from "react";
import { Routes,Route} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/Components/Layout";


function App() {
  return (
    <ChakraProvider>
    
      <Routes>
<Route path="/" element={<Layout/>}/>
      </Routes>
      
      
    </ChakraProvider>
  );
}

export default App;
