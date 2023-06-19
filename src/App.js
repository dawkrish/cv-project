import React from "react";
import { Heading, Box, Button } from "@chakra-ui/react";
import GeneralComponent from "./components/General";
import WorkComponent from "./components/Work";
import EducationComponent from "./components/Educations";
import "./App.css";



class Work {
  constructor(id) {
    this.id = id
    this.company = "";
    this.role = "";
    this.from = "";
    this.to = "";
    this.description = "";
  }
}

class Education {
  constructor(id) {
    this.id = id
    this.course = "";
    this.institute= "";
    this.from = "";
    this.to = "";
    this.description = "";
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workComponents: [new Work(0)],
      educationComponents: [new Education(0)],
    };

    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleWorkDelete = this.handleWorkDelete.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this)
  }

  handleAddWork() {
    let latest_id = this.state.workComponents[this.state.workComponents.length - 1].id
    this.setState((prevState) => ({
      workComponents: [...prevState.workComponents, new Work( latest_id + 1 )],
    }));
  }

  handleWorkDelete(val) {
    this.setState((prevState) => ({
      workComponents: prevState.workComponents.filter((item) => item !== val),
    }));
  }

  handleAddEducation() {
    let latest_id = this.state.educationComponents[this.state.educationComponents.length - 1].id
    this.setState((prevState) => ({
      educationComponents: [...prevState.educationComponents, new Education( latest_id + 1 )],
    }));
  }


  handleEducationDelete(val){
    this.setState((prevState) => ({
      educationComponents: prevState.educationComponents.filter((item) => item !== val),
    }));
  }

  handleChange(e, inputComponent,index,param){
    inputComponent.props.components[index][param] = e.target.value
    console.log(this.state.workComponents)
  }


  render() {
    return (
      <div className="app">
        <div id="cv">
          <Heading size={"lg"} padding={1}>
            Personal Details
          </Heading>
          <Box height={"10px"} />
          <GeneralComponent />
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

        <div id="preview"></div>
      </div>
    );
  }
}

export default App;
