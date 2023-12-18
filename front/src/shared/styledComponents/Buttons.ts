import styled from '@emotion/styled'
import type { CSSProperties } from 'react'

export const ProductPageDataItem = styled.div`
  text-align: left;
  display: flex;
  white-space: nowrap;
  width: 50%;
  min-width: 50%;
  font-size: 15px;
  color: #333;
  align-items: end;
  span {
    width: 100%;
    padding: 0 5px 3px 5px;
    p {
      margin: 0;
      border-bottom: 1px dotted #333;
    }
  }
`

export const Button = styled.div<{
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  bgcolor: CSSProperties['backgroundColor']
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: none;
  width: ${props => (props.width ? props.width + 'px' : 'auto')};
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
  background-color: ${props => props.bgcolor};
  border-radius: 5px;
  font-weight: 800;
  color: white;
  cursor: pointer;
  p {
    margin: 0;
  }
`

export const OutlineButton = styled.div`
  border: 1px dotted #333;
  padding: 5px 10px;
  border-radius: 5px;
`

export const CardButton = styled.button<{ color: CSSProperties['backgroundColor'] }>`
  display: block;
  font-weight: 400;
  font-size: 17px;
  padding: 10px;
  height: 45px;
  margin-left: auto;
  text-align: center;
  border: 1px solid ${props => props.color};
  background-color: ${props => props.color};
  border-radius: 4px;
  transition: 0.2s;
  p {
    color: #fff;
  }
`

export const CountButton = styled.button`
  display: flex;
  width: 40px;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const PageButton = styled.button`
  display: flex;
  width: auto;
  padding: 5px;
  border: none;
  border-radius: 3px;
  background-color: white;
  color: #333;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
