import React from 'react'
import CustomSection from './customSection'
import Chip from '@mui/material/Chip';
import { CustomBox, CustomChip, GradientButton } from '@/style/CustomBox.style';
import { Box, Grid } from '@mui/material';

const IntroSection = () => {
    return (
        <Grid container  maxWidth={'98%'} 
        //border={'1px solid orange'}
        >
            <CustomBox  className='introSection'>

            <Grid item size={{ lg: 12,xl:12 }} >
            <CustomChip label="Frontend Developer & DevOps Engineer" variant="outlined" />
            </Grid>
            <Grid item size={{ lg: 12,xl:12 }} >

            <CustomBox mb={"3rem"} fontSize="7xl" gradientLineWidth="10%">
                <h1 className='typography-main'>
                    Hi, I'm Sudipta Mukherjee.
                </h1>
            </CustomBox>

            </Grid>
            <Grid item size={{ lg: 12,xl:12 }} >

            <CustomBox mb={"3rem"} fontSize="2xl" maxWidth="764px">
                <h1 className='typography-sub'>
                    I build elegant UIs & automate DevOps workflows with a focus on performance and user experience.
                </h1>
            </CustomBox>

            </Grid>
            <Grid item size={{ lg: 12,xl:12 }} >

            
            <CustomBox display="flex" alignItems="center" ColumnGap="1rem">
                <GradientButton>
                    See my work
                </GradientButton>
                <GradientButton>
                    Download CV
                </GradientButton>
            </CustomBox>

            </Grid>
         </CustomBox >
        </Grid>
    )
}

export default IntroSection