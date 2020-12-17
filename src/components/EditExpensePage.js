import React from "react";

const EditExpensePage = (props) => {
  return <div>Edit the expense of the ID: {props.match.params.id}</div>;
};

export default EditExpensePage;
