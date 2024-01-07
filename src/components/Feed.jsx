import { useState, useEffect } from 'react';

import { Box, Typography, Stack } from "@mui/material";

import { SideBar } from "./index";

const Feed = () => {
    return (
        <Stack
        sx={{ flexDirection:{ sx:'column', md:'row' } }}>
            <Box
            sx={{ height: {sx: 'auto', md:'90vh'}, 
            backgroundColor: '#000',
            borderRight: '1px, solid, #3d3d3d', 
            px: {sx : 0, md:'24px'},
            py: '30px',
            width: {md: '18vw'} 
        }}
            >
                <SideBar></SideBar>
            </Box>
        </Stack>
    )
}

export default Feed
