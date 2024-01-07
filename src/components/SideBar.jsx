import { Stack } from "@mui/material";

import { menu, settingMenu } from "../utils/constants";

const SideBar = () => (
    <Stack
        direction='row'
        sx={{
            overflowY: 'auto',
            height:
                { sx: 'auto', md: '95%' },
            flexDirection: 'column'
        }}>
        {menu.map((menu) => (
            <button
                className="menu-btn"
                key={menu.name}
            >
                <span>{menu.icon}</span>
                <span>{menu.name}</span>
            </button>
        ))}
        {settingMenu.map((settingMenu) => (
            <button
                className="menu-btn"
            >
                <span>{settingMenu.icon}</span>
                <span>{settingMenu.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar
