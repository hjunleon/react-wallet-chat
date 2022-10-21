import React from 'react'

import { WalletChatWidget } from 'react-wallet-chat'  //ExampleComponent
import 'react-wallet-chat/dist/index.css'

// <ExampleComponent text="Create React Library Example 😄" />

const App = () => {

  return (<div>
    {/* <ExampleComponent text="Create React Library Example 😄" /> */}
    <WalletChatWidget chatAddr="0x818cF89054B3A5E03D4677b52982E8319D009194"/>
  </div>)


}

export default App
