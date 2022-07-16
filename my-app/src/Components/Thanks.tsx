import React from "react";
import { Box } from "@chakra-ui/react";

export default function Thanks({ ratingValue }: { ratingValue: string[] }) {
  return (
    <Box color="white">
      You selected {ratingValue} out of 5 Thank you! We appreciate you taking
      the time to give a rating. If you ever need more support, don’t hesitate
      to get in touch!
    </Box>
  );
}
