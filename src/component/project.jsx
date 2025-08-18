import React, { forwardRef } from 'react'
import CustomSection from './customSection'
import { CustomBox, CustomChip, GradientButton } from '@/style/CustomBox.style'
import { Grid } from '@mui/material'
import { projects } from '@/utils/project.utils'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useRef } from "react";
const Project = forwardRef((props, ref) => {
    return (
        <Grid container
            maxWidth={'98%'}
            // border={'1px solid orange'}
            ref={ref}
        >
            <CustomBox className='rightside-content-wrapper' mb="0.8rem">
                {/* Title of  Project section start */}
                <Grid item size={{ lg: 12, xl: 12 }} >
                    <CustomBox mb={"2rem"} fontSize="4xl" gradientLineWidth="10%">
                        <h1 className='typography-main gradient-bar'>
                            My Projects
                        </h1>
                    </CustomBox>
                </Grid>
                {/* Title of Project section end */}
                {/* All Project part start here */}
                <Grid item size={{ xs: 12, sm: 12, lg: 12, xl: 12 }} >
                    <CustomBox className='projects-wrapper'>
                            <Grid container spacing={2} maxWidth="98%"
                            //  border={"3px solid pink"}
                            >


                   
                                {
                                    projects.map((project, index) => (


                                        <Grid item
                                            size={{ sm: 6, lg: 6, xl: 6 }}

                                        >
                                            {/* <motion.div

                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: false, amount: 0.75 }}
                                        > */}
                                            

                                            
                                            <CustomBox
                                                display="flex"
                                                flexDirection="column"
                                                // alignItems="start"
                                                paddingInline="1rem"
                                                paddingBlock="1rem"
                                                backgroundColor='rgba(26, 26, 46, 0.6)'
                                                backdropFilter='blur(12px)'
                                                border='1px solid rgba(255, 255, 255, 0.1)'
                                                padding='16px'
                                                borderRadius='8px'
                                                color='white'
                                                boxShadow='0 0 0 rgba(0,0,0,0)'

                                            >
                                                <Image src={project.imageUrl} alt="demo" width={0} height={200} className='project-img' />
                                                <h2 className='project-title-typography'>{project.title}</h2>
                                                <p className='project-description-typography'>{project.description}</p>
                                                <CustomBox display="flex" flexWrap="wrap" marginTop="0.8rem" mb="2rem" gap="0.6rem">
                                                    {
                                                        project?.tags.map((tag, tagIndex) => (
                                                            <CustomChip key={tagIndex} label={tag} variant="outlined"
                                                                padding="0"
                                                                height="28px"
                                                                // fontSize="0.8rem"
                                                                borderradius="7px"
                                                            />
                                                        ))
                                                    }
                                                </CustomBox>

                                                <CustomBox
                                                    display="flex"
                                                    gap="0.5rem"
                                                >

                                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                                        <GradientButton
                                                            width="fit-content"
                                                            padding="0.5rem 1rem"
                                                            marginTop="0"
                                                            // backgroundImage="no"
                                                            className='project-btn'>
                                                            {project?.btnTxt}
                                                        </GradientButton>
                                                    </Link>
                                                    {
                                                        project?.githubUrl &&

                                                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                            <GradientButton
                                                                width="fit-content"
                                                                padding="0.5rem 1rem"
                                                                marginTop="0"
                                                                // backgroundImage="no"
                                                                className='project-btn'>
                                                                {project?.githubTxt}
                                                            </GradientButton>
                                                        </Link>
                                                    }
                                                </CustomBox>
                                            </CustomBox>
                                           
                                            {/* </motion.div> */}
                                        </Grid>
                                    )
                                    )
                                }
                       


                            </Grid>
                    </CustomBox>
                </Grid>
                {/* All Project part end here */}
            </CustomBox>

        </Grid>


    )
})

export default Project