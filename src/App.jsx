import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Robohash from 'react-robohash'
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from  "@solana/web3.js";
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, setAuthority, transfer } from  "@solana/spl-token";
import { useWallet } from './services/useWallet'
import { AwesomeQRCode } from '@awesomeqr/react'

function App() {
  const {
    phantomWalletInstalled,
    walletAddress,
    connectPhantomWallet
  } = useWallet()

  const [robohashString, setRobohashString] = useState(null)
  const [robohashURL, setRobohashURL] = useState(null)

  useEffect(() => { connectPhantomWallet() }, [])

  const connection = () => {
    console.log(new Connection(clusterApiUrl('devnet'), "confirmed"))

  }

  connection();

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
    <Container className='main-container'>
      <img src={'https://i.imgur.com/r0VFFep.png'} className='blurry-gradient2'/>
      <img src={'https://i.imgur.com/r0VFFep.png'} className='blurry-gradient'/>
      {!phantomWalletInstalled && <Text>Please install Phantom Wallet.</Text>}
      {walletAddress ?
        <>
          <Text>Your wallet address is </Text>
          <p className='wallet-address'>{walletAddress}</p>
          <Button onClick={setRobohashString.bind(null, walletAddress)}>Generate Your NFT</Button>
          {robohashString && <>
            <RobohashContainer id='123'>
              <Robohash name={robohashString} type='robot' />
            </RobohashContainer>
            <Button onClick={generateQRCodeImage}>Generate QR Code</Button>
          </>}
        </> :
        <Button
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
