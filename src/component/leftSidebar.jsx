import React from 'react'
import CustomSection from './customSection'
import Image from 'next/image';
import { CustomBox, CustomBtn, GradientButton } from '@/style/CustomBox.style.js'
import { Box } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link';
const LeftSidebar = () => {
  return (
    <CustomSection   display='flex' flexDirection='column' alignItems='center' justifyContent="space-around" maxHeight="100vh" minHeight="100vh" border="3px solid blue">
      {/* Avatar part start */}
    <CustomBox
      Width="200px"
       Height="200px" 
       border="2px solid #4a4a8a" 
       borderRadius= '50%'
      overflow="hidden" 
      backgroundColor="rgba(168, 85, 247, 0.2)"
      className='avatarBox'>

        <Image src="/myimg.jpeg" alt="demo" width={200} height={200} className='img' />
    </CustomBox>
      {/* Avatar part end */}
     
    <CustomBox display="flex" flexDirection="column" alignItems="center" padding="1rem">


      {/* Name part start */}
        <Box mb={"2rem"}>
            <h2 className='myName'>
              Sudipta Mukherjee

             </h2> 
        </Box>
      {/* Name part end */}


      {/* Sub text part start */}
      <Box padding="0.5rem" borderRadius="8px">
       <h3 className='subText' >
        Frontend Developer & DevOps Engineer

      </h3>
      </Box>
      {/* Sub text part end */}
      
      {/* Location part start */}
      <Box display="flex" alignItems="center" marginTop="1rem">
        <LocationPinIcon style={{ color: '#4a4a8a', marginRight: '0.5rem' }} />
        <span className='subText'>Bangalore, India</span>   
      </Box>
      {/* Location part end */}


      {/* Email part start */}
        <Box display="flex" alignItems="center" marginTop="1rem">
        <AlternateEmailIcon style={{ color: '#4a4a8a', marginRight: '0.5rem' }} />
        <span className='subText'>work.sudipta001@gmail.com</span>   
      </Box>
      {/* Email part end */}


      {/* Social Media start*/}
      <CustomBox display="flex" alignItems="center" ColumnGap="1.3rem" marginTop="2rem">
        <Link href="https://github.com/sudiptaMukherjee2001/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: '#4a4a8a' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github tempo-3368b40c-7923-5e6e-a921-f622af940cc9" tempoelementid="tempo-3368b40c-7923-5e6e-a921-f622af940cc9"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </Link>
        <Link href="https://github.com/sudiptaMukherjee2001/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: '#4a4a8a' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github tempo-3368b40c-7923-5e6e-a921-f622af940cc9" tempoelementid="tempo-3368b40c-7923-5e6e-a921-f622af940cc9"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </Link>
        <Link href="https://github.com/sudiptaMukherjee2001/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: '#4a4a8a' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github tempo-3368b40c-7923-5e6e-a921-f622af940cc9" tempoelementid="tempo-3368b40c-7923-5e6e-a921-f622af940cc9"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </Link>
      </CustomBox>
      {/* Social Media end*/}

      <GradientButton width="100%">
        Let's Work Together
      </GradientButton>


    </CustomBox>
      
    

    </CustomSection>
  )
}

export default LeftSidebar