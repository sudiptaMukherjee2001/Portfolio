'use client';
import { styled } from '@mui/material/styles';
import theme from "../utils/theme.js";
import { Chip } from '@mui/material';
export const CustomBox = styled('div')(({
  Width,
  Height,
  border,
  borderRadius,
  overflow,
  backgroundColor,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  padding,
  marginTop,
  ColumnGap,
  maxHeight,
  minHeight,
  mb,
  fontSize,
  gradientLineWidth,
  maxWidth,
  paraGap,
  paddingInline,
  paddingBlock,
  backdropFilter,
  color,
  boxShadow,
  gap

}) => ({
  width: Width,               // match image width
  height: Height,              // match image 
  border: border,
  borderRadius: borderRadius,
  overflow: overflow == "hidden" ? "hidden" : overflow,
  backgroundColor: backgroundColor,
  display: display,
  flexDirection: flexDirection,
  alignItems: alignItems,
  justifyContent: justifyContent,
  flexWrap: flexWrap,
  gap: gap,
  padding: padding,
  marginTop: marginTop,
  columnGap: ColumnGap,
  maxHeight: maxHeight,
  minHeight: minHeight,
  marginBottom: mb,
  paddingInline: paddingInline,
  paddingBlock: paddingBlock,
  backdropFilter: backdropFilter,
  color: color,
  boxShadow: boxShadow,
  transition: `${boxShadow} 5s ease-in`,
  cursor: 'pointer',

  "&:hover": {
    boxShadow: boxShadow ? theme.shadows.lightHover : "", // Use a predefined shadow or create a custom one
  },



  "& .img": {
    opacity: "0.7"
  },
  "& .project-img": {
    width: "100%",
    borderRadius: '8px',
  },
  "& .typography-main": {
    fontSize: theme.fonts.sizes[fontSize],
    fontWeight: theme.fonts.weights.bold,
    background: theme.gradients.text.heading,
    backgroundClip: 'text',
    // WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  "& .gradient-bar": {

    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '0px',
      bottom: '-21px',
      height: '4px',
      width: gradientLineWidth,
      background: theme.gradients.decorative.line,
      borderRadius: '2px'
    }
  }
  ,
  "& .typography-sub": {
    color: theme.colors.text.blue[10080],
    maxWidth: maxWidth,
    fontSize: theme.fonts.sizes[fontSize],
    marginBottom: paraGap,
  },
  "& .project-title-typography": {
    color: theme.colors.text.primary,
    fontSize: theme.fonts.sizes['xl'],
    marginTop: '0.9rem',
    marginBottom: '0.9rem',
  },
  "& .job-title-typography , & .course-name-typography , & .Contact-Information-typography": {
    color: theme.colors.text.primary,
    fontSize: theme.fonts.sizes['lg'],
    fontWeight: theme.fonts.weights.medium
  },
  "& .company-name-typography , & .institution-name-typography": {
    color: theme.colors.text.blue[500],
    fontSize: theme.fonts.sizes['sm'],
    fontWeight: theme.fonts.weights.medium,

  },
  "& .company-duration-typography , & .course-duration-typography , & .location-typography": {
    color: theme.colors.text.gray[400],
    fontSize: theme.fonts.sizes['sm'],
    fontWeight: theme.fonts.weights.medium,
  },
  "& .role-details-typography , & .specilization-details-typography": {
    color: theme.colors.text.gray[300],
    fontSize: theme.fonts.sizes['sm'],
    fontWeight: theme.fonts.weights.medium,
  },
  "& .contact-info-text": {
    fontSize: theme.fonts.sizes['base'],
  },
  // Responsive styles for larger screens
  '@media screen and (min-width: 2560px)': {
    "&.mainContainer": {
      maxWidth: '2315px',
      margin: '0 auto',
      border: '7px solid blue',
    },
    // 1. left section responsive styles 
    '&.avatarBox': {
      width: '450px',
      height: '450px',
    },
    '& .img': {
      width: '100%',
      height: '100%',
    },
    // 2. Introsection responsive styles
    "&.rightside-content-wrapper": {
      padding: '0px',
      border: '2px solid blue',
      minHeight: '67vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      minWidth: '90%',
      maxWidth: '90%',
    },
    "&.projects-wrapper": {
      maxWidth: '81%',
      minWidth: '81%',
      border: '2px solid green',
    },
    "&.skillBox-wrapper": {
      maxWidth: '80%',
      minWidth: '80%',
      border: '2px solid green',
    },
    "& .contact-info-text": {
      fontSize: theme.fonts.sizes['base'],
    },
  },
  // Responsive styles for smaller screens
  '@media screen and (max-width: 600px)': {
    "& .leftSidebar": {
      display: 'none',
    },
    "&.small-device-responsiveness": {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    "& .typography-main": {
      fontSize: theme.fonts.sizes["6xl"],
      paddingLeft: '1rem',
    },
    "& .gradient-bar": {

      '&::after': {
        content: '""',
        width: '30%',
        left: '1rem',
      }
    },
    "& .typography-sub": {
      // textAlign: 'center',
      paddingLeft: '1rem',
    },
    "&.skillBox-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },
    "&.projects-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },
    "&.experience-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },
    "&.education-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },

    "& .contact-info-text": {
      fontSize: theme.fonts.sizes['sm'],
    },

  },
  // -------------------------------------------------
  // Responsive styles for tablet screens
  '@media screen and  (min-width: 768px) and (max-width: 1023px)': {
    "& .leftSidebar": {
      display: 'none',
    },
    "&.rightside-content-wrapper": {
      padding: '0.8rem',
    },
    "& .typography-main": {
      fontSize: theme.fonts.sizes["8xl"],

      '&::after': {
        content: '""',

      }
    },
    "& .typography-sub": {
      // textAlign: 'center',

    },
    '& .resume-subHeading-typography': {
      fontSize: theme.fonts.sizes['6xl'],

    },
    "&.skillBox-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },
    "&.projects-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },
    "&.experience-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },
    "&.education-wrapper": {
      marginLeft: '0.5rem',
      marginBottom: '1rem',
    },

    "& .contact-info-text": {
      fontSize: theme.fonts.sizes['base'],
    },

  },
  // Responsive styles for laptop 1024 to 1339 px screens
  '@media screen and  (min-width: 1024px) and (max-width: 1339px)': {

    "&.mainContainer": {
      maxWidth: '1280px',
      margin: '0 auto',
      // border: '2px solid blue',
    },


  },
}))


export const GradientButton = styled('button')(({
  width,

  backgroundImage,
  marginTop,
  padding }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontSize: theme.fonts.sizes.base,
    fontWeight: theme.fonts.weights.medium,
    color: theme.colors.text.primary,
    width: width,
    height: '2.25rem', // same as h-9
    padding: padding ? padding : '1.5rem 1rem', // py-6 px-4
    borderRadius: '0.5rem', // rounded-lg
    border: '1px solid rgba(255, 255, 255, 0.1)', // border-white/10
    backgroundImage: !backgroundImage ? 'linear-gradient(to right, #3182ce, #805ad5)' : 'none',
    boxShadow: '0 0 20px rgba(159, 122, 234, 0.2)', // similar to shadow-purple-500/20
    transition: 'all 0.3s ease-in',
    cursor: 'pointer',
    transform: 'none',
    marginTop: marginTop ? marginTop : '1.6rem',

    backgroundColor: theme.colors.background.border.opacity20,

    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #2b6cb0, #6b46c1)',
      transform: 'scale(1.05)',
    },

  }))

export const CustomChip = styled(Chip)(({ padding, height, fontSize, borderradius }) => ({
  backgroundColor: theme.colors.orbs.blue500_10, // bg-blue-500/10
  border: `1px solid ${theme.colors.text.blue[300]}`, // border-blue-400/20 substitute
  backdropFilter: 'blur(8px)', // backdrop-blur-md
  color: theme.colors.text.blue[300], // text-blue-300
  boxShadow: theme.shadows.subtle, // glow: rgba(78, 78, 255, 0.15)
  fontWeight: theme.fonts.weights.medium,
  fontSize: fontSize ? fontSize : theme.fonts.sizes.sm,
  padding: padding ? padding : '0 13px',
  height: height ? height : '37px',
  borderRadius: borderradius ? borderradius : '999px',
}))


