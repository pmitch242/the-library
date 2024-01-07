import { useState, useEffect } from 'react';

import { Box, Typography, Stack } from "@mui/material";

import { SideBar } from "./index";

const Feed = () => {
    return (
        <Stack
        sx={{ flexDirection:{ sx:'column', md:'row' } }}>
            <Box
            sx={{ height: {sx: 'auto', md:'90vh'}, 
            borderRight: '1px solid #e2e2e2', 
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
