import React from "react";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

class EducationComponent extends React.Component {
  render() {
    const components = this.props.components;

    return (
      <div>
        {components.map((component, i) => {
          return (
            <div key={component.id}>
              <Flex
                flexDirection={"column"}
                width={"300px"}
                rowGap={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Input
                  placeholder="Course name"
                  size={"sm"}
                  defaultValue={"Backend Development"}
                  onChange={(e) =>
                    this.props.handleChange(e, this, i, "course")
                  }
                />
                <Input
                  placeholder="Insitution"
                  size={"sm"}
                  defaultValue={"Boot.dev"}
                  onChange={(e) => this.props.handleChange(e, this, i, "institute")}
                />
                <Input
                  placeholder="From"
                  size={"sm"}
                  defaultValue={"2023"}
                  onChange={(e) => this.props.handleChange(e, this, i, "from")}
                />
                <Input
                  placeholder="To"
                  size={"sm"}
                  onChange={(e) => this.props.handleChange(e, this, i, "to")}
                />
                <Button onClick={() => this.props.handleEducationDelete(component)}>
                  Delete
                </Button>
              </Flex>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationComponent;
