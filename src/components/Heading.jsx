import styled from 'styled-components'

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>

const StyledHeading = styled.h1`
    font-size: 42px;
    font-family: Inter, sans-serif;
    color: ${({ theme: { color } }) => color.white};
    text-align: center;
    margin: 0;
`

export default Heading