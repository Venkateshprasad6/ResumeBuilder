import React,{useEffect} from "react";
import "../Css/style.css";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Box, Heading } from "@chakra-ui/react";
import {setExpSummary} from "../features/ExperienceSummary"
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form"
const ExperienceSummary = () => {
  const dispatch = useDispatch();
  const{
    watch
  } = useForm();
  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };
  
  useEffect(() => {
    const subscribe = watch((data)=>{
      dispatch(setExpSummary(data))
     console.log(data);
    const { experience_summary_data } = data 
    console.log( experience_summary_data)


    })
    return()=>{
    subscribe.unsubscribe();
    }
  }, [watch])

  return (
    <>
      <Box>
        <Heading as="h3" size="md" mb={5}>
          Experience Summary
        </Heading>

        <ReactQuill
          theme="snow"
          color="red"
          modules={modules}
          placeholder="."
          onChange={handleProcedureContentChange}
          style={{ height: "200px" }}
        ></ReactQuill>
      </Box>
    </>
  );
};

export default ExperienceSummary;
