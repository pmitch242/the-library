import { Stack, Avatar, Typography } from "@mui/material";
import { ExpandMore, NotificationsRounded } from "@mui/icons-material";

const UserTray = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
        >
            <Avatar sx={{ bgcolor: '#f6e08a', boxShadow: 10 }}>H</Avatar>
            <Typography
                sx={{
                    pl: '15px',
                    pr: '5px',
                    fontFamily: 'Comfortaa',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: 0
                }}
                className='user-name'

            >
                Hannah Mitchell
            </Typography>
            <ExpandMore
                sx={{
                    mr: '30px',
                }}
            />
            <NotificationsRounded />
        </Stack>
    )
}

export default UserTray
