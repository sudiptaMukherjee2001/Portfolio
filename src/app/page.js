  import React from 'react';
  import Grid from '@mui/material/Grid';
  import LeftSidebar from '@/component/leftSidebar';
import { CustomBox } from '@/style/CustomBox.style';
import IntroSection from '@/component/IntroSection';
import AboutMe from '@/component/aboutMe';
import Project from '@/component/project';
import Resume from '@/component/resume';

  const page = () => {
    return (
      <CustomBox className='mainContainer' >
      <Grid 
        container 
       alignItems={'center'}
       justifyContent={'center'}
      //  border={'1px solid orange'}
      >
        {/* Left side bar start*/}
        <Grid 
          item 
          size={{ md:3,lg: 3}}
          className='leftSidebar'
        //  sx={{ border: '2px solid yellow' }}
        >
          <LeftSidebar />
        </Grid>
        {/* Left side bar end*/}
        {/* Right side content most outer box*/}
        <Grid 
          item 
        size={{ md:8, lg: 9 }}
          // sx={{ border: '2px solid yellow' }}
        >
          {/* Right side content  outer box start .. All the section should be inside this outer box*/}
          <CustomBox
          // border="2px solid red"
          maxHeight="100vh"
          minHeight="100vh"
          overflow="auto"
       //   border="1px solid red"
          >
            <IntroSection/>
            <AboutMe/>
            <Project/>
            <Resume/>
            {/* <IntroSection/> */}
          </CustomBox>
          {/* Right side content  outer box end */}

        </Grid>
        {/* Right side content most outer box*/}
      </Grid>
      </CustomBox>
    );
  };

  export default page;
