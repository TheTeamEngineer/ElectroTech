import React from 'react'
import { useState, useRef } from 'react'
import classes from "./Chatbot.css";
import chat from './Chat.css';
import logo from "./../../assets/img/chatbot.png";
import { BsChatFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const Chatbot = () => {

  //  Make ID function, I use this to create random ID
  // credit : https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  const ChatInput = useRef(null);

  const [ChatOpen, setChatOpen] = useState(false)

  const Chat = [
    {
      id: 1,
      message: "Hello, how can I help you?",
      sender: "Bot"
    },
  ]

  const [sessionID, setSessionID] = useState(makeid(10))

  const [Messages, setMessages] = useState(Chat)

  const [ReceivingMsg, setReceivingMsg] = useState(false)

  const [UserMessage, setUserMessage] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault();
    setReceivingMsg(true)
    ReciveMsg(UserMessage);
    setUserMessage("")
  }

  const ReciveMsg = async (msg) => {
    const message = {
      id: Messages.length + 1,
      message: msg,
      sender: "User"
    }

    setMessages([...Messages, message]);

    await fetch(`https://electro-tech-bot-api.herokuapp.com/chat-bot-api?msg=${msg}&id=${sessionID}`)
      .then(response => response.json())
      .then(data => {
        const botMsg = { id: Messages.length + 1, message: data.message, sender: "Bot" }
        setMessages([...Messages, message, botMsg]);
        setReceivingMsg(false)
      });
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      ReciveMsg(UserMessage);
      setUserMessage("")
    }
  }

  return (
    <div className={classes.container}>
      {/* Chat Area */}
      <div className={classes.Chatbot}>
        {ChatOpen &&
          <div className={chat.chat}>
            <div className={chat.chatTitle}>
              <h1>Electro Tech</h1>
              <h2>Chatbot</h2>
              <figure className={chat.avatar}>
                <img src={logo} alt='' />
              </figure>
            </div>

            <div className={chat.messages}>
              <div className={chat.messagesContent}>
                {Messages.map(message => {
                  if (message.sender === "User") {
                    return (
                      <div key={message.id} className={`${chat.message} ${chat.messagePersonal}`}>
                        {message.message}
                      </div>
                    )
                  } else {
                    return (
                      <div key={message.id} className={`${chat.new} ${chat.message}`}>
                        <figure className={chat.avatar}>
                          <img src={logo} alt='' />
                        </figure>
                        {message.message}
                      </div>
                    )
                  }
                })}

                {/* Loading Messages */}
                {ReceivingMsg &&
                  <div className={`${chat.new} ${chat.message} ${chat.loading}`}>
                    <figure className={chat.avatar}>
                      <img src={logo} alt='' />
                    </figure>
                    <span></span>
                  </div>
                }
              </div>
            </div>

            {/* Text Area */}
            <div className={chat.messageBox}>
              <form onSubmit={(e) => { handelSubmit(e) }} ref={ChatInput}>
                <textarea type="text" name='message' value={UserMessage} onChange={(e) => { setUserMessage(e.target.value) }} className={chat.messageInput} onKeyDown={(e) => { onEnterPress(e) }} placeholder="Type message..."></textarea>
                <button type="submit" className={chat.messageSubmit}>Send</button>
              </form>
            </div>
          </div>
        }
      </div>

      {/* Chat CTA Button */}
      <div className={classes.CallToAction} onClick={() => setChatOpen(!ChatOpen)}>
        {ChatOpen ? <FaTimes size={30} /> : <BsChatFill size={28} />}
      </div>
    </div>
  )
}

export default Chatbot