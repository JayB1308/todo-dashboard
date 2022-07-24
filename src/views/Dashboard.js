import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Icon } from "@iconify/react";
import {
  DashboardContainer,
  DashboardArea,
  TopBar,
  FilterWrapper,
  TopBarHeader,
  ColumnContainer,
} from "../styles/Dashboard.style";
import Column from "../components/Column";

const Dashboard = () => {
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let td_arr = [];
    let pr_arr = [];
    let co_arr = [];
    data.forEach((td) => {
      if (td.status === "none") {
        td_arr.push(td);
      } else if (td.status === "in-progress") {
        pr_arr.push(td);
      } else if (td.status === "completed") {
        co_arr.push(td);
      }
    });

    setTodo(td_arr);
    setProgress(pr_arr);
    setCompleted(co_arr);
  }, [todo]);

  return (
    <DashboardContainer>
      <Sidebar />
      <DashboardArea>
        <Navbar />
        <TopBar>
          <TopBarHeader>Projects</TopBarHeader>
          <FilterWrapper>
            <Icon icon="clarity:filter-2-line" width={18} />
            <h4>Filter</h4>
          </FilterWrapper>
        </TopBar>
        <ColumnContainer>
          <Column data={todo} name={"To do"} len={todo.length} />
          <Column data={progress} name={"In progress"} len={progress.length} />
          <Column data={completed} name={"Completed"} len={completed.length} />
        </ColumnContainer>
      </DashboardArea>
    </DashboardContainer>
  );
};

export default Dashboard;
