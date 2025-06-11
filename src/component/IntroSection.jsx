import React from 'react'
import CustomSection from './customSection'
import Chip from '@mui/material/Chip';
import { CustomBox, CustomChip, GradientButton } from '@/style/CustomBox.style';
import { Box } from '@mui/material';

const IntroSection = () => {
    return (
        <CustomSection display="flex" border="2px solid green" flexDirection={"column"} alignItems="start" justifyContent={"center"} minHeight="90vh">
            <CustomChip label="Frontend Developer & DevOps Engineer" variant="outlined" />
            <CustomBox mb={"3rem"}>
                <h1 className='typography-main'>
                   Hi, I'm Sudipta Mukherjee.
                </h1>
            </CustomBox>
            <CustomBox mb={"3rem"}>
                <h1 className='typography-sub'>
I build elegant UIs & automate DevOps workflows with a focus on performance and user experience.
                </h1>
            </CustomBox>
            <CustomBox display="flex" alignItems="center" ColumnGap="1rem">
                <GradientButton>
                    See my work
                </GradientButton>
                <GradientButton>
                   Download CV
                </GradientButton>
            </CustomBox>
        </CustomSection>
    )
}

export default IntroSection