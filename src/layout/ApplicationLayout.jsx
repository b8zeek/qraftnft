import styled from 'styled-components'

import Header from './Header'

const ApplicationLayout = ({ children }) => {
    return <Container>
        <Header />
        {children}
    </Container>
}

const Container = styled.div`
    width: 100%;
`

export default ApplicationLayout