import { AppBar, Toolbar, IconButton } from '@mui/material';
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';
import { SideBar } from './SideBar';
import { UserMenu } from './UserMenu';

type Props = {}

export const NavBar = (props: Props) => {

    return (
        <AppBar elevation={0}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <SideBar />
                <UserMenu />
                {/* <IconButton>
                    <AccountCircleRounded />
                </IconButton> */}
            </Toolbar>
        </AppBar>
    )
}