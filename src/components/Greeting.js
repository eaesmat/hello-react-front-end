import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/configureStore';
import getRandomGreeting from '../redux/actions/greeting';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    store.dispatch(getRandomGreeting());
  }, []);

  return (
    <h1>{!greeting ? 'Greeting fetching...' : greeting.greeting_message}</h1>
  );
}

export default Greeting;
