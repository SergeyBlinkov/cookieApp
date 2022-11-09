import styled from 'styled-components'

export const InputStyled = styled.input`
    width:100%;
    background: #FFD748;
    height: 21px !important;
    -webkit-appearance: none;
    border-radius: 10px;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 21px;
      height: 21px;
      cursor: pointer;
      border-radius: 50%;
      background: #104987;
    }
  `
export const ButtonStyled = styled.button`
  width: 100%;
  height: 44.44px;
  background: #FFD748;
  border-radius: 20px;
  border: none;
  cursor:pointer;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
`

export const Ul = styled.ul`
  margin: 18px 0 2px 0;
  font-family: 'Calibri';
  font-weight: 700;
  font-size: 24px;
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: row;
  text-decoration: none;
  list-style: none;
  justify-items: center;
  justify-content: space-between;
  li {
    width: 25px;
    text-align: center;
  }
`
export const H3 = styled.h3`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 16px;
`