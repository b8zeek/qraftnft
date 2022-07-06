import { AwesomeQRCode } from '@awesomeqr/react'

const QRCode = ({ QRText, robohashURL }) =>
    <AwesomeQRCode
        options={{
        text: QRText,
        size: 321,
        backgroundImage: robohashURL
        }}
    />

export default QRCode