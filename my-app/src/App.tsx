import React from "react";
import { Box } from "@chakra-ui/react";
import Rating from "./Components/Rating";
import Thanks from "./Components/Thanks";

export type RatingType = Record<number, boolean>;

export default function App() {
  const [state, setState] = React.useState(true);
  const initialRatingState = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  };
  const [rating, setRating] = React.useState<RatingType>(initialRatingState);
  const isRatingState = state;

  const handleClick = () => {
    setState(!state);
  };

  const activeBtn = (button: number) => {
    setRating({ ...initialRatingState, [button]: true });
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
          // TODO: pass the value of the button clicked to the Thanks component probably from a form submit
          <Thanks />
        )}
      </Box>
    </Box>
  );
}
