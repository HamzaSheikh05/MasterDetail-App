import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { RecipeData } from "../database/recipeDatabase";

const Shell = () => {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <Table striped bordered hover size="md" variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Speciality</th>
            <th>Recipe Details</th>
          </tr>
        </thead>
        <tbody>
          {RecipeData.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>
                <Button onClick={handleMoreClick}>{item.name}</Button>
              </td>
              <td>{item.Age}</td>
              <td>{item.Speciality}</td>
              <td>{showMore && item.recipe}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Shell;
