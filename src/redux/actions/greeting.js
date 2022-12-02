import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import GET_RANDOM_GREETING from '../actionTypes';

const getRandomGreeting = createAsyncThunk(GET_RANDOM_GREETING, async () => {
  const { data } = await axios.get('http://localhost:3001/api/v1/random_greeting');
  return data;
});

export default getRandomGreeting;
