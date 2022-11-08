import Button from '@mui/material/Button';
import {Add,Send} from '@mui/icons-material';
import { styled, Typography } from '@mui/material';


function App() {
  //custozime button
  const BlueButton= styled(Button)({
      backgroundColor:"skyblue",
      color:"#888",
      margin:5,
      "&:hover":{
        backgroundColor:"lightblue"
      }
    
  })
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='secondary' size='small' startIcon={<Add />}>Contained</Button>
      <Button variant="outlined" color="success" startIcon={<Send />}>Outlined</Button>
      <Typography variant="h3">
        h1. Heading
      </Typography>;
      <Button 
      variant="contained" sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        }
      }}
      >Text</Button>
      
      <BlueButton>testt</BlueButton>

    </div>
    
  );
}

export default App;
