import { Grid } from '@mui/material'
import React from 'react'
import { skills } from '../utils/skill.utils.js'
import { CustomBox } from '@/style/CustomBox.style'
const SkillContainer = () => {
  return (
    <Grid container spacing={2}  maxWidth={"98%"}>
        {skills.map((skill, index) => (
            <Grid item 
        size={{ lg: 3 }} key={index} >
            <CustomBox
            display="flex" 
            alignItems="center"
            paddingInline="1rem" 
            paddingBlock="1rem" 
            backgroundColor='rgba(26, 26, 46, 0.6)'
            backdropFilter='blur(12px)'
            border='1px solid ${theme.colors.background.border.opacity30}'
            padding='16px'
            borderRadius='8px'
            color=' theme.colors.text.primary'
            boxShadow='0 0 0 rgba(0,0,0,0)'
            >
                <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
                <h3>{skill.name}</h3>
            </CustomBox>
            </Grid>
        ))}
    </Grid>
  )
}

export default SkillContainer