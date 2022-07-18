import styled from 'styled-components'

const Input = ({ label }) =>
    <Container>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput />
    </Container>

const Container = styled.div`
    width: 60%;
    padding: 0 20%;
`

const StyledLabel = styled.label`
    line-height: 32px;
    display: block;
    font-size: 24px;
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
`

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    line-height: 24px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    background-color: #9945ff54;
    color: white;
    padding: 8px 20px;

    &:hover { background-color: #9945ff72; }
    &:focus { background-color: #9945ff90; }
`

export default Input
