import React from 'react'
import { TYPE } from '../../theme'
import styled from 'styled-components'
import TreasureChest from '../../assets/images/023-chest.svg'

const SwapElement = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 12px 1.5rem 0px 1.5rem;
  margin-bottom: 2rem;
`
const SwapTitleHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const TreasureIcon = styled.img`
  height: 46px;
  margin-right: 1rem;
`
export default function SwapStakeButtons() {
  return (
    <SwapElement>
      <SwapTitleHolder>
        <TreasureIcon src={TreasureChest} />
        <TYPE.black fontWeight={500} fontSize={32}>
          Treasure Swap
        </TYPE.black>
      </SwapTitleHolder>
      <TYPE.main>Swap your ETH or other Ethereum-based coins to audited &amp; verified coins.</TYPE.main>
    </SwapElement>
  )
}
