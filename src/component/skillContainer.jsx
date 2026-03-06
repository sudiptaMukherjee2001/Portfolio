import { Grid } from '@mui/material'
import React from 'react'
import { skills } from '../utils/skill.utils.js'
import { CustomBox } from '@/style/CustomBox.style'
const SkillContainer = () => {
   
  return (
    <CustomBox className='skillBox-wrapper' >

    <Grid container spacing={2}>
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <Grid item size={{ xs:6,sm:4,md:3, lg:3,xl:4 }} key={index}>
              <CustomBox
                display="flex"
                alignItems="center"
                gap="0.6rem"
                paddingInline="1rem"
                paddingBlock="1rem"
                backgroundColor="rgba(26, 26, 46, 0.6)"
                backdropFilter="blur(12px)"
                border="1px solid rgba(255,255,255,0.1)"
                borderRadius="8px"
              >
                <Icon size={22} />
                <h3>{skill.name}</h3>
              </CustomBox>
            </Grid>
          );
        })}
    </Grid>
    </CustomBox>
  )
}

export default SkillContainer