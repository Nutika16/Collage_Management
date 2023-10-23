import React from'react';
import SideNav from '../../Components/sidenav';
import  {Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import Template from './Template';
function Home() {
    return (
      <>
      <Box height={70}/>
       <Box sx={{ display: 'flex' }}>
       <SideNav/>
       <Box component="main" sx={{flexGrow: 1,p :3}}>
       <Grid container spacing={2}>
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
          <Typography variant="body2" color="text.secondary"sx={{color:"blue"} }>
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
          <Typography variant="body2" color="blue">
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
          <Typography variant="body2" color="blue">
            0
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <CardContent>
        <div>
      <SchoolIcon/>
        </div>
          <Typography gutterBottom variant="h5" component="div">
            Fee Collection
          </Typography>
          <Typography variant="body2" color="blue">
            $1000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Stack>
    <Card sx={{ maxWidth: 780 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Important Notice
                      </Typography>
                      <Typography variant="body2" color="blue">
                        
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
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