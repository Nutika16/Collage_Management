import React from'react';
import SideNav from '../../Components/sidenav';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';

function Home() {
    return (
      <>
      <Box height={70}/>
       <Box sx={{ display: 'flex' }}>
       <SideNav/>
       <Box component="main" sx={{flexGrow: 1,p :3}}>
       <Grid container spacing={20}>
        <Grid item xs={8}>
        <Stack spacing={2} direction = 'row'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <div>
      <PeopleAltIcon/>
          </div>
          <Typography gutterBottom variant="h5" component="div">
          Total Students
          </Typography>
          <Typography variant="body2" color="text.secondary"sx={{color:"red"} }>
            0
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <div>
      <SchoolIcon/>
        </div>
          <Typography gutterBottom variant="h5" component="div">
            Total Classes
          </Typography>
          <Typography variant="body2" color="red">
            0
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <div>
      <SchoolIcon/>
        </div>
          <Typography gutterBottom variant="h5" component="div">
            Total Teachers
          </Typography>
          <Typography variant="body2" color="red">
            0
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 1200 }}>
      <CardActionArea>
        <CardContent>
        <div>
      <SchoolIcon/>
        </div>
          <Typography gutterBottom variant="h5" component="div">
            Fee Collection
          </Typography>
          <Typography variant="body2" color="red">
            $1000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Stack>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
      <Box height={150}/>
      <Grid container spacing={20}>
        <Grid item xs={8}>
        <Card sx={{ maxWidth: 1100 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Important Notice
                      </Typography>
                      <Typography variant="body2" color="black">
                      <AnnouncementOutlinedIcon/>
                      NO NEW NOTICES TO SHOW RIGHT NOW
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
       </Box>
       </Box>
      
      </>
    );
  }
  
  export default Home;