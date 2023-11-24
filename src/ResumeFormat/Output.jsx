import React from 'react';
import "../Css/style.css";
import ResumePdf from "../ResumeFormat/ResumePdf";
import { Box } from '@chakra-ui/react';
const Output = () => {
  return (
    <>
    <Box className="pdfresult">
    <ResumePdf/>
    </Box>
      
    </>
  );
}

export default Output;
