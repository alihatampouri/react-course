const WithContainer = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithContainer;
