
import { useState, useRef } from 'react'
import styled from 'styled-components'

import { useWallet } from '../services/useWallet'

import Robohash from '../components/Robohash'
import QRCode from '../components/QRCode'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { useModals } from '../services/useModals'

const HomePage = () => {
    const inputRef = useRef(null)

    const [robohashString, setRobohashString] = useState(null)
    const [robohashURL, setRobohashURL] = useState(null)
    const [QRText, setQRText] = useState(null)

    const {
      phantomWalletInstalled,
      walletAddress,
      connectPhantomWallet
    } = useWallet()

    const {
        modalOpened,
        openModal,
        closeModal
    } = useModals()

    const closeModalCallback = () => {
      const url = document.getElementById('robohash-container').getElementsByTagName('img')[0].src
  
      const imageLink = url.split('?')[0]
  
      var request = new XMLHttpRequest()
      request.open('GET', imageLink, true)
      request.responseType = 'blob'
      request.onload = function() {
          var reader = new FileReader()
          reader.readAsDataURL(request.response)
          reader.onload = e => setRobohashURL(e.target.result)
      }
      request.send()
      setQRText(inputRef.current.value)
    }

    return <Container>
        <Content>
            <img alt='left-orb' src={'https://i.imgur.com/r0VFFep.png'} className='blurry-gradient2'/>
            <img alt='right-orb' src={'https://i.imgur.com/r0VFFep.png'} className='blurry-gradient'/>

            {!phantomWalletInstalled && <Text>No Phantom Wallet / No Business here :( </Text>}
            {walletAddress ?
            <>
                <Text>Your wallet address is </Text>
                <p className='wallet-address'>{walletAddress}</p>
                {!robohashString &&
                    <Button onClick={setRobohashString.bind(null, walletAddress)}>Generate Your NFT</Button>}
                {robohashString && !robohashURL && <>
                <Button onClick={openModal}>Add QR Code Link</Button>
                <Robohash />
                </>}
            </> :
            <Button onClick={connectPhantomWallet.bind(null, false)}>
                Connect Phantom Wallet
            </Button>
            }
            {robohashURL && <QRCodeContainer>
            {Robohash.name && <Button  onClick={() => window.location = 'mailto:milosrujevic@gmail.com?subject=QR NFT for ' + walletAddress + '!&body=Please state address where you want your stickers delivered: ___Your Address__"'}>
                Order NFT Sticker
            </Button>
            }
            {QRText &&
                <QRCode
                    QRText={QRText}
                    robohashURL={robohashURL}
                />
            }
            </QRCodeContainer>}

            <Modal show={modalOpened}>
                <ModalContent>
                    <StyledLabel>Please insert QR code link</StyledLabel>
                    <StyledInput ref={inputRef} />
                    <Button onClick={closeModal.bind(null, closeModalCallback)}>Generate QR Code</Button>
                </ModalContent>
            </Modal>
        </Content>
    </Container>
}

const Container = styled.div`
    width: calc(100% - 100px);
    padding: 130px 50px 50px;
    text-align: center;

`

const Content = styled.div`
    min-height: 900px;
    border-color: chartreuse;
    padding: 40px;
    border-radius: 12px;
    border-style: double;
    background: #B3FFAB;
    background: -webkit-linear-gradient(to right, #12FFF7, #B3FFAB);
    background: linear-gradient(to right, #12FFF7, #B3FFAB);
    filter: drop-shadow(1px 1px 20px #12FFF7);
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

const QRCodeContainer = styled.div`
    height: 400px;
    width: 400px;
    margin: 0 auto;
`

const ModalContent = styled.div`
    min-height: 100px;
    width: 60%;
    background-color: white;
    border-radius: 10px;
    padding: 30px 10%;
    text-align: center;
    margin: 70px auto 0;
`

const StyledLabel = styled.label`
    display: block;
    line-height: 32px;
    font-size: 24px;
    color: purple;
    text-align: left;
    margin-bottom: 10px;
`

const StyledInput = styled.input`
    height: 32px;
    width: 100%;
    padding: 4px 15px;
    line-height: 24px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    outline: none;
    background: #C6FFDD;
    background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
    background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
    margin-bottom: 30px;
`

export default HomePage