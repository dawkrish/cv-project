import React from "react";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Textarea } from '@chakra-ui/react'

class GeneralComponent extends React.Component {
  render() {
    return (
      <div>
        <Flex flexDirection={"column"} width={"300px"} rowGap={2}>
          <Input placeholder="Name" size={"sm"}/>
          <Input placeholder="Role" size={"sm"}/>
          <Input placeholder="Mobile Number" size={"sm"}/>
          <Input placeholder="Email" size={"sm"}/>
          <Input placeholder="City, Country" size={"sm"}/>
         <Textarea placeholder="Description" size={"sm"}/>
        </Flex>
      </div>
    );
  }
}

export default GeneralComponent;
