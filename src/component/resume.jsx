import React from 'react'
import { CustomBox } from '@/style/CustomBox.style'
import CustomSection from './customSection'
import { Grid } from '@mui/material'
import { education } from '@/utils/education.utils'
import { motion } from "framer-motion";


const Resume = () => {
    return (

        <CustomBox className='rightside-content-wrapper' >
            <Grid container maxWidth={'98%'} spacing={2} >

                <Grid item size={{ xs: 12, sm: 12, lg: 12, xl: 12 }} >
                    <CustomBox mb={"2rem"} fontSize="4xl" gradientLineWidth="10%">
                        <h1 className='typography-main gradient-bar'>
                            Resume
                        </h1>
                    </CustomBox>
                </Grid>


                {/* This grid is showing my Experience start */}
                <Grid item size={{ sm: 6, lg: 6, xl: 5 }} >
                    <motion.div

                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        viewport={{ once: false, amount: 0.75 }}
                    >
                        <CustomBox mb={"2rem"} fontSize="xl">
                            <h1 className='typography-main resume-subHeading-typography'>
                                Work Experience
                            </h1>
                        </CustomBox>
                        <CustomBox
                            display="flex"
                            flexDirection="column"
                            // alignItems="start"
                            paddingInline="1rem"
                            paddingBlock="1rem"
                            backgroundColor='rgba(26, 26, 46, 0.6)'
                            backdropFilter='blur(12px)'
                            border='1px solid rgba(74, 74, 138, 0.3)'
                            padding='20px'
                            borderRadius='8px'
                            className='experience-wrapper'

                        >
                            <h2 className='job-title-typography'>Frontend Developer Intern</h2>
                            <CustomBox
                                display="flex"
                                justifyContent="space-between"
                                mb="0.8rem"
                                marginTop="0.8rem"
                            >
                                <h3 className='company-name-typography'>Stackwit organization </h3>
                                <h3 className='company-duration-typography'>Nov'24 - Feb'25</h3>
                            </CustomBox>
                            <p className='role-details-typography'>
                                Built responsive UIs and secured authentication using NextAuth. Gained hands-on experience across the software development lifecycle
                            </p>
                        </CustomBox>
                    </motion.div>
                </Grid>
                {/* This grid is showing my Experience end */}

                {/* This grid is showing my Education start */}
                <Grid item size={{ sm: 6, lg: 6, xl: 5 }}>
                    <motion.div

                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.75 }}
                    >


                        <CustomBox mb={"2rem"} fontSize="xl">
                            <h1 className='typography-main resume-subHeading-typography'>
                                Education
                            </h1>
                        </CustomBox>
                        {
                            education?.map((education, index) => {
                                return (
                                    <CustomBox
                                        key={index}
                                        display="flex"
                                        flexDirection="column"
                                        // alignItems="start"
                                        paddingInline="1rem"
                                        paddingBlock="1rem"
                                        backgroundColor='rgba(26, 26, 46, 0.6)'
                                        backdropFilter='blur(12px)'
                                        border='1px solid rgba(74, 74, 138, 0.3)'
                                        padding='20px'
                                        borderRadius='8px'
                                        mb="1.5rem"
                                        className='education-wrapper'

                                    >
                                        <h2 className='course-name-typography'>
                                            {
                                                education?.courseName
                                            }

                                        </h2>
                                        <CustomBox
                                            display="flex"
                                            justifyContent="space-between"
                                            mb="0.8rem"
                                            marginTop="0.8rem"
                                        >
                                            <h2 className='institution-name-typography'>
                                                {
                                                    education?.instituionName
                                                }
                                            </h2>
                                            <h3 className='course-duration-typography'>
                                                {
                                                    education?.courseDuration
                                                }
                                            </h3>
                                        </CustomBox>
                                        <p className='specilization-details-typography'>
                                            {
                                                education?.specilization
                                            }
                                        </p>
                                    </CustomBox>
                                )
                            })
                        }
                    </motion.div>
                </Grid>
                {/* This grid is showing my Education end */}

            </Grid>
        </CustomBox>
    )
}

export default Resume