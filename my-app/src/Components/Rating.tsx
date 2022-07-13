import React from "react";
import { Box, Button, Flex, ButtonGroup } from "@chakra-ui/react";
import { RatingType } from "../App";

type RatingProps = {
  isActive: RatingType;
  clickFunc: () => void;
  activate: (button: number) => void;
};

export default function Rating({ isActive, clickFunc, activate }: RatingProps) {
  const array = [1, 2, 3, 4, 5];

  return (
    <>
      <Box py="10%" bg="hsl(213, 19%, 18%)">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </Box>
      <Box color="white" fontWeight="bold" letterSpacing="2px" fontSize="30px">
        How did we do?
      </Box>
      <Box color="white" fontSize="15px">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Box>
      <Flex
        color="white"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ButtonGroup
          width="100%"
          spacing="6"
          alignItems="center"
          textAlign="center"
          justifyContent="space-between"
          height="100%"
          pt="10%"
        >
          {array.map((button, index) => {
            return (
              <Button
                bg="hsl(213, 19%, 18%)"
                color="hsl(216, 12%, 54%)"
                borderRadius="50%"
                isActive={isActive[button]}
                onClick={() => activate(button)}
                value={button}
                _hover={{ bg: "hsl(216, 12%, 54%)", color: "white" }}
                _active={{ bg: "hsl(25, 97%, 53%)", color: "white" }}
              >
                {index + 1}
              </Button>
            );
          })}
        </ButtonGroup>

        <Button
          bg="hsl(25, 97%, 53%)"
          borderRadius="20px"
          p="5%"
          m="5%"
          width="100%"
          textTransform="uppercase"
          letterSpacing="2px"
          onClick={clickFunc}
          _hover={{ bg: "white", color: "hsl(25, 97%, 53%)" }}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
}
