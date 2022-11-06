import React, { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { intentsActions } from "../store/intents-slice";
import IntentsItem from "./IntentsItem";
import classes from "./Intents.module.css";

const Intents = () => {
  const resultArr = useSelector((state) => state.intents.items);
  const dispatch = useDispatch();
  const InputRef = useRef('');
 
   const toggleSelectAll = () => {
    const selectAll = InputRef.current.checked;
    if (selectAll === true) {
      dispatch(
        intentsActions.toggleSelectAll({          
          select: true,
        })
      );
    } else {
      dispatch(
        intentsActions.toggleSelectAll({
          select: false,
        })
      );
    }
  };

  return (
    <div className={classes.intents}>
      <h3>Select intents for your Chatbot</h3>
      <div><input type='checkbox' ref={InputRef} onClick={toggleSelectAll}/>Select All</div>
      <div>
        {resultArr.map((item) => {
          return (
            <IntentsItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              expressions: item.trainingData.expressions,
              selected: item.selected,
              reply: item.reply.text
            }}
          />
          );
        })}
      </div>
    </div>
  );
};

export default Intents;
