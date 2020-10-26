import React from "react";
import { Typography } from "@material-ui/core";

const LastUpdate = ({ data: { lastUpdate } }) => {
  return (
    <Typography>Last update: {new Date(lastUpdate).toDateString()}</Typography>
  );
};

export default LastUpdate;
