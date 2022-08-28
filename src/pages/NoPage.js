const NoPage = () => {

  const NoPageStyle = {
    textAlign: "center",
    fontSize: "170px",
    marginTop: "120px"
  };

  return (
    <>
      <div className="container">
        <div style={NoPageStyle}>
          404
        </div>
        <div className="text-center h1">
          Page Not Found
        </div>
        <div className="text-center mt-5">
          <a href="/" className="btn btn-dark">Back to Home Page</a>
        </div>
      </div>
    </>
  );
};

export default NoPage;