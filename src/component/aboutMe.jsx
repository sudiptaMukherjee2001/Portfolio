import React from 'react'
import CustomSection from './customSection'
import { CustomBox } from '@/style/CustomBox.style'
import SkillContainer from './skillContainer'

const AboutMe = () => {
    return (
        <CustomSection display="flex"  flexDirection={"column"} alignItems="start" minHeight="90vh">

            <CustomBox mb={"2rem"} fontSize="4xl" gradientLineWidth="50%">
                <h1 className='typography-main'>
                    About Me
                </h1>
            </CustomBox>
            {/* Description about me start */}
            <CustomBox fontSize="sm" maxWidth="90%" paraGap="1.5rem" >
                <h3 className='typography-sub'  >
                    I build elegant UIs & automate DevOps workflows with a focus on performance and user experience.I'm a passionate developer with over 5 years of experience spanning both frontend development and DevOps engineering. My expertise lies in creating intuitive user interfaces while also building robust infrastructure to support them.
                </h3>
                <h3 className='typography-sub' >
                    With a strong foundation in modern JavaScript frameworks and cloud technologies, I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of the industry.
                </h3>
            </CustomBox>
            {/* Description about me end */}
            {/* skill part start here */}
            <CustomBox mb={"2rem"} fontSize="xl">
                <h1 className='typography-main'>
                    Skills
                </h1>
            </CustomBox>
            {/* all skills */}
            <SkillContainer />
            {/* skill part end here */}
        </CustomSection>
    )
}

export default AboutMe