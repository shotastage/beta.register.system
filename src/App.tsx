import React, { useState } from 'react';
import ApiClient from './services/ApiService';

interface Props { }

const App: React.FC<Props> = () => {

  // State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const api = new ApiClient();

  const contentUpdate = () => {
    //
  };

  const apiCall = () => {
    api.post('', {
      records: [
        {
          fields: {
            "Apple ID": "hornet.live.mf@gmail.com",
            "Message": "This is a pen."
          }
        }
      ]
    });
  };

  return (
    <>
      <h1>Bhaa Beta Program</h1>
      <p>
        This is a pen.
      </p>
      <input placeholder="Apple ID" />
      <input placeholder="Message (Optional)" />



      <button className="button btn-danger">Submit</button>
    </>
  );
}

export default App;
