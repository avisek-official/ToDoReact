function NoItems() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="w-[95%] md:w-4/5 h-auto bg-slate-700 rounded-md border border-black p-8 my-1 text-center">
        <h1 className="text-white text-lg font-bold">Nothing to do ... !</h1>
      </div>
    </div>
  );
}
export default NoItems;
