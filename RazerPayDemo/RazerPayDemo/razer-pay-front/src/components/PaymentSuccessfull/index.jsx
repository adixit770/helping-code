import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentSuccessfull() {
  const searchQuery = useSearchParams()[0];
  const referenceNo = searchQuery.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
        <Text>Reference No. {referenceNo}</Text>
      </VStack>
    </Box>
  );
}
