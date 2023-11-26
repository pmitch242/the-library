import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { Logo, UserTray } from "./index";

const Navbar = () =>
    (
        <Stack 
        direction='row'
        alignItems='center'
        p={3}
        sx={{ 
            position:'sticky',
            background:'transparent',
            top: 0,
            justifyContent:'space-between'
        }}>
            <Link to='/' style={{ display:'flex', alignItems:'center' }}>
                <Logo />
            </Link>
            <UserTray />
        </Stack>
    )

export default Navbar
