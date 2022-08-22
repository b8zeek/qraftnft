import { isMobile } from 'react-device-detect'

import MobileHomePage from '@mobile/MobileHomePage'
import WebAppLayout from '@web/WebAppLayout'

function App() {
    return isMobile ? <MobileHomePage /> : <WebAppLayout />
}

export default App
