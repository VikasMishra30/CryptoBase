import "./App.css";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import Landing from "./components/landing/landing";
import Chat from "./components/chat/chat";
import Assistant from "./components/assistant/assistant";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (

    <div className="">
      
      <div className="">
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/trade" element={<Swap connect={connect} isConnected={isConnected} address={address} />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/assist" element={<Assistant />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Landing/>} />
        </Routes>
      </div>

    </div>
  )
}

export default App;
