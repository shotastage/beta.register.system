import React from 'react';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <h1>Bhaa Beta Program</h1>
      <p>
        This is a pen.
      </p>
      <input placeholder="Apple ID" />
      <input placeholder="Message (Optional)" />
      <button>Submit</button>
    </>
  );
}

export default App;
