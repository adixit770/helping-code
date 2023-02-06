import React from "react";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { getApiHandler, postApiHandler } from "../ApiHandler";
import { useState } from "react";
export default function Home() {
  // eslint-disable-next-line
  const [amount, setAmount] = useState({ amount: 500 });
  const buyProduct = async (price) => {
    const getRes = await getApiHandler("/get/key");
    console.log("getRes====>", getRes.key);

    const postRes = await postApiHandler("/post-order", price);
    // console.log("postRes====>", postRes.orders.id);
    const options = {
      key: getRes.key, // Enter the Key ID generated from the Dashboard
      amount: postRes.orders.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Hardik Silawat",
      description: "Integrating Razor Pay",
      image:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/05/attachment_99693514-e1558376952894.png?auto=format&q=60&fit=max&w=930",
      order_id: postRes.orders.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:8080/razerpay/payment-verification",
      prefill: {
        name: "Hardik Silawat",
        email: "hardikSilawat09902@example.com",
        contact: "8989123616",
      },
      notes: {
        address: "Sapna Sangeeta LandMark Avenue, Indore",
      },
      theme: {
        color: "#D73737",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack direction={["column", "row"]}>
        <Card align="center">
          <CardHeader>
            <Image
              boxSize={"20rem"}
              src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/0/50M60PA-1_T1656563280.png"
              alt="Dan Abramov"
            />
          </CardHeader>
          <CardBody>
            <Text>₹ {amount.amount}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue" onClick={() => buyProduct(amount)}>
              Buy Now
            </Button>
          </CardFooter>
        </Card>
        <Card align="center">
          <CardHeader>
            <Image
              boxSize={"20rem"}
              src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg"
              alt="Dan Abramov"
            />
          </CardHeader>
          <CardBody>
            <Text>₹ {amount.amount}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue" onClick={() => buyProduct(amount)}>
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      </Stack>
    </Box>
  );
}
