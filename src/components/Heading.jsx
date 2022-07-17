import styled from 'styled-components'

const Heading = ({ type, children }) => type === 'small' ?
    <SmallHeading>{children}</SmallHeading> :
    <BigHeading>{children}</BigHeading>

const commonHeadingProps = `
    font-family: Inter, sans-serif;
    color: whirete;
`

const BigHeading = styled.h1`
    ${commonHeadingProps}
    line-height: 72px;
    font-size: 64px;
    letter-spacing: -3px;
    color: white;
    margin: 0;
`

const SmallHeading = styled.h2`
    ${commonHeadingProps}
    line-height: 40px;
    font-size: 32px;
    letter-spacing: -2px;
    color: white;
    margin: 0;
`

export default Heading