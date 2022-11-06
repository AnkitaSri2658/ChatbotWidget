import { createSlice } from "@reduxjs/toolkit";
import intentsData from "../intents.json";

//converting data in to desire result -> removing duplicates
let resultArr = new Map();
var data = intentsData;
for (let i = 0; i < data.length; i++) {
  if (!resultArr.has(data[i].id)) {    
      resultArr.set(data[i].id, data[i]);    
  }
}
var finalData = [...resultArr.values()];
const intentsSlice = createSlice({
  name: "intents",
  initialState: {
    items: finalData,
    selectedItems: [],
  },
  reducers: {
    toggleItemToSelected(state, action) {
      const selItems = action.payload;
      const existingItem = state.items.find((item) => item.id === selItems.id);
      existingItem.selected = selItems.selected;
    },
    toggleSelectAll(state, action) {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].selected = action.payload.select;
      }     
    },
  },
});

export const intentsActions = intentsSlice.actions;

export default intentsSlice;
