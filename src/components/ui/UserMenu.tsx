import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded'
import { Box, Typography, Tooltip, Avatar, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';

type Props = {}

export const UserMenu = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { authState } = useContext(AuthContext)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={styles.buttonContainer}>
                <Tooltip title="Configuracion de cuenta">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={styles.paperProps}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar />
                    {/* <Avatar /> {authState.nombre} */}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Configurar
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar sesion
                </MenuItem>
            </Menu>
        </>
    );
}

const styles = {
    buttonContainer: { display: 'flex', alignItems: 'center', textAlign: 'center' },
    paperProps: {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
    }
}