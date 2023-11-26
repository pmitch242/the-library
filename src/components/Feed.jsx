import { useState, useEffect } from 'react';

import { Box, Typography, Stack } from "@mui/material";

import { Sidebar } from "./index";

const Feed = () => {
    return (
        <Stack
        sx={{ flexDirection:{ sx:'column', md:'row' } }}>
            <Box
            sx={{ height: {sx: 'auto', md:'90vh'}, 
            backgroundColor: '#000',
            borderRight: '1px, solid, #3d3d3d', 
            px: {sx : 0, md:2},
            width: {md: '18vw'} 
        }}
            >
                Feed
            </Box>
        </Stack>
    )
}

export default Feed
