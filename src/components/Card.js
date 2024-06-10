import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <>
    <VStack
      spacing={0}
      align="flex-start"
    >
      <Image src={imageSrc} />
      <Box p="4" bg='white' color='black'>
        <Heading as="h3" mb='2' fontSize='1.5em'>{title}</Heading>
        <Text mb='2'>{description}</Text>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box >
      
    </VStack>
  </>;
};

export default Card;
