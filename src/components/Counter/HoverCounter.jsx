import WithCounter from "../hoc/WithCounter";

const HoverCounter = ({ count, onIncrement }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      <div className="flex justify-between col-start-2 border rounded-md py-2 pl-4 pr-2 items-center">
        <span className="cursor-default" onMouseOver={onIncrement}>Hover me</span>
        <span className="bg-sky-400/10 items-center px-3 py-1 rounded-full text-sky-600 text-xs">
          {count ? `Hover ${count} times` : `Not hovered yet`}
        </span>
      </div>
    </div>
  );
};

export default WithCounter(HoverCounter);
