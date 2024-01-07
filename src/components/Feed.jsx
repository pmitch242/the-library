import { useState, useEffect } from 'react';

import { Box, Typography, Stack } from "@mui/material";

import { SideBar } from "./index";

const Feed = () => {
    return (
        <Stack
        sx={{ flexDirection:{ sx:'column', md:'row' } }}>
            <Box
            sx={{ height: {sx: 'auto', md:'90vh'}, 
            px: {sx : 0, md:'24px'},
            py: '0px',
            width: {md: '15vw'} 
        }}
            >
                <SideBar />
            </Box>
        </Stack>
    )
}

export default Feed
