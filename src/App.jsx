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
          {!robohashString &&
              <Button onClick={setRobohashString.bind(null, walletAddress)}>Generate Your NFT</Button>}
          {robohashString && !robohashURL && <>
            <Button onClick={generateQRCodeImage}>Generate QR Code</Button>
            <RobohashContainer id='123'>
              <Robohash name={walletAddress} type='robot' />
            </RobohashContainer>
          </>}
        </> :
        <Button
          onClick={connectPhantomWallet.bind(null, false)}
        >
          Connect Phantom Wallet
        </Button>
      }
      {robohashURL && <QRCodeContainer>
        {Robohash.name &&  <Button onClick={() => window.location = 'mailto:milosrujevic@gmail.com?subject=QR NFT for ' + walletAddress + '!&body=Please state address where you want your stickers delivered: ___Your Address__"'}>
           Order NFT Sticker
        </Button>
        }

        <AwesomeQRCode
          options={{
            text: 'https://sol-nft-from-wallet.vercel.app/ ',
            size: 400,
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
  text-shadow: 0 0 2px #330033;
  ${props => props.cursorPointer && 'cursor: pointer;'}
`

const Button = styled.button`
  font-size: 16px;
  height: 47px;
    padding: 5px 30px;
    line-height: 24px;
    font-family: Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
    font-size: 16px;
    margin-bottom: 20px;
    color: #fff;
    background: hsla(328, 75%, 45%, 1);
    background: linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C81D77", endColorstr="#6710C2", GradientType=1 );
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
