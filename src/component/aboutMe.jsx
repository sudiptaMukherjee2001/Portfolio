import React from 'react'
import CustomSection from './customSection'
import { CustomBox } from '@/style/CustomBox.style'
import SkillContainer from './skillContainer'
import { Grid } from '@mui/material'

const AboutMe = () => {
    return (
        <Grid container
            maxWidth={'98%'}
            // border={'1px solid orange'}
        >
            <CustomBox mb="1rem" className='rightside-content-wrapper'>
                {/* Title of about me section start */}
                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomBox mb={"2rem"} fontSize="4xl" gradientLineWidth="10%">
                        <h1 className='typography-main gradient-bar'>
                            About Me
                        </h1>
                    </CustomBox>
                </Grid>
                {/* Title of about me section end */}
                {/* Description about me start */}
                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomBox fontSize="lg" mb={"1rem"} maxWidth="90%" >
                        <h3 className='typography-sub'  >
                           I love turning ideas into clean, modern UIs and enjoy diving into cloud tools to bring them to life. With a strong interest in frontend and DevOps, I’m always exploring new ways to build smarter and smoother web experiences. Learning is my fuel, and building is my happy place.
                        </h3>
                        {/* <h3 className='typography-sub' >
                            With a strong foundation in modern JavaScript frameworks and cloud technologies, I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of the industry.
                        </h3> */}
                    </CustomBox>
                </Grid>
                {/* Description about me end */}
                 {/* skill part start here */}
                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomBox mb={"2rem"} fontSize="xl">
                        <h1 className='typography-main'>
                            Skills
                        </h1>
                    </CustomBox>
                </Grid>
                {/* all skills */}
            <SkillContainer />
            {/* skill part end here */ }
            </CustomBox>                    
        </Grid>
        // <CustomSection display="flex"  flexDirection={"column"} alignItems="start" minHeight="90vh">
            
        // </CustomSection>
    )
}

export default AboutMe