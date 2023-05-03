const User = ({firstname, lastname, job}) => {
  return (
    <div className="flex justify-between border rounded-md p-2">
        <span className="capitalize">{firstname} {lastname}</span>
        <span className="bg-sky-400/10 items-center px-3 py-1 rounded-full text-sky-600 text-xs capitalize">{job}</span>
    </div>
  );
};

export default User;
