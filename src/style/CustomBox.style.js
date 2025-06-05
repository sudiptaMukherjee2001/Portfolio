'use client'; 
import { styled } from '@mui/material/styles';
import theme from "../utils/theme.js";
export const CustomBox=styled('div')(({
    Width,
    Height,
    border,
    borderRadius,
    overflow,
    backgroundColor,
    display,
    flexDirection,
    alignItems,
    padding,
    marginTop,
    ColumnGap

})=>({
    width:Width,               // match image width
  height: Height,              // match image 
  border: border,
  borderRadius:borderRadius,        
  overflow: overflow,
  backgroundColor:backgroundColor,
  display:display,
  flexDirection:flexDirection,
  alignItems:alignItems,
  padding:padding,
  marginTop:marginTop,
  columnGap:ColumnGap,
"&.img":{
    opacity:"0.7"
}
    
}))


export const GradientButton =styled('button')(({})=>({
 display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  fontSize: theme.fonts.sizes.base,
  fontWeight: theme.fonts.weights.medium,
  color: theme.colors.text.primary,
  width: '100%',
  height: '2.25rem', // same as h-9
  padding: '1.5rem 1rem', // py-6 px-4
  borderRadius: '0.5rem', // rounded-lg
  border: '1px solid rgba(255, 255, 255, 0.1)', // border-white/10
  backgroundImage: 'linear-gradient(to right, #3182ce, #805ad5)',
  boxShadow: '0 0 20px rgba(159, 122, 234, 0.2)', // similar to shadow-purple-500/20
  transition: 'all 0.3s ease-in',
  cursor: 'pointer',
  transform:'none',
  marginTop:'1.6rem',

  '&:hover': {
    backgroundImage: 'linear-gradient(to right, #2b6cb0, #6b46c1)',
    transform: 'scale(1.05)',
  },

}))