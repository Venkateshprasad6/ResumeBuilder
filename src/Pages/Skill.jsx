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
import { useDispatch } from "react-redux";
import { setStrength } from "../features/Skills";
function Skill() {
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
    name: "talent",
  });
  if (itemFields.length === 0) {
    appendItem();
  }
  useEffect(() => {
    const subscribe = watch((data) => {
      dispatch(setStrength(data));
      console.log(data);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <Box mt={10}>
        <Heading as="h3" size="md">
          Skills
        </Heading>
        {itemFields &&
         itemFields.map((talent,index) => {
          return (
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
                      <Text>NOT SPECIFY</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel mt="5">
                      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                        <GridItem>
                          <FormControl isInvalid={errors.talent?.[index]?.name}>
                            <FormLabel color=" #808080">Name</FormLabel>
                            <Input
                              type="text"
                              {...register("name", {
                                required: "name is required",
                              })}
                              bg="#e6eeff"
                            />
                          </FormControl>
                          <FormErrorMessage>
                            {errors.name?.message}
                          </FormErrorMessage>
                        </GridItem>
                        <GridItem>
                          <FormControl isInvalid={errors.talent?.[index]?.level}>
                            <FormLabel color=" #808080">Level</FormLabel>
                            <Input
                              type="text"
                              {...register("level", {
                                required: "level is required",
                              })}
                              bg="#e6eeff"
                            />
                          </FormControl>
                          <FormErrorMessage>
                            {errors.level?.message}
                          </FormErrorMessage>
                        </GridItem>
                      </Grid>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Box>
                  <Button
                    className="btn-emp_his"
                    onClick={() => removeItem}
                    size="sm"
                  >
                    <DeleteIcon h={3} w={3} />
                  </Button>
                </Box>
              </Flex>
            </Box>
          )
          })}
          <Button  className='emp_button' size="sm" borderStyle="none" onClick={()=>appendItem()}>
<FontAwesomeIcon icon={faPlus}  color="#0099e6" /> 
            <Text ml="15px"  color="#0099e6" >Add one more skill</Text>
          </Button>
      </Box>
    </> 
  );
}

export default Skill;
