import React, { useEffect, useState } from "react";

import { WalletChatWidget } from 'react-wallet-chat'  //ExampleComponent
import 'react-wallet-chat/dist/index.css'

// <ExampleComponent text="Create React Library Example 😄" />

const App = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  const [chatAddr, setChatAddr] = useState("0x818cF89054B3A5E03D4677b52982E8319D009194")
  const [widgetState, setWidgetState] = useState({})
  //chatAddr={chatAddr} isOpen={isWidgetOpen} setIsOpen={setIsWidgetOpen}
  return (<div>
    {/* <ExampleComponent text="Create React Library Example 😄" /> */}
    <button onClick={() => {
      console.log(`isWidgetOpen: ${isWidgetOpen}`)
      // setIsWidgetOpen(true)
      setWidgetState(
        {
           ...widgetState, 
          isOpen: true
        }
      )
    }}>
      Toggle widget overlay

    </button>
    {/* <input type="text" id="lname" name="lname"
      value={chatAddr}
      onChange={(e) => {
        setChatAddr(e.target.value)
      }} /> */}
    <button onClick={() => {
      console.log("Open chat")
      console.log(`chatAddr: ${chatAddr}`)
      // setIsWidgetOpen(true)
      // setChatAddr("anything")
      // console.log(`chatAddr: ${chatAddr}`)
      // chatAddr = "anything"
      // console.log(`chatAddr: ${chatAddr}`)
      // setChatAddr("0x818cF89054B3A5E03D4677b52982E8319D009194")
      setWidgetState(
        {
           ...widgetState, 
          chatAddr: "0x818cF89054B3A5E03D4677b52982E8319D009194",
          isOpen: true
        }
      )
      // console.log(`chatAddr: ${chatAddr}`)
      console.log(widgetState)
    }}

    >
      Open Chat

    </button>
    <WalletChatWidget widgetState={widgetState} />
  </div>)


}

export default App
