import React from "react";
import { Box, Text } from "native-base";
import CustomForm from "./src/screens/customFormLogin";

export default function Container() {
  return (
    <Box display={"flex"} justifyContent="center">
      <Box bg="primary.500" p={4} display={"flex"} justifyContent={"center"} >Facebook</Box>
      <CustomForm />
    </Box>
  );
}
