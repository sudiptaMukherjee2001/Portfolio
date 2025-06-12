import { CustomSec } from '@/style/customSection.style'
import React from 'react'

const CustomSection = ({children,minHeight,border,display,flexDirection,alignItems,justifyContent}) => {
  return (
    <CustomSec
   
    minHeight={minHeight}
    Border={border}
    Display={display}
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
    >{children}</CustomSec>
  )
}

export default CustomSection