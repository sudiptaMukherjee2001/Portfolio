import React, { forwardRef } from 'react'
import { CustomBox } from '@/style/CustomBox.style'
import CustomSection from './customSection'
import { Grid } from '@mui/material'
import { education } from '@/utils/education.utils'
import RoomSharpIcon from '@mui/icons-material/RoomSharp';  
import EmailIcon from '@mui/icons-material/Email';
import CustomForm from './customForm'


const ContactFrom = forwardRef((props,ref) => {
    
    return (
        <CustomBox className='rightside-content-wrapper'
        ref={ref}
        >
            <Grid container maxWidth={'98%'} justifyContent={"space-between"} >

                <Grid item size={{ xs: 11, sm: 12, lg: 12, xl: 12 }} >
                    <CustomBox mb={"2rem"} fontSize="4xl" gradientLineWidth="10%">
                        <h1 className='typography-main gradient-bar'>
                            Let's Connect
                        </h1>
                    </CustomBox>
                </Grid>

                {/* This grid is showing my contact-info start */}
                <Grid item size={{ sm: 5, lg: 5, xl: 5 }} >
                    <CustomBox mb={"1rem"} fontSize="xl">
                        <h1 className='typography-main contact-info-text'>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or through social media
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
                        
                        borderRadius='8px'
                        className='contactCard-wrapper'
                        mb="1rem"

                    >
                        <h2 className='Contact-Information-typography'>
                           Contact Information
                        </h2>
                        {/* Contact info details start */}
                        {/* location  info start */}
                        <CustomBox
                            display="flex"
                            // justifyContent="space-between"
                            alignItems="center"
                            ColumnGap="0.3rem"
                            mb="0.8rem"
                            marginTop="0.8rem"
                            

                        >
                            <CustomBox display="flex" alignItems="center" >
                                <RoomSharpIcon />
                            </CustomBox>
                            <CustomBox className='location-typography' >
                               Bangalore, India
                            </CustomBox>
                        </CustomBox>
                        {/* location info end */}

                        {/*Email info start  */}
                        <CustomBox
                            display="flex"
                            // justifyContent="space-between"
                            alignItems="center"
                            ColumnGap="0.3rem"
                            // mb="0.8rem"
                            // marginTop="0.8rem"

                        >
                            <CustomBox display="flex" alignItems="center" >
                                <EmailIcon  />
                            </CustomBox>
                            <CustomBox className='location-typography' >
                               work.sudipta001@gmail.com
                            </CustomBox>
                        </CustomBox>
                        {/* Email info end  */}
                         {/* Contact info details end */}
                       
                    </CustomBox>
                </Grid>
                {/* This grid is showing contact-info end */}

                {/* This grid is showing contant form start */}
                <Grid item size={{ sm: 6, lg: 6, xl: 5 }}>
                    
                  
                                <CustomBox
                                   
                                    display="flex"
                                    flexDirection="column"
                                    // alignItems="start"
                                    paddingInline="1rem"
                                    paddingBlock="1rem"
                                    // backgroundColor='rgba(255, 255, 255, 0.05)'
                                    backgroundColor='rgba(0, 0, 0, 0.3) '
                                    backdropFilter='blur(12px)'
                                    border='1px solid rgba(255, 255, 255, 0.1)'
                                    padding='20px'
                                    borderRadius='8px'
                                    mb="1rem"
                                   className='contactCard-wrapper'

                                >
                                   <CustomForm />
                                </CustomBox>
                           
                    

                </Grid>
                {/* This grid is showing contant form end */}
            </Grid>
        </CustomBox>
    )
})

export default ContactFrom