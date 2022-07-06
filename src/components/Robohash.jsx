import styled from 'styled-components'

import Robohash from 'react-robohash'

const RobohashComponent = ({ walletAddress }) =>
    <RobohashContainer id='robohash-container'>
        <Robohash name={walletAddress} type='robot' />
    </RobohashContainer>

const RobohashContainer = styled.div`
    text-align: center;
    margin-top: 40px;
`

export default RobohashComponent