import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  children: string;
}
const ExpandebleText = ({ children }: Props) => {
  const [exbanded, setExpanded] = useState(false);
  const limite = 300;
  if (!children) return null;
  if (children.length <= limite) return <Text>{children}</Text>;
  const summaryText = children.substring(0, 300) + " . . . .";
  return (
    <>
      <Text>
        {exbanded ? children : summaryText}
        <Button
          marginLeft={2}
          size="xs"
          fontWeight="Bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!exbanded)}
        >
          {exbanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandebleText;
