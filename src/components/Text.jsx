import styled from 'styled-components'

const Text = ({ children, size, bold, marginBottom }) =>
    <StyledParagraph
        size={size}
        bold={bold}
        marginBottom={marginBottom}
    >
        {children}
    </StyledParagraph>

const StyledParagraph = styled.p`
    width: 100%;
    line-height: 32px;
    font-size: 24px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgba(150, 150, 150, 1);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;

    ${props => props.size === 'medium' && `
        line-height: 24px;
        font-size: 16px;
    `}

    ${({ bold }) => bold && 'font-weight: bold;'}
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`}
`

export default Text
