import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
  return (
    <IconButton
      aria-label="add to watch list"
      onClick={() => console.log(`Added movie ${movie.id} to watch list`)}
    >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;
