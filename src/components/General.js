import React from "react";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

class GeneralComponent extends React.Component {
  render() {
    return (
      <div>
        <Flex flexDirection={"column"} width={"300px"} rowGap={2}>
          <Input
          defaultValue={"Krishnansh Agarwal"}
            placeholder="Name"
            size={"sm"}
            onChange={(event) => {
              this.props.handleChange(event, this, 0, "name");
            }}
          />
          <Input
          defaultValue={"Backend Developer"}
            placeholder="Role"
            size={"sm"}
            onChange={(event) =>
              this.props.handleChange(event, this, 0, "role")
            }
          />
          <Input
          defaultValue={"krishnansh.agarwal@gmail.com"}
            placeholder="Email"
            size={"sm"}
            onChange={(event) =>
              this.props.handleChange(event, this, 0, "email")
            }
          />
          <Input
          defaultValue={"Paris,France"}
            placeholder="City, Country"
            size={"sm"}
            onChange={(event) =>
              this.props.handleChange(event, this, 0, "city")
            }
          />
          <Textarea
          defaultValue={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium porro molestiae consequatur ducimus? Enim eos nam iure voluptatem! Praesentium, repellat corrupti recusandae blanditiis laudantium beatae exercitationem repellendus, voluptate neque in debitis. Quod, excepturi. Magni, illum soluta nisi eligendi eos dolor?"}
            placeholder="Description"
            size={"sm"}
            onChange={(event) =>
              this.props.handleChange(event, this, 0, "description")
            }
          />
        </Flex>
      </div>
    );
  }
}

export default GeneralComponent;

