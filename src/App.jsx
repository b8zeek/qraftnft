import { useEffect } from 'react'

import { useWallet } from './services/useWallet'

import HomePage from './pages/HomePage'
import ApplicationLayout from './layout/ApplicationLayout'

function App() {
  const { connectPhantomWallet } = useWallet()

  useEffect(() => { connectPhantomWallet() }, [])

  return (
    <ApplicationLayout>
      <HomePage />
    </ApplicationLayout>
  )
}

export default App
