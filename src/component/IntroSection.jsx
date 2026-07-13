import React from 'react'
import CustomSection from './customSection'
import Chip from '@mui/material/Chip';
import { CustomBox, CustomChip, GradientButton } from '@/style/CustomBox.style';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';

const IntroSection = ({onProjectClick}) => {
    const myResume = "/Sudipta_Mukherjee_resume.pdf";

    return (
        <Grid container
          maxWidth={'96%'} margin={'1rem auto'}
        // border={'1px solid orange'}
       
        >
            <CustomBox  className='rightside-content-wrapper small-device-responsiveness'
            
            mb="0.6rem"
            >

                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomChip label="DevOps Engineer & Cloud Enthusiast" variant="outlined" />
                </Grid>
                <Grid item size={{ xs: 12, lg: 12, xl: 12 }} >

                    <CustomBox   fontSize="8xl" gradientLineWidth="20%" className='dev-name small-device-responsiveness'>
                        <h1 className='typography-main gradient-bar'>
                            Hi, I'm Sudipta Mukherjee.
                        </h1>
                    </CustomBox>

                </Grid>
                <Grid item size={{ lg: 12, xl: 12 }} >

                    <CustomBox mb={"1rem"}  fontSize="xl" maxWidth="764px" className='short-text'>
                        <h3 className='typography-sub'>
                          DevOps enthusiast focused on automation, cloud technologies, CI/CD workflows, and building scalable modern web applications.
                        </h3>
                    </CustomBox>

                </Grid>
                <Grid item size={{ lg: 12, xl: 12 }} >


                    <CustomBox display="flex" alignItems="center" ColumnGap="1rem">
                        {/* <Link href={"#contact-section"}> */}
                            <GradientButton onClick={onProjectClick}>
                                See my work
                            </GradientButton>
                        {/* </Link> */}
                        <Link href={myResume} target="_blank" >
                            <GradientButton>
                                Download CV
                            </GradientButton>
                        </Link>
                    </CustomBox>

                </Grid>
            </CustomBox >
        </Grid>
    )
}

export default IntroSection