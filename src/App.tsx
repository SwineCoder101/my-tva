import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import WalletConnectButton  from './components/WalletConnectButton'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

// 1. Get projectId
const projectId = 'YOUR_PROJECT_ID'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <WalletConnectButton />
      <TonConnectButton />
      </WagmiConfig>
    </div>
  );
}

export default App
