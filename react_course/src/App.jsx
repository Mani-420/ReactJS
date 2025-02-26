const App = () => {
  const names = ['Mani', 'Hamza', 'Farhan', 'Zohaib'];
  const loggedIn = true;
  return (
    <>
      <div className="text-5xl">This is reactt</div>
      <div>This is just starting</div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* {loggedIn ? <h1> Hello Sexy</h1> : <h1> Hello Unknown</h1>} */}
      {loggedIn && <h1> Hello Sexy</h1>}
    </>
  );
};

export default App;
