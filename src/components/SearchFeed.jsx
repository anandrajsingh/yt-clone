import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

export default function Feed() {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant='h4' fontWeight={900} mb={2} sx={{ color: "white" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}
