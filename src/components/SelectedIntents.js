import React from "react";
import { useSelector } from "react-redux";
import IntentsItem from "./IntentsItem";
import classes from "./SelectedIntents.module.css";

const SelectedIntents = () => {
  const allItems = useSelector((state) => state.intents.items);
  const selectedItems = allItems.filter((item) => item.selected === true);
  const totalQuantity = selectedItems.length;
  return (
    <div className={classes.selectedIntents}>
      <h3>My selected intents ({totalQuantity})</h3>

      {totalQuantity === 0 && (
        <div className={classes.noselected}>
          <p>
            Select a intents from the list on the right to add it to your
            selecteds.
          </p>
        </div>
      )}
      {selectedItems.map((item) => {
        return (
          <IntentsItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              selected: item.selected
            }}
          />
        );
      })}
    </div>
  );
};
export default SelectedIntents;
