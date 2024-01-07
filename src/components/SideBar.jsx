import { Stack } from "@mui/material";

import { menu, settingMenu } from "../utils/constants";

const selectedMenu = 'Discover';

const SideBar = () => (
    <Stack
        direction='row'
        sx={{
            overflowY: 'auto',
            height:
                { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' }
        }}>
        <span
        style={{
            fontSize: '10px',
            color: '#8c8d9b',
            fontWeight: 700,
            marginBottom: '10px',
            letterSpacing: '1px'
        }}
        >MENU</span>
        <div className='menu-section'>
            {menu.map((menu) => (
                <button
                    className="sidebar-btn"
                    key={menu.name}
                    style={{ marginBottom: '4px' }}
                >
                    <span className="sidebar-icon"
                        style={{
                            background: menu.name === selectedMenu && '#ff7551',
                            color: menu.name === selectedMenu ? '#fff' : '#808191',
                            fontSize: '10px'
                        }}
                    >{menu.icon}</span>
                    <span
                        style={{
                            color: menu.name === selectedMenu ? '#000' : '#8c8d9b',
                            fontWeight: menu.name === selectedMenu && 700
                        }}
                    >{menu.name}</span>
                </button>
            ))}
        </div>
        <div className='menu-section'>
            {settingMenu.map((settingMenu) => (
                <button
                    className="sidebar-btn"
                    key={settingMenu.name}
                    style={{ marginBottom: '4px' }}
                >
                    <span className="sidebar-icon"
                        style={{ color: '#808191' }}>{settingMenu.icon}</span>
                    <span
                        style={{
                            color: menu.name === selectedMenu ? '#000' : '#8c8d9b',
                            fontWeight: menu.name === selectedMenu && 700
                        }}>{settingMenu.name}</span>
                </button>
            ))}
        </div>
    </Stack>
)

export default SideBar
