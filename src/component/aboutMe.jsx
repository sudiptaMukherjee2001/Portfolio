import React from 'react'
import CustomSection from './customSection'
import { CustomBox } from '@/style/CustomBox.style'
import SkillContainer from './skillContainer'
import { Grid } from '@mui/material'
import { motion } from "framer-motion";
const AboutMe = () => {
    return (
        <Grid container
            maxWidth={'96%'} 
            margin={'0 auto'}
            // border={'1px solid orange'}
        >
            <CustomBox mb="0.8rem" className='rightside-content-wrapper'>
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
                    <CustomBox fontSize="lg" mb={"1rem"} maxWidth="95%" >
                        <h3 className='typography-sub'  >
                           I’m passionate about building reliable, scalable, and automated solutions in the cloud. My journey started with frontend development, but over time I became deeply interested in DevOps, cloud infrastructure, and deployment automation. I enjoy working with AWS, Docker, Kubernetes, Terraform, GitHub Actions, and Linux to streamline development workflows and deliver applications efficiently. I’m constantly learning, experimenting, and building projects that help me grow as a DevOps and Cloud Engineer.
                        </h3>
                        {/* <h3 className='typography-sub' >
                            With a strong foundation in modern JavaScript frameworks and cloud technologies, I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of the industry.
                        </h3> */}
                    </CustomBox>
                </Grid>
                {/* Description about me end */}
                {/* skill part start here */}
                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomBox mb={"2rem"} fontSize="4xl">
                        <h1 className='typography-main'>
                            Skills
                        </h1>
                    </CustomBox>
                </Grid>
                {/* all skills */}
                {/* <motion.div
                 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.75 }}
                > */}
                    <SkillContainer />
                {/* </motion.div> */}
                {/* skill part end here */}
            </CustomBox>
        </Grid>
        // <CustomSection display="flex"  flexDirection={"column"} alignItems="start" minHeight="90vh">

        // </CustomSection>
    )
}

export default AboutMe