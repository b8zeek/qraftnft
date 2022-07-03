import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Robohash from 'react-robohash'

import { useWallet } from './services/useWallet'
import {AwesomeQRCode} from "@awesomeqr/react";

function App() {
  const {
    phantomWalletInstalled,
    walletAddress,
    connectPhantomWallet
  } = useWallet()

  const [robohashString, setRobohashString] = useState(null)

  useEffect(() => { connectPhantomWallet() }, [])

  return (
    <Container>
      {!phantomWalletInstalled && <Text>Please install Phantom Wallet.</Text>}
      {walletAddress ?
        <>
          <Text>Your wallet address is {walletAddress}.</Text>
          <Button onClick={setRobohashString.bind(null, walletAddress)}>Generate Your NFT</Button>
          {robohashString && <RobohashContainer>
            <Robohash name={robohashString} type='robot' />
          </RobohashContainer>}

          <AwesomeQRCode
              options={{
                text: "Awesome-qr.js",
                // ...
              }}
              onStateChange={(state) => {
                switch (state) {
                  case "working":
                    // ...
                    break;
                  case "idle":
                    // ...
                    break;
                }
              }}
          />
        </> :
        <button
          cursorPointer={true}
          onClick={connectPhantomWallet.bind(null, false)}  
        >
          Connect Phantom Wallet
        </button>
      }
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  padding: 0 10%;
  text-align: center;
`

const Text = styled.p`
  line-height: 48px;
  font-size: 36px;
  font-family: Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  color: white;
  margin: 0;

  ${props => props.cursorPointer && 'cursor: pointer;'}
`

const Button = styled.button`
  height: 32px;
  padding: 4px 30px;
  line-height: 24px;
  font-size: 16px;
  color: #7303c0;
  background: #22c1c3;
  background: -webkit-linear-gradient(to right, #fdbb2d, #22c1c3);
  background: linear-gradient(to right, #fdbb2d, #22c1c3);
  border-radius: 10px;
  border: none;
`

const RobohashContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`

export default App
