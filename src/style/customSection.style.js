'use client'; 
import { styled } from '@mui/material/styles';
import theme from "../utils/theme.js";
import { Typography } from '@mui/material';
export const CustomSec=styled('section')(({Display,justifyContent,alignItems,flexDirection,Height,Width,Border})=>({
    width: Width,
    height: Height,
    border:Border,
    display: Display,
    flexDirection: flexDirection,
    alignItems: alignItems,
    paddingBlock:"1rem",
    // justifyContent: justifyContent,
    "& .myName": {
         position: 'relative',
        display: 'inlineBlock',
        fontWeight: 'bold',
        marginTop: '1.6rem',
  '&::after': {
  content: '""',
  position: 'absolute',
  left: '53px',
  bottom: '-21px',    
  height: '4px',
  width: '49%',
  background: theme.gradients.decorative.line,
  borderRadius: '2px'
  }
    },
    "& .subText": {
        color:theme.colors.text.blue[10080],
        fontSize:theme.fonts.sizes.sm,
        textAlign:"center",
    }
    
}))




