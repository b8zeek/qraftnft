import styled from 'styled-components'

const Text = ({ children, size, marginBottom }) =>
    <StyledParagraph
        size={size}
        marginBottom={marginBottom}
    >
        {children}
    </StyledParagraph>

const StyledParagraph = styled.p`
    line-height: 32px;
    font-size: 24px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgba(150, 150, 150, 1);
    margin: 0;

    ${props => props.size === 'medium' && `
        line-height: 24px;
        font-size: 16px;
    `}

    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`}
`

export default Text
