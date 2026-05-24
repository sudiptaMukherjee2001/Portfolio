'use client';
import { styled } from '@mui/material/styles';
import theme from "../utils/theme.js";
import { Typography } from '@mui/material';
export const CustomSec = styled('section')(({ paddingTop,minHeight, Display, justifyContent, alignItems, flexDirection, Height, Width, Border }) => ({
    // width: Width,
    height: Height,
    border: Border,
    display: Display,
    flexDirection: flexDirection,
    alignItems: alignItems,
    paddingBlock: "1rem",
    justifyContent: justifyContent,
    minHeight: minHeight,
    paddingTop: paddingTop,
      paddingBlock: "1rem",
    "& .myName": {
        position: 'relative',
        display: 'inlineBlock',
        fontWeight: 'bold',
        marginTop: '1.6rem',
        fontSize: theme.fonts.sizes['4xl'],
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '45px',
            bottom: '-21px',
            height: '4px',
            width: '70%',
            background: theme.gradients.decorative.line,
            borderRadius: '2px'
        }
    },
    "& .subText": {
        color: theme.colors.text.blue[10080],
        fontSize: theme.fonts.sizes.lg,
        textAlign: "center",
    },
    // Responsive styles for larger screens
    '@media screen and (min-width: 2560px)': {
        // 1. Introsection 
        "& .myName": {
            position: 'relative',
            display: 'inlineBlock',
            fontWeight: 'bold',
            marginTop: '1.6rem',
            fontSize: theme.fonts.sizes['2xl'],

        }
    ,
    "& .subText": {
        color: theme.colors.text.blue[10080],
        fontSize: theme.fonts.sizes['2xl'],
        textAlign: "center",
    },
    // 2.Introsection responsive styles 
    "& .introSection":{
        padding: "4rem",
        border:'1px solid green'
     
    }
    
}
    
}))




