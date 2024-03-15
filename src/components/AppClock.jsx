const AppClock = () => {
  let date = new Date();
  return (
    <>
      <br />
      <br />
      <center>
        <h1>Clock</h1>
        <p className="lead">
          This is the clock that shows the time in India at all times.
        </p>
        <p className="lead">
          This is the current time: {date.toLocaleDateString()} -{" "}
          {date.toLocaleTimeString()}
        </p>
      </center>
    </>
  );
};

export default AppClock;
