import {AwesomeQRCode} from '@awesomeqr/react'

const QRCode = ({QRText, robohashURL}) =>
    <AwesomeQRCode
        options={{
            text: 'https://linktr.ee/'+QRText,
            size: 321,
            logoCornerRadius: 0,
            logoMargin: 0,
            margin: 0,
            logoScale: 0,
            cornerAlignment: {
                scale: 0.5,
                protectors: false,
            },
            protectors: false,
            backgroundImage: robohashURL
        }}
    />

export default QRCode