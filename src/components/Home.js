import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>React and Rails Together</h1>
      <button type="button" onClick={() => { navigate('/greeting'); }}>See a random greeting</button>
    </>
  );
}

export default Home;
