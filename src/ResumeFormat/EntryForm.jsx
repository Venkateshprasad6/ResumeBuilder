import React from "react";
import "../Css/style.css"
import { Card, CardBody } from "@chakra-ui/react";
import Title from "../Pages/Title";
import Profile from "../Pages/Profile";
import ExperienceSummary from "../Pages/ExperienceSummary";
import Employement from "../Pages/Employement";
import Education from "../Pages/Education";
import Skill from "../Pages/Skill";
import SocialMedia from "../Pages/SocialMedia";
import AddSection from "../Pages/AddSection";

import { DragDropContext } from "react-beautiful-dnd";
const EntryForm = () => {
  return (
    <>
      <DragDropContext>
        <div className="container">
          <Card px={7}>
            <CardBody>
              <Title/>
              <Profile />
              <ExperienceSummary />
              <Employement />
              <Education />
              <Skill />
              <SocialMedia />

              <AddSection />
            </CardBody>
          </Card>
        </div>
      </DragDropContext>
    </>
  );
};

export default EntryForm;
