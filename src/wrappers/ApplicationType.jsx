import { isMobile } from 'react-device-detect'

const ApplicationTypeWrapper = () => {
    return isMobile ?
        <div>Mobile</div> :
        <div>Web</div>
}

export default ApplicationTypeWrapper