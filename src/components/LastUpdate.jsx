import React from "react";
import { Typography } from "@material-ui/core";

const LastUpdate = ({ data: { lastUpdate } }) => {
  return (
    <Typography>
      <p> Last update: {new Date(lastUpdate).toDateString()} </p>
    </Typography>
  );
};

export default LastUpdate;
