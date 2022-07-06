import styled from 'styled-components'

const Button = ({ onClick, children, disabled }) =>
  <StyledButton
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </StyledButton>

const StyledButton = styled.button`
  font-size: 16px;
  height: 47px;
  padding: 5px 30px;
  line-height: 24px;
  font-family: Inter,sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  background: hsla(328, 75%, 45%, 1);
  background: linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C81D77", endColorstr="#6710C2", GradientType=1 );
  border-radius: 10px;
  border: none;
  cursor: copy;

  &:disabled {
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(134,134,134,1) 100%);
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    margin: 0;
  }
`

export default Button