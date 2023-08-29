import React from 'react';
import Navbar from '../components/Navbar';
import { requestData } from '../../utils/requests';

export default function Chats() {
  const [chats, setChats] = React.useState([]);

  const getAllChats = async () => {
    try {
      const response = await requestData('/');
      console.log(response);
      setChats(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllChats();
  }, []);

  return (
    <div id="phone-wrapper">

      <div id="app">
        <Navbar />
      </div>
    </div>
  );
}
