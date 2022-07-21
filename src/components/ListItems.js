import React from "react";
import Item from "./Item";

function ListItems(props) {
  const itemArr = props.items;
  const deleteEventHandler = (deleteId) => {
    props.onDelete(deleteId);
  };
  const doneEventHandler = (doneId) => {
    props.onDone(doneId);
  };
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      {itemArr.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[95%] md:w-4/5 h-auto bg-slate-700 rounded-md border border-black p-2 my-1"
          >
            <Item
              itemId={item.id}
              itemName={item.itemName}
              itemDone={item.done}
              onDelete={deleteEventHandler}
              onDone={doneEventHandler}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ListItems;
