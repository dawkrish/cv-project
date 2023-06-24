import React from "react";
import { Heading, Box, Button } from "@chakra-ui/react";
import GeneralComponent from "./components/General";
import WorkComponent from "./components/Work";
import EducationComponent from "./components/Educations";
import PreviewComponent from "./components/Preview";

import "./App.css";

class General {
  constructor(id) {
    this.id = id;
    this.name = "Krishnansh Agarwal";
    this.role = "Backend Developer";
    this.email = "krishnansh.agarwal@gmail.com";
    this.city = "Paris,France";
    this.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium porro molestiae consequatur ducimus? Enim eos nam iure voluptatem! Praesentium, repellat corrupti recusandae blanditiis laudantium beatae exercitationem repellendus, voluptate neque in debitis. Quod, excepturi. Magni, illum soluta nisi eligendi eos dolor?";
  }
}

class Work {
  constructor(id) {
    this.id = id;
    this.company = "Monkeytype";
    this.role = "Backend Developer";
    this.from = "2018";
    this.to = "2022";
    this.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique.";
  }
}

class Education {
  constructor(id) {
    this.id = id;
    this.course = "Backend Development";
    this.institute = "Boot.dev";
    this.from = "2023";
    this.to = "";
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalComponent: [new General(0)],
      workComponents: [new Work(0)],
      educationComponents: [new Education(0)],
    };

    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleWorkDelete = this.handleWorkDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this);
  }

  handleAddWork() {
    let latest_id =
      this.state.workComponents[this.state.workComponents.length - 1].id;
    this.setState((prevState) => ({
      workComponents: [...prevState.workComponents, new Work(latest_id + 1)],
    }));
  }

  handleWorkDelete(val) {
    this.setState((prevState) => ({
      workComponents: prevState.workComponents.filter((item) => item !== val),
    }));
  }

  handleAddEducation() {
    let latest_id =
      this.state.educationComponents[this.state.educationComponents.length - 1]
        .id;
    this.setState((prevState) => ({
      educationComponents: [
        ...prevState.educationComponents,
        new Education(latest_id + 1),
      ],
    }));
  }

  handleEducationDelete(val) {
    this.setState((prevState) => ({
      educationComponents: prevState.educationComponents.filter(
        (item) => item !== val
      ),
    }));
  }

  handleChange(e, inputComponent, index, param) {

    let whichState = inputComponent.props.components.constructor.name
    let updatedArr = [...inputComponent.props.components]
    updatedArr[index][param] = e.target.value

    this.setState({
      whichState : updatedArr
    })

  }

  render() {
    return (
      <div className="app">
        <div id="cv">
          <Heading size={"lg"} padding={1}>
            Personal Details
          </Heading>
          <Box height={"10px"} />

          <GeneralComponent
            handleChange={this.handleChange}
            components={this.state.generalComponent}
          />

          <Box height={"16px"} />
          <Heading size={"lg"} padding={1}>
            Work Experience
          </Heading>

          <WorkComponent
            components={this.state.workComponents}
            handleWorkDelete={this.handleWorkDelete}
            handleChange={this.handleChange}
          />

          <Button onClick={this.handleAddWork}>Add</Button>
          <Box height={"16px"} />
          <Heading size={"lg"} padding={1}>
            Education
          </Heading>
          <EducationComponent
            components={this.state.educationComponents}
            handleEducationDelete={this.handleEducationDelete}
            handleChange={this.handleChange}
          />
          <Button onClick={this.handleAddEducation}>Add</Button>
        </div>

        <div id="preview">
          <PreviewComponent 
            generalComponent = {this.state.generalComponent}
            workComponents = {this.state.workComponents}
            educationComponents = {this.state.educationComponents}
          />
        </div>
      </div>
    );
  }
}

export default App;

