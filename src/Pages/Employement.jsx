import React, { useState, useEffect } from "react";
import "../Css/style.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  Text,
  Box,
  Heading,
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  Grid,
  GridItem,
  FormLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm, useFieldArray } from "react-hook-form";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { setEduDetail } from "../features/EduDetail";

function Employement() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };
  console.log(value);
  console.log(typeof value);
  console.log(Number(value));

  const {
    register,

    formState: { errors },
    control,

    getValues,
    watch,
  } = useForm({ mode: "onChange" });
  const cgpa = 99.09;

  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: "items",
  });
  if (itemFields.length === 0) {
    appendItem();
  }
  useEffect(() => {
    const subscribe = watch((data) => {
      dispatch(setEduDetail(data));
      console.log(data);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <Box mt={10}>
        <Heading as="h3" size="md" mb={2}>
          Employement
        </Heading>

        {itemFields &&
          itemFields.map((items, indx) => {
            return (
              <>
                <Box>
                  <Flex>
                    <Accordion
                      defaultIndex={[1]}
                      allowMultiple
                      width="100%"
                      className="emp_his-accordian"
                      mb={6}
                    >
                      <AccordionItem>
                        <AccordionButton className="emp_his-accordian_head">
                          <Text>(Not specificy)</Text>
                          <Spacer />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel mt={5}>
                          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.company_name}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Company Name{" "}
                                </FormLabel>
                                <Input
                                  type="text"
                                  {...register(`items.${indx}.company_name`, {
                                    required: " company_name is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.company_name?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.designation}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Designation{" "}
                                </FormLabel>

                                <Input
                                  type="text"
                                  {...register(`items.${indx}.designation`, {
                                    required: "designation is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.designation?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.salary}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Salary{" "}
                                </FormLabel>
                                <Input
                                  type="text"
                                  {...register(`items.${indx}.salary`, {
                                    required: "salary is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.salary?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.location}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Location{" "}
                                </FormLabel>
                                <Input
                                  type="number"
                                  {...register(`items.${indx}.location`, {
                                    required: "location is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.location?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                          </Grid>
                          <Box mt={7}>
                            <FormLabel fontSize="15px" color="#808080" mb="0">
                              {" "}
                              Description{" "}
                            </FormLabel>

                            <ReactQuill
                              theme="snow"
                              placeholder={"Write something awesome..."}
                              bg="#e6eeff"
                              // modules={modules('t2')}
                              // formats={formats}
                            />
                            <Text fontSize="14px" color="#808080" mt={2}>
                              Recruter Tips : Write 200+ character to increase
                              interview chances &nbsp; &nbsp;&nbsp;&nbsp; 0/200
                            </Text>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <Box>
                      <Button
                        className="btn-emp_his"
                        onClick={() => removeItem(indx)}
                        size="sm"
                      >
                        <DeleteIcon w={3} h={3} />
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </>
            );
          })}

        <Button
          className="edu_button"
          size="sm"
          borderStyle="none"
          onClick={() => appendItem()}
        >
          <FontAwesomeIcon icon={faPlus} color="#0099e6" />
          <Text ml="15px" color="#0099e6">
            Add Employement
          </Text>
        </Button>
      </Box>
    </>
  );
}

export default Employement;
