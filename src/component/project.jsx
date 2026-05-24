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
                            <Grid container spacing={2} maxWidth="100%"
                            //  border={"3px solid pink"}
                            >


                   
                                {
                                    projects.map((project, index) => (


                                        <Grid item
                                            size={{ sm: 6, lg: 6, xl: 6 }}
                                            
                                        key={index}
                                        

                                        >
                                           
                                            

                                            
                                            <CustomBox
                                              
                                                display="flex"
                                                flexDirection="column"
                                                // height="100%"
                                                justifyContent="space-between"
                                                paddingInline="1rem"
                                                paddingBlock="1rem"
                                                backgroundColor="rgba(26, 26, 46, 0.6)"
                                                backdropFilter="blur(12px)"
                                                border="1px solid rgba(255, 255, 255, 0.1)"
                                                borderRadius="8px"
                                                className='project-card'

                                            >
                                                {project?.imageUrl ?
                                                <CustomBox className="project-image-wrapper">
                                                    <Image
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                    fill
                                                    className="project-img"
                                                    />
                                                </CustomBox>
                                                :null

                                                }
                                                <h2 className='project-title-typography'>{project.title}</h2>
                                               <p
                                                className='project-description-typography'
                                                dangerouslySetInnerHTML={{ __html: project.description }}
                                            />
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
                                                        flexWrap="wrap"
                                                    >

                                                        {/* Github Button */}
                                                        {project?.githubUrl && (
                                                            <Link
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <GradientButton
                                                                    width="fit-content"
                                                                    padding="0.5rem 1rem"
                                                                    marginTop="0"
                                                                    className='project-btn'
                                                                >
                                                                    {project?.githubTxt || "Github"}
                                                                </GradientButton>
                                                            </Link>
                                                        )}

                                                        {/* Live / Normal URL Button */}
                                                        {project?.url && (
                                                            <Link
                                                                href={project.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <GradientButton
                                                                    width="fit-content"
                                                                    padding="0.5rem 1rem"
                                                                    marginTop="0"
                                                                    className='project-btn'
                                                                >
                                                                    {project?.btnTxt || "Live Demo"}
                                                                </GradientButton>
                                                            </Link>
                                                        )}

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