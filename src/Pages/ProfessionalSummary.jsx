import React, { useEffect } from "react";
import { Box, Heading} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import EditorToolbar from "../toolbar/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../toolbar/Editor.css";
import { setProSummary } from "../features/profileSummary";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function ProfessionalSummary() {
  const { watch } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = watch((data) => {
      dispatch(setProSummary(data));
      console.log(data);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);
  return (
    <>
    <Box mt={10}>
      <Heading as="h3" size="md" mb={2}>
        Professional Summary 
      </Heading>
       
        <EditorToolbar toolbarId={'t1'}/> 

      
        <ReactQuill
          theme="snow"
          placeholder={"Write something awesome..."}
         
          
        
        />    
                          
    </Box>
   </>
  );
}

export default ProfessionalSummary;
