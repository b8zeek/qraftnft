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
        <>
          <Text>Your wallet address is {walletAddress}.</Text>
          <Button>Generate Your NFT</Button>
        </> :
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

const Button = styled.button`
  height: 32px;
  padding: 4px 15px;
  line-height: 24px;
  font-size: 16px;
  color: #7303c0;
  background: #22c1c3;
  background: -webkit-linear-gradient(to right, #fdbb2d, #22c1c3);
  background: linear-gradient(to right, #fdbb2d, #22c1c3);
  border-radius: 10px;
  border: none;
`

export default App
