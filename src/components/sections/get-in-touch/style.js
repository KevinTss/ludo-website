import React from "react"
import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const GetInTouchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  padding: 50px;
  max-width: 50%;
  margin: 100px auto;
  box-shadow: 0px 0px 80px 0px ${COLOR.CLOUD_BURST}55;
  background-color: white;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  position: relative;

  > label {
    margin-bottom: 5px;
  }
`

export const SuccessContainer = styled(({ isVisible, ...props }) => (
  <div {...props} />
))`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${COLOR.SHAMROCK}22;
  border-radius: 20px;
  transition: all 0.3s ease;

  ${({ isVisible }) => {
    if (isVisible) {
      return `
        height: auto;
        padding: 20px;
        border: 2px solid ${COLOR.SHAMROCK}AA;
        visibility: visible;
        margin-bottom: 20px;
        `
    }

    return `
      height: 0;
      padding: 0;
      border: 0;
      visibility: hidden;
    `
  }}

  > p {
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
    color: ${COLOR.SHAMROCK};

    > span {
      font-size: 2rem;
      line-height: 150%;
    }
  }
`

export const SuccessCloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  cursor: pointer;
`
