import React from "react";
import { Box } from "@chakra-ui/react";
import Rating from "./Components/Rating";

export default function App() {
  const [state, setState] = React.useState(true);
  const [rating, setRating] = React.useState(false);
  const isRatingState = state;

  const handleClick = () => {
    setState(!state);
  };

  const activeBtn = () => {
    setRating(!rating);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" m="20vh">
      <Box
        boxSize="sm"
        bgGradient="linear(to-b,hsl(213, 19%, 18%), hsl(216, 12%, 8%))"
        p="2%"
        borderRadius="20px"
      >
        {isRatingState ? (
          <Rating
            clickFunc={handleClick}
            isActive={rating}
            activate={activeBtn}
          />
        ) : (
          <Box color="white">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </Box>
        )}
      </Box>
    </Box>
  );
}
