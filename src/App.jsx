import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Robohash from 'react-robohash'

import { useWallet } from './services/useWallet'
import { AwesomeQRCode } from '@awesomeqr/react'

import logoImg from './assets/HxQVBHkT53gwHSJvnaPs1qSEx1E8eyXXgtawCjBaf6r1.png'

function App() {
  const {
    phantomWalletInstalled,
    walletAddress,
    connectPhantomWallet
  } = useWallet()

  const [robohashString, setRobohashString] = useState(null)
  const [robohashURL, setRobohashURL] = useState(null)

  useEffect(() => { connectPhantomWallet() }, [])

  const generateQRCodeImage = () => {
    const url = document.getElementById('123').getElementsByTagName('img')[0].src

    const imageLink = url.split('?')[0]

    var request = new XMLHttpRequest()
    request.open('GET', imageLink, true)
    request.responseType = 'blob'
    request.onload = function() {
        var reader = new FileReader()
        reader.readAsDataURL(request.response)
        reader.onload =  function(e){
          setRobohashURL(e.target.result)
        }
    }
    request.send()
  }

  return (
    <Container>
      {!phantomWalletInstalled && <Text>Please install Phantom Wallet.</Text>}
      {walletAddress ?
        <>
          <Text>Your wallet address is {walletAddress}.</Text>
          <Button onClick={setRobohashString.bind(null, walletAddress)}>Generate Your NFT</Button>
          {robohashString && <>
            <RobohashContainer id='123'>
              <Robohash name={robohashString} type='robot' />
            </RobohashContainer>
            <Button onClick={generateQRCodeImage}>Generate QR Code</Button>
          </>}
        </> :
        <Button
          cursorPointer={true}
          onClick={connectPhantomWallet.bind(null, false)}  
        >
          Connect Phantom Wallet
        </Button>
      }
      {robohashURL && <QRCodeContainer>
        <AwesomeQRCode
          options={{
            text: robohashString,
            backgroundImage: robohashURL
          }}
        />
      </QRCodeContainer>}
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
  cursor: pointer;
`

const RobohashContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`

const QRCodeContainer = styled.div`
  height: 400px;
  width: 400px;
  margin: 0 auto;
`

export default App
