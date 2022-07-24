import React from "react";
import {
  Addbutton,
  Card,
  ColumnHeader,
  ColumnWrapper,
  Count,
} from "../styles/Dashboard.style";

const Column = ({ data, len, name }) => {
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <h5>{name}</h5>
        <Count>
          <h5>{len}</h5>
        </Count>
      </ColumnHeader>
      <Addbutton>+</Addbutton>
      {data.map((todo) => {
        return (
          <Card>
            <h3>{todo.name}</h3>
            <p>{todo.details}</p>
          </Card>
        );
      })}
    </ColumnWrapper>
  );
};

export default Column;
