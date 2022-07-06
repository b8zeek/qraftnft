
import { useState, useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

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

        const templateParams = {
            currentValue: inputRef.current.value,
            walletAddress: walletAddress
        };
        emailjs.send('service_w6acx2m', 'template_0gczmq7', templateParams, 'FsM-UuY5XXpVXOUdZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
            {Robohash.name && <p>Sticker and NFT will arrive shortly :) </p>
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
                    <StyledLabel>Your LINKTR id</StyledLabel>
                    <StyledInput ref={inputRef} />
                    <Button onClick={closeModal.bind(null, closeModalCallback)}>Generate QR Code</Button>
                </ModalContent>
            </Modal>
        </Content>
    </Container>
}

const Container = styled.div`
    width: calc(100% - 100px);
    padding: 81px 50px 50px;
    text-align: center;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        padding: 130px 20px 20px;
    }
`

const Content = styled.div`
    border-color: chartreuse;
    padding: 40px;
    border-radius: 12px;
    border-style: double;
    background: #B3FFAB;
    background: -webkit-linear-gradient(to right, #12FFF7, #B3FFAB);
    background: linear-gradient(to right, #12FFF7, #B3FFAB);
    filter: drop-shadow(1px 1px 3px #12FFF7);
    padding: 92px;
    @media (max-width: 768px) {
        width: calc(100%-20px);
        padding: 10px;
    }
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
    width: 321px;
    margin: 0 auto;
`

const ModalContent = styled.div`
    min-height: 100px;
    width: 60%;
    padding: 30px 20%;
    text-align: center;
    margin: 70px auto 0;
    background: black;
    border-radius: 20px;
    border: 2px solid #292e42;
    padding: 60px 65px 15px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    filter: drop-shadow(1px 1px 3px #000);
    @media (max-width: 768px) {
        width: calc(100%-20px);
        padding: 10px;
    }
    & button {
        margin-top: 20px;
    }
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
    display: block;
    height: 32px;
    width: 90%;
    width: calc(100% - 3.4em);
    padding: 4px 15px;
    line-height: 24px;
    font-size: 1em;
    border-radius: 4px;
    border: none;
    outline: none;
    background:  #141620;
    border-radius: 9px;
    padding: 8px 20px 8px 36px;
    color: #fff;
    &:hover {
      border-color: #d5ff64;
      -webkit-box-shadow: 0 0 0 3px rgb(213 255 100 / 30%);
      box-shadow: 0 0 0 3px rgb(213 255 100 / 30%);
    }
`

export default HomePage