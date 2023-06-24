import React from "react";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

class WorkComponent extends React.Component {
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
                  placeholder="A software company"
                  size={"sm"}
              defaultValue={"Monkeytype"}
                  onChange={(e) =>
                    this.props.handleChange(e, this, i, "company")
                  }
                />
                <Input
                  placeholder="Role"
                  size={"sm"}
                  defaultValue={"Backend Developer"}
                  // value={component.role}
                  onChange={(e) => this.props.handleChange(e, this, i, "role")}
                />
                <Input
                  placeholder="From"
                  size={"sm"}
                  defaultValue={"2018"}
                  onChange={(e) => this.props.handleChange(e, this, i, "from")}
                />
                <Input
                  placeholder="To"
                  size={"sm"}
                  defaultValue={"2022"}
                  onChange={(e) => this.props.handleChange(e, this, i, "to")}
                />
                <Textarea
                  placeholder="Description"
                  size={"sm"}
                  defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique."}
                  onChange={(e) =>
                    this.props.handleChange(e, this, i, "description")
                  }
                />
                <Button onClick={() => this.props.handleWorkDelete(component)}>
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

export default WorkComponent;
