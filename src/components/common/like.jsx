import React from "react";

const Like = ({ onLike, liked }) => {
  const classes = liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i style={{ cursor: "pointer" }} onClick={onLike} className={classes} />
  );
};
export default Like;
