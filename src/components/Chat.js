import React from "react";
import MessageBox from "./MessageBoxx";
import ChatBox from "./ChatBoxx";

function Chat() {
  return (
    <div className="chat">
      <ChatBox />
      <MessageBox />
    </div>
  );
}

export default Chat;
