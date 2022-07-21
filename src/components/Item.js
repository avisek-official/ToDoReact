import React from "react";
function Item(props) {
  const deleteClickHandler = () => {
    props.onDelete(props.itemId);
  };

  const doneClickHandler = () => {
    props.onDone(props.itemId);
  };

  let iName = <h1 className="text-white text-xl">{props.itemName}</h1>;
  if (props.itemDone) {
    iName = (
      <h1 className="text-white text-xl line-through">{props.itemName}</h1>
    );
  }
  let doneBtn;
  if (!props.itemDone) {
    doneBtn = (
      <button
        className="h-auto w-auto p-1 mr-2 my-1 bg-blue-800 text-white rounded-md active:bg-blue-500 active:text-black"
        onClick={doneClickHandler}
      >
        Done
      </button>
    );
  } else {
    doneBtn = "";
  }
  return (
    <div className="flex flex-wrap justify-between">
      {iName}
      <div>
        {doneBtn}
        <button
          className="h-auto w-auto p-1 my-1 bg-red-700 text-white rounded-md active:bg-red-300 active:text-black"
          onClick={deleteClickHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Item;
