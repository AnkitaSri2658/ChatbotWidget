import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { intentsActions } from "../store/intents-slice";

import classes from "./IntentsItem.module.css";

const IntentsItem = (props) => {
  const { id, name, expressions, selected, reply } = props.item;
  const [selectedFlag, setselectedFlag] = useState(selected);
  const dispatch = useDispatch();

  const toggleselected = () => {
    if (selectedFlag === true) {
      setselectedFlag(false);
      dispatch(
        intentsActions.toggleItemToSelected({
          id: id,
          selected: false,
        })
      );
    } else {
      setselectedFlag(true);
      dispatch(
        intentsActions.toggleItemToSelected({
          id: id,
          selected: true,
        })
      );
    }
  };
let tileContent = '';
  if(reply){
    tileContent = (
      <div>
        <p><span>{expressions[0].text}</span></p>
        <p className={classes.rightAlign}><span>{reply}</span></p>
      </div>
    )
  }

  return (
   
    <div
     // className={`item ${selected == true ? "active" : ""}`}
     className={selected == true ? `${classes.item} ${classes.active}` : classes.item} 
      id={id}
      onClick={toggleselected}   
    >
     <h4>{name}</h4>
    {tileContent}
    </div>
   
  );
};

export default IntentsItem;
