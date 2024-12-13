import { Box, Container, Typography } from "@mui/material" 

import Navbar from "./components/Navbar" 

import Search from "./components/Search" 

import BooksCard from "./components/BooksCard" 

import useFetchData from "./hooks/useFetchData" 

import Loader from "./components/Loader" 

 

 

const App=()=> { 

const {data,error,loading,term,setTerm}=useFetchData() 

if(error){ 

  return error.message 

} 

const searchTerm=(e:React.ChangeEvent<HTMLInputElement>)=> { 

  setTerm(e.target.value) 

} 

  return ( 

    <> 

  <Navbar/> 

  <Container maxWidth="sm"> 

    <Box sx={{bgcolor:"#fafafa", minHeight:"100vh", padding:"12px 30px", mt:2}}> 
    <Typography variant="h2">Google Books</Typography> 

<Search term={term} searchTerm={searchTerm}/> 

{loading ? <Loader/> : 

data?.map((book)=> <BooksCard book={book} key={book.id}/>)} 



</Box> 

</Container> 

</> 

) 

} 



export default App 