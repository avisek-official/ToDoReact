import React, { useState } from "react";
import ListItems from "./components/ListItems";
import AddItem from "./components/AddItem";
import NoItems from "./components/NoItems";

function App() {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const [newItemList, setNewItemList] = useState(items);
  const addItemHandler = (newItem) => {
    const newItemObj = {
      id: Math.random().toString(),
      itemName: newItem,
      done: false,
    };
    setNewItemList((prevItems) => {
      return [newItemObj, ...prevItems];
    });
    //setNewItemList([newItemObj, ...newItemList]);
    localStorage.setItem("items", JSON.stringify([newItemObj, ...items]));
  };
  const deleteItemHandler = (deleteId) => {
    const dItemList = newItemList.filter((item) => item.id !== deleteId);
    setNewItemList(dItemList);
    localStorage.setItem("items", JSON.stringify(dItemList));
  };
  const doneHandler = (doneId) => {
    const dItemList = newItemList.map((item) => {
      if (item.id === doneId) {
        item.done = true;
      }
      return item;
    });
    setNewItemList(dItemList);
    localStorage.setItem("items", JSON.stringify(dItemList));
  };
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <AddItem onAddItem={addItemHandler} />
      {newItemList.length > 0 && (
        <ListItems
          onDone={doneHandler}
          onDelete={deleteItemHandler}
          items={newItemList}
        />
      )}
      {newItemList.length === 0 && <NoItems />}
    </div>
  );
}

export default App;
