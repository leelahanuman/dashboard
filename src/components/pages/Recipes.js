import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


 const Recipes = () => {
  return (
    <div>
        <div className="recipes mt-5 p-5 bg-success rounded">
        <h3>Recipe time elapsed</h3> 
        <ProgressBar completed={60} />
        <span>0 Hrs</span>
        <span>160 Hrs</span>
        <span>300 Hrs</span>
        </div>

    <Box sx={{ width: '100%',color: '#ff5722' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  

        </div>
  )
}
export default Recipes;
