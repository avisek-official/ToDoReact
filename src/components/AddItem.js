import React, { useState } from "react";
function AddItem(props) {
  const [newItemName, setNewItemName] = useState("");
  const inputHandler = (e) => {
    const enteredItemName = e.target.value;
    setNewItemName(enteredItemName);
  };

  const [inputClasses, setInputClasses] = useState(
    "px-2 py-1 rounded-md mx-2 w-4/5 md:w-3/5"
  );

  const addItemClickHandler = () => {
    if (newItemName.replace(/\s/g, "").length > 0) {
      props.onAddItem(newItemName);
      setNewItemName("");
      setInputClasses("px-2 py-1 rounded-md mx-2 w-4/5 md:w-3/5");
    } else {
      setInputClasses(
        "px-2 py-1 rounded-md mx-2 w-4/5 md:w-3/5 border-2 border-red-600"
      );
    }
  };

  return (
    <div className="w-[95%] md:w-4/5 h-auto flex flex-col justify-center items-center bg-slate-700 rounded-md border border-black py-2 my-1">
      <div className="w-full h-auto flex justify-center mb-2">
        <h1 className="text-lg text-white font-bold">
          React Version of My To do List
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <input
          className={inputClasses}
          type="text"
          placeholder="e.g., Clean Room"
          value={newItemName}
          onChange={inputHandler}
        />
        <button
          className="h-auto w-auto py-1 px-2 bg-green-700 text-white rounded-md active:bg-green-300 active:text-black font-bold"
          onClick={addItemClickHandler}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddItem;
