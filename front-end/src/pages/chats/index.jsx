import React from 'react';
import Navbar from '../components/Navbar';
import { requestData } from '../../utils/requests';

export default function Chats() {
  const [chats, setChats] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const getAllChats = async () => {
    try {
      const response = await requestData('/');
      setChats(response.allChats);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllChats();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <div id="phone-wrapper">

      <div id="app">
        <Navbar />
        <h1>Download all</h1>

        <div id="chats-page">
          <h3>Chats:</h3>
          { !isLoaded ? <p>Loading...</p> : (
            <div id="chats">
              { chats.map((chat) => (
                <div
                  key={ chat.id }
                  className="chat"
                >
                  <div className="chat-info">
                    <p>
                      {`User #${chat.id}
                       - ${chat.username} - ${formatDate(chat.finished)} `}

                    </p>
                  </div>
                  {/* { chat.messages } */}
                </div>
              )) }
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}
