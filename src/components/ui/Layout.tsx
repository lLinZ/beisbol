import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, Toolbar, useTheme } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import SportsBaseballRounded from '@mui/icons-material/SportsBaseballRounded';
import GroupRounded from '@mui/icons-material/GroupRounded';
type Props = {
    children: React.ReactNode;
}

export const Layout = (props: Props) => {
    return (
        <Box>
            <NavBar />
            <Box sx={{ width: '100%' }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}

const NavBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const onClick = () => {
        setOpen(true);
    }
    return (
        <AppBar elevation={0}>
            <Toolbar>
                <IconButton onClick={onClick}>
                    <MenuRounded />
                </IconButton>
            </Toolbar>
            <SideBar open={open} setOpen={setOpen} />
        </AppBar>
    )
}

interface SideBarProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}
const SideBar = (props: SideBarProps) => {
    const theme = useTheme();
    const clientLinks = [
        { text: 'Dashboard', icon: <DashboardRounded sx={{ color: theme.palette.primary.main }} />, path: '/dashboard' },
        { text: 'Perfil', icon: <PersonRounded sx={{ color: theme.palette.primary.main }} />, path: '/profile' },
        { text: 'Jugadores', icon: <GroupRounded sx={{ color: theme.palette.primary.main }} />, path: '/players' },
        { text: 'Juegos', icon: <SportsBaseballRounded sx={{ color: theme.palette.primary.main }} />, path: '/games' },
    ]
    const router = useNavigate();
    const onClick = (path: string) => {
        router(path);
    }
    return (
        <Drawer open={props.open} anchor='left'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
                <IconButton onClick={() => props.setOpen(false)}>
                    <CloseRounded />
                </IconButton>
            </Toolbar>
            <Box sx={{ width: 250 }}>
                {clientLinks.map((link) => (
                    <Box>
                        <Button fullWidth startIcon={link.icon} onClick={() => onClick(link.path)} sx={{ fontFamily: 'Open Sans', color: theme.palette.text.primary, textTransform: 'none', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2 }}>{link.text}</Button>
                        <Divider />
                    </Box>
                ))}
            </Box>
        </Drawer>
    )
}