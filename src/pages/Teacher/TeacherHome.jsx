import React from'react';
import  {Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import TeacherDasboard from './TeacherDashboard';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
function TeacherHome() {
    return (
      <>
      <Box height={70}/>
       <Box sx={{ display: 'flex' }}>
       <TeacherDasboard/>
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
             Classes Students
          </Typography>
          <Typography variant="body2" color="blue">
            12
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
            Total Lessons
          </Typography>
          <Typography variant="body2" color="blue">
            10
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
             Test taken
          </Typography>
          <Typography variant="body2" color="blue">
            15
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
            total Time
          </Typography>
          <Typography variant="body2" color="blue">
            30hrs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Stack>
    <Card sx={{ maxWidth: 780}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body2" color="black">
            <AnnouncementOutlinedIcon/>
            <h1>Notice</h1>
            NO NEW NOTICES TO SHOW RIGHT NOW
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
  
  export default TeacherHome;