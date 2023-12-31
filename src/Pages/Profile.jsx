import React, { useEffect } from "react";
import "../Css/style.css";
import { useForm } from "react-hook-form";
import {
  Text,
  Input,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  GridItem,
  Stack,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { setProDetail } from "../features/ProfileDetail";
import { useDispatch } from "react-redux";

function Profile() {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = watch((data) => {
      dispatch(setProDetail(data));
      console.log(data);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <Box>
        <Heading as="h3" size="md" mb={5}>
          Personal Details
        </Heading>

        <Stack divider={<StackDivider />} spacing="5">
          <Box m={5}>
            <Stack spacing={10}>
              <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                <GridItem>
                  <FormControl isInvalid={errors.first_name}>
                    <FormLabel fontSize="15px" color=" #808080">
                      First Name
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("first_name", {
                        required: " first name is required",
                      })}
                      bg="#e6eeff"
                    />
                    <FormErrorMessage>
                      {errors.first_name && errors.first_name.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={errors.last_name}>
                    <FormLabel fontSize="15px" color=" #808080">
                      {" "}
                      Last Name
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("last_name", {
                        required: "last name is required",
                      })}
                      bg="#e6eeff"
                    />
                    <FormErrorMessage>
                      {errors.last_name && errors.last_name.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel fontSize="15px" color=" #808080">
                      {" "}
                      Email{" "}
                    </FormLabel>
                    <Input
                      type="email"
                      {...register("email", {
                        required: "email is required",
                      })}
                      bg="#e6eeff"
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={errors.phone_number}>
                    <FormLabel fontSize="15px" color=" #808080">
                      {" "}
                      Phone Number{" "}
                    </FormLabel>
                    <Input
                      type="number"
                      {...register("phone_number", {
                        required: "phone number is required",
                      })}
                      bg="#e6eeff"
                    />
                    <FormErrorMessage>
                      {errors.phone_number && errors.phone_number.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem mb={10}>
                  <FormControl isInvalid={errors.date_of_brth}>
                    <FormLabel fontSize="15px" color=" #808080">
                      {" "}
                      Date Of Birth{" "}
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("date_of_brth", {
                        required: "date of brth is required",
                      })}
                      bg="#e6eeff"
                    />
                    <FormErrorMessage>
                      {errors.date_of_brth && errors.date_of_brth.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={errors.gender}>
                    <FormLabel fontSize="15px" color=" #808080">
                      {" "}
                      Gender{" "}
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("gender", {
                        required: "gender is required",
                      })}
                      bg="#e6eeff"
                    />
                    <FormErrorMessage>
                      {errors.address && errors.address.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
              <Accordion defaultIndex={[1]} allowMultiple width="100%">
                <AccordionItem>
                  <AccordionPanel>
                    <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                      <GridItem>
                        <FormControl isInvalid={errors.address}>
                          <FormLabel fontSize="15px" color=" #808080">
                            {" "}
                            Address{" "}
                          </FormLabel>
                          <Input
                            type="text"
                            {...register("address", {
                              required: "address is required",
                            })}
                            bg="#e6eeff"
                          />
                          <FormErrorMessage>
                            {errors.address && errors.address.message}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isInvalid={errors.city}>
                          <FormLabel fontSize="15px" color=" #808080">
                            {" "}
                            City{" "}
                          </FormLabel>
                          <Input
                            type="text"
                            {...register("city", {
                              required: "city is required",
                            })}
                            bg="#e6eeff"
                          />
                          <FormErrorMessage>
                            {errors.city && errors.city.message}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isInvalid={errors.postal_code}>
                          <FormLabel fontSize="15px" color=" #808080">
                            {" "}
                            Postal Code{" "}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register("postal_code", {
                              required: "postal code is required",
                            })}
                            bg="#e6eeff"
                          />
                          <FormErrorMessage>
                            {errors.postal_code && errors.postal_code.message}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isInvalid={errors.state}>
                          <FormLabel fontSize="15px" color=" #808080">
                            {" "}
                            State{" "}
                          </FormLabel>
                          <Input
                            type="text"
                            {...register("state", {
                              required: "state is required",
                            })}
                            bg="#e6eeff"
                          />
                          <FormErrorMessage>
                            {errors.state && errors.state.message}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isInvalid={errors.nationality}>
                          <FormLabel fontSize="15px" color=" #808080">
                            {" "}
                            Country{" "}
                          </FormLabel>
                          <Input
                            type="text"
                            {...register("country", {
                              required: "country is required",
                            })}
                            bg="#e6eeff"
                          />
                          <FormErrorMessage>
                            {errors.country && errors.country.message}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isInvalid={errors.place_of_birth}>
                          <FormLabel fontSize="15px" color=" #808080">
                            {" "}
                            Place Of Birth{" "}
                          </FormLabel>
                          <Input
                            type="text"
                            {...register("place_of_birth", {
                              required: "place of birth is required",
                            })}
                            bg="#e6eeff"
                          />
                          <FormErrorMessage>
                            {errors.place_of_birth &&
                              errors.place_of_birth.message}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                    </Grid>
                  </AccordionPanel>
                  <AccordionButton className="profile" borderStyle="none">
                    <Text color="#0099e6">Edit Additional Details</Text>
                    <AccordionIcon ml="15px" color="#0099e6" />
                  </AccordionButton>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Profile;
