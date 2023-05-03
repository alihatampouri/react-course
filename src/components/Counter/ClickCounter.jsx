import WithCounter from "../hoc/WithCounter";

const ClickCounter = ({ count, onIncrement }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      <div className="flex justify-between col-start-2 border rounded-md py-2 pl-4 pr-2 items-center">
        <span className="cursor-pointer" onClick={onIncrement}>
          Click me
        </span>
        <span className="bg-sky-400/10 items-center px-3 py-1 rounded-full text-sky-600 text-xs">
          {count ? `Click ${count} times` : `Not clicked yet`}
        </span>
      </div>
    </div>
  );
};

export default WithCounter(ClickCounter, 5);
