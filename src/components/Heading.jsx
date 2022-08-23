import styled from 'styled-components'

const Heading = ({ type, marginBottom, children, fontFamily, color }) =>
    type === 'small' ? (
        <SmallHeading marginBottom={marginBottom} fontFamily={fontFamily} color={color}>
            {children}
        </SmallHeading>
    ) : type === 'smallest' ? (
        <SmallestHeading marginBottom={marginBottom} fontFamily={fontFamily} color={color}>
            {children}
        </SmallestHeading>
    ) : (
        <BigHeading marginBottom={marginBottom} fontFamily={fontFamily} color={color}>
            {children}
        </BigHeading>
    )

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

    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
    ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
    ${({ color }) => color && `color: ${color};`}
`

const SmallHeading = styled.h2`
    ${commonHeadingProps}
    line-height: 40px;
    font-size: 32px;
    letter-spacing: -2px;
    color: white;
    margin: 0;

    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
    ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
    ${({ color }) => color && `color: ${color};`}
`

const SmallestHeading = styled.h3`
    ${commonHeadingProps}
    line-height: 24px;
    font-size: 16px;
    letter-spacing: -1px;
    color: white;
    margin: 0;

    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
    ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
    ${({ color }) => color && `color: ${color};`}
`

export default Heading
