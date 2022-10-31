import React, { useEffect, useState } from "react";
import ButtonOverlay from "../ButtonOverlay/ButtonOverlay";
// import "./WalletChat.css"
import styles from "./WalletChat.module.css";
import { getCookie } from "../utils";

const setExtChatAddr = (setState) => {
  return (addr) => {
    setState(undefined)
    setState(addr)
  }
}

const openChat = (addr) => {

}
// {chatAddr, setChatAddr, isOpen, setIsOpen}

function WalletChatWidget({ widgetState }) {
  console.log("WalletChatWidget Render")
  console.log(widgetState)
  const [isOpen, setIsOpen] = useState(widgetState?.isOpen)
  const [chatAddr, setChatAddr] = useState(widgetState?.chatAddr)
  const [hideIframe, setHideIframe] = useState(false);
  // const [url, setUrl] = useState(process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun")
  console.log(`WalletChatWidget isOpen: ${isOpen}`)
  console.log(`WalletChatWidget chatAddr: ${chatAddr}`)
  // useEffect(()=>{
  //   if (chatAddr != undefined && chatAddr.length != 0){
  //     setUrl(`${process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun"}/dm/${chatAddr}`)
  //   }
  //   console.log("Cur url: " + url)
  // },[])

  useEffect(() => {
    console.log("useEffect widgetState")
    setIsOpen(widgetState?.isOpen)
    setChatAddr(widgetState?.chatAddr)
    setHideIframe(true)
    setTimeout(() => {
      setHideIframe(false)
    }, 100)
    // let url = process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun" // process.env.REACT_APP_APP_URL || "http://192.168.50.30:3000" || "http://localhost:3000";

    // if (chatAddr != undefined && chatAddr.length != 0){
    //   setUrl(`${process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun"}/dm/${chatAddr}`)
    // }
  }, [
    widgetState
  ])
  // if(isOpen == undefined || setIsOpen == undefined){
  //   // const [isOpen, setIsOpen] = useState(isOpen2 != undefined? isOpen2:false);
  //   [isOpen, setIsOpen] = useState(false);
  // }

  // if (chatAddr == undefined || setChatAddr == undefined){
  //   [chatAddr, setChatAddr] = useState("");
  // }

  const [numUnread, setNumUnread] = useState(0);
  // const url = process.env.REACT_APP_APP_URL || "http://localhost:3000"  //"https://app.walletchat.fun/"//"app.walletchat.fun" //http://localhost:3000
  let url = process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun" // process.env.REACT_APP_APP_URL || "http://192.168.50.30:3000" || "http://localhost:3000";
  // if(isOpen2 != undefined)[
  //   setIsOpen(isOpen2)
  // ]
  // useEffect(()=>{
  //   setIsOpen(isOpen2)
  // },[isOpen2])
  const clickHandler = (e) => {
    setIsOpen(!isOpen);
  };

  if (chatAddr != undefined && chatAddr.length != 0) {
    url += `/dm/${chatAddr}`
  }
  console.log(`url: ${url}`);
  url = { val: url }
  useEffect(() => {
    window.addEventListener("message", (e) => {
      var data = e.data;
      console.log("RECEIVED message from CHILD TO PARENT");
      console.log(data);
      if (data["target"] == 'unread_cnt') {
        setNumUnread(data["data"]);
      }

    });
  }, []);
  //   setInterval(() => {
  //     let cnt = getCookie("_wallet_chat_msg_cnt");

  //     // setNumUnread(cnt);
  //   }, 3000);
  return (
    <div id={styles["wallet-chat-widget__container"]}>
      {/* {isOpen && (
                <iframe id="wallet-chat-widget" src={url}></iframe>
            )} */}
      {!hideIframe &&
        <iframe
          id="wallet-chat-widget"
          className={styles["wallet-chat-widget"]}
          style={{
            height: isOpen ? "" : "0px",
            width: isOpen ? "" : "0px",
            minHeight: isOpen ? "" : "0px",
            minWidth: isOpen ? "" : "0px",
            // display: isOpen?"block":"none"
          }}
          src={url.val}
        ></iframe>
      }
      <ButtonOverlay
        notiVal={numUnread}
        showNoti={numUnread > 0}
        isOpen={isOpen}
        clickHandler={clickHandler}
      />
    </div>
  );
}

export default
  WalletChatWidget