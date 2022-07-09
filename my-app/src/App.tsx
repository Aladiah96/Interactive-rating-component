import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

function App() {
  const styles = useStyleConfig("App", { baseStyle });
  return (
    // Rating state start
    <Box display="flex" alignItems="center" justifyContent="center" m="20vh">
      <Box boxSize="sm" bg="tomato" p="2%" borderRadius="20px">
        <Box>How did we do?</Box>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering! 1 2 3 4 5 Submit
        {/* Rating state end */}
        {/* Thank you state start */}
        You selected
        {/* Add rating here*/} out of 5 Thank you!
        <Box>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Box>
      </Box>
    </Box>
  );
}

export default App;
