import styled from 'styled-components'

const Text = ({ children }) => <StyledParagraph>{children}</StyledParagraph>

const StyledParagraph = styled.p`
    line-height: 32px;
    font-size: 24px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgba(150, 150, 150, 1);
    margin: 0;
`

export default Text
