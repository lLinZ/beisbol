import { useState } from 'react'

import { useTheme } from '@mui/material/styles';

import { Drawer, Toolbar, Box, Typography, IconButton, Divider, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import CloseRounded from '@mui/icons-material/CloseRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import SportsBaseballRounded from '@mui/icons-material/SportsBaseballRounded';
import GroupRounded from '@mui/icons-material/GroupRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
type Props = {
}

export const SideBar = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const onClick = () => {
        setOpen(true);
    }
    const theme = useTheme();
    const clientLinks = [
        { text: 'Dashboard', icon: <DashboardRounded sx={{ color: theme.palette.primary.main }} />, path: '/dashboard' },
        { text: 'Perfil', icon: <PersonRounded sx={{ color: theme.palette.primary.main }} />, path: '/profile' },
        { text: 'Jugadores', icon: <GroupRounded sx={{ color: theme.palette.primary.main }} />, path: '/players' },
        { text: 'Juegos', icon: <SportsBaseballRounded sx={{ color: theme.palette.primary.main }} />, path: '/games' },
    ]
    const router = useNavigate();
    const onClickRedirect = (path: string) => {
        router(path);
    }
    return (
        <>
            <IconButton onClick={onClick}>
                <MenuRounded />
            </IconButton>
            <Drawer open={open} anchor='left'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant='h5' sx={{ fontFamily: 'Open Sans', fontWeight: 'bold' }}>BeisbolApp</Typography>
                    </Box>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseRounded />
                    </IconButton>
                </Toolbar>
                <Divider />
                <Box sx={{ width: 250 }}>
                    {clientLinks.map((link) => (
                        <Box>
                            <Button fullWidth startIcon={link.icon} onClick={() => onClickRedirect(link.path)} sx={{ fontFamily: 'Open Sans', color: theme.palette.text.primary, textTransform: 'none', display: 'flex', justifyContent: 'start', alignItems: 'center', p: 2 }}>{link.text}</Button>
                            <Divider />
                        </Box>
                    ))}
                </Box>
            </Drawer>
        </>
    )
}