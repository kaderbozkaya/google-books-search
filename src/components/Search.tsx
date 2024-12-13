import * as React from 'react'; 

import Box from '@mui/material/Box'; 

import TextField from '@mui/material/TextField'; 

 

export default function Search({term, searchTerm}:{term:string, searchTerm:(e:React.ChangeEvent<HTMLInputElement>)=>void}) { 

  return ( 

    <Box sx={{ width: 500, maxWidth: '100%', pb:5 }}> 

      <TextField fullWidth label="Search" id="fullWidth" sx={{bgcolor:"#fff"}} color='secondary' 

    value={term} 

    onChange={searchTerm}/> 

    </Box> 

  ); 

} 

 

 

 



 

 

 



 

 