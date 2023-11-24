import React, { useEffect } from "react";
import "../Css/style.css";
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
import { setMedia } from "../features/Sm";
import { useDispatch } from "react-redux";

function SocialMedia() {
  const dispatch = useDispatch();

  const {
    register,

    formState: { errors },
    control,
    watch,
  } = useForm({ mode: "onChange" });

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
      dispatch(setMedia(data));
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
          Social Media
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
                                isInvalid={errors.items?.[indx]?.linkedin}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Linkedin{" "}
                                </FormLabel>
                                <Input
                                  type="text"
                                  {...register(`items.${indx}.linkedin`, {
                                    required: " linkedin is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.naukri?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.naukri}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Naukri{" "}
                                </FormLabel>

                                <Input
                                  type="text"
                                  {...register(`items.${indx}.naukri`, {
                                    required: "naukri is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.naukri?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.shine}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Shine{" "}
                                </FormLabel>

                                <Input
                                  type="text"
                                  {...register(`items.${indx}.shine`, {
                                    required: "shine is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.shine?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.indeed}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Indeed{" "}
                                </FormLabel>

                                <Input
                                  type="text"
                                  {...register(`items.${indx}.indeed`, {
                                    required: "indeed is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.indeed?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.instagram}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Instagram{" "}
                                </FormLabel>

                                <Input
                                  type="text"
                                  {...register(`items.${indx}.instagram`, {
                                    required: "instagram is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.instagram?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl
                                isInvalid={errors.items?.[indx]?.telegram}
                              >
                                <FormLabel fontSize="15px" color=" #808080">
                                  {" "}
                                  Telegram{" "}
                                </FormLabel>

                                <Input
                                  type="text"
                                  {...register(`items.${indx}.telegram`, {
                                    required: "telegram is Required",
                                  })}
                                  className="emp_his-acc_input"
                                  bg="#e6eeff"
                                />
                                <FormErrorMessage>
                                  {errors.items?.[indx]?.instagram?.message}
                                </FormErrorMessage>
                              </FormControl>
                            </GridItem>
                          </Grid>
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
          className="emp_button"
          size="sm"
          borderStyle="none"
          onClick={() => appendItem()}
        >
          <FontAwesomeIcon icon={faPlus} color="#0099e6" />
          <Text ml="15px" color="#0099e6">
            Add one more link
          </Text>
        </Button>
      </Box>
    </>
  );
}

export default SocialMedia;
