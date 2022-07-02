import { useEffect } from 'react'
import styled from 'styled-components'

import { useWallet } from './services/useWallet'

function App() {
  const {
    phantomWalletInstalled,
    walletAddress,
    connectPhantomWallet
  } = useWallet()

  useEffect(() => { connectPhantomWallet() }, [])

  return (
    <Container>
      <Text>Mirko Basic</Text>
      {!phantomWalletInstalled && <Text>Please install Phantom Wallet.</Text>}
      {walletAddress ?
        <Text>Your wallet address is {walletAddress}.</Text> :
        <Text
          cursorPointer={true}
          onClick={connectPhantomWallet.bind(null, false)}  
        >
          Please connect Phantom Wallet by clicking on this paragraph.
        </Text>
      }
    </Container>
  )
}

const Container = styled.div`
  padding: 0 10%;
  height: 100%;
`

const Text = styled.p`
  line-height: 48px;
  font-size: 36px;
  font-family: SF Pro;
  color: white;
  margin: 0;

  ${props => props.cursorPointer && 'cursor: pointer;'}
`

export default App
