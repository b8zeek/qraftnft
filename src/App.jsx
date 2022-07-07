import { useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import { useWallet } from './services/useWallet'

import HomePage from './pages/HomePage'
import ApplicationLayout from './layout/ApplicationLayout'

function App() {
  const { connectPhantomWallet } = useWallet()

  useEffect(() => {
    if (isMobile) {
      const encodedURL = encodeURIComponent('https://sol-nft-from-wallet-delta.vercel.app')
      window.location.replace(`https://phantom.app/ul/browse/${encodedURL}?ref=${encodedURL}`, '_blank')
    } else {
      connectPhantomWallet()
    }
  }, [])

  return (
    <ApplicationLayout>
      <HomePage />
    </ApplicationLayout>
  )
}

export default App
