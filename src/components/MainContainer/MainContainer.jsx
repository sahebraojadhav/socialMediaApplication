import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PostCard from '../PostCard'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  return (
    <Box display="flex" justifyContent="center" sx={{ width: '100%', mt:'3rem' }}>
      <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}>
        <Grid xs={0} md ={3}>
            { /* Users */}
          <Item>1</Item>
        </Grid>
        <Grid 
         container
         alignItems={"center"}
         justifyContent={"center"}
         direction={"column"} xs={12} md={9}
        >
           <PostCard/>
           <PostCard/>
           <PostCard/>
           <PostCard/>
           
        </Grid>
       
      </Grid>
    </Box>
  );
}