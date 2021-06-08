import React from 'react'
import styled from 'styled-components'
import { TYPE } from '../../theme'

const StyledSwapButton = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.text2};
`

export default function SwapMenuButton() {
  return (
    <StyledSwapButton>
      <TYPE.black fontWeight={500}>Swap</TYPE.black>
    </StyledSwapButton>
  )
}
