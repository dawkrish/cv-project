import React from "react";
import { Text, Divider, Heading } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLocationArrow } from "react-icons/fa";

class PreviewComponent extends React.Component {
  render() {
    let { generalComponent, workComponents, educationComponents } = this.props;
    generalComponent = generalComponent[0];
    return (
      <div id="preview-main">
        <div id="preview-header">
          <div>
            <Text fontSize={"3xl"} as={"b"} color={"teal.600"}>
              {generalComponent.name.toUpperCase()}
            </Text>
            <Text fontSize={"xl"}>{generalComponent.role}</Text>
          </div>
          <div>
            <Text>
              <EmailIcon /> {generalComponent.email}
            </Text>
            <Text class="row">
              <FaLocationArrow />
              {generalComponent.city}
            </Text>
          </div>
        </div>
        <br />
        <Divider border={"2px"} color={"blue.600"} />
        <Text>{generalComponent.description}</Text>
        <br />
        <br />
        <Heading padding={1} fontSize={"xl"} as={"b"} color={"teal.600"}>
          WORK EXPERIENCE
        </Heading>
        <br />
        <br />
        {workComponents.map((component) => {
          return (
            <div key={component.id}>
              <div className="work-row">
                <div>
                  {" "}
                  <Text fontSize={"lg"} as={"p"} color={"gray.600"} fontWeight={"semibold"}>
                    {component.role} 
                  </Text>
                </div>
                <div className="row">
                  <Text>{component.company}|</Text>
                  <Text color={"gray.900"}>{component.from}</Text> - <Text color={"gray.900"}>{component.to}</Text>
                </div>
              </div>

              <br />
              <Text>{component.description}</Text>
              <br />
            </div>
          );
        })}
        <br />
        <br />
        <Heading padding={1} fontSize={"xl"} as={"b"} color={"teal.600"}>
          EDUCATION
        </Heading>
        <br />
        <br />
        {educationComponents.map((component) => {
          return (
            <div key={component.id}>
              <div className="work-row">
                <div>
                  {" "}
                  <Text fontSize={"lg"} as={"p"} color={"gray.600"} fontWeight={"semibold"}>
                    {component.course} 
                  </Text>
                </div>
                <div className="row">
                  <Text>{component.institute}|</Text>
                  <Text color={"gray.900"}>{component.from}</Text> - <Text color={"gray.900"}>{component.to}</Text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PreviewComponent;
