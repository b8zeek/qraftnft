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
    line-height: 56px;
    font-size: 48px;
    letter-spacing: -3px;
    margin: 0;
`

const SmallHeading = styled.h2`
    ${commonHeadingProps}
    line-height: 40px;
    font-size: 32px;
    letter-spacing: -2px;
    margin: 0;
`

export default Heading