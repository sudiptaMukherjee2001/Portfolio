import React from 'react'
import CustomSection from './customSection'
import Chip from '@mui/material/Chip';
import { CustomBox, CustomChip, GradientButton } from '@/style/CustomBox.style';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';

const IntroSection = ({onProjectClick}) => {
    const myResume = "/Sudipta-Resume.pdf";

    return (
        <Grid container
            maxWidth={'98%'}
        // border={'1px solid orange'}
        >
            <CustomBox className='rightside-content-wrapper small-device-responsiveness' paddingBlock="2rem">

                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomChip label="Frontend Developer & DevOps Engineer" variant="outlined" />
                </Grid>
                <Grid item size={{ xs: 12, lg: 12, xl: 12 }} >

                    <CustomBox mb={"3rem"} fontSize="7xl" gradientLineWidth="10%">
                        <h1 className='typography-main gradient-bar'>
                            Hi, I'm Sudipta Mukherjee.
                        </h1>
                    </CustomBox>

                </Grid>
                <Grid item size={{ lg: 12, xl: 12 }} >

                    <CustomBox mb={"3rem"} fontSize="xl" maxWidth="764px" className='short-text'>
                        <h3 className='typography-sub'>
                            I build elegant UIs & automate DevOps workflows with a focus on performance and user experience.
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