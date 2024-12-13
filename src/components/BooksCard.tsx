
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Book } from '../types/types';

export default function BooksCard({book}:{book:Book}) {

  return (
    <Card sx={{ display: 'flex', justifyContent:"space-between", mb:5, backgroundColor:"purple", color:"white"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {book?.volumeInfo?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: '#8a8a8a' }}
          >
           {book?.volumeInfo?.authors}
          </Typography>
        </CardContent>
      
      </Box>
      <CardMedia 
        component="img"
        sx={{ width: 100 }}
        image={book?.volumeInfo?.imageLinks?.smallThumbnail}
        alt="book cover"
      />
    </Card>
  );
}
