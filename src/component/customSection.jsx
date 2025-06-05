import { CustomSec } from '@/style/customSection.style'
import React from 'react'

const CustomSection = ({children,w,b,d,fD,aI}) => {
  return (
    <CustomSec
   
    Width={w}
    // Border={b}
    Display={d}
    flexDirection={fD}
    alignItems={aI}
    // justifyContent={jC}
    >{children}</CustomSec>
  )
}

export default CustomSection