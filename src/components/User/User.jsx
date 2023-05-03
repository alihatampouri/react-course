const User = ({firstname, lastname, job}) => {
  return (
    <div className="flex justify-between border rounded-md py-2 px-4">
        <span>{firstname} {lastname}</span>
        <span className="bg-sky-400/10 items-center px-3 py-1 rounded-full text-sky-600 text-xs">{job}</span>
    </div>
  );
};

export default User;
