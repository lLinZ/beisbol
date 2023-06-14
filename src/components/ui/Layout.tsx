import { Box, Toolbar } from '@mui/material';
import { NavBar } from '.';

type Props = {
    children: React.ReactNode;
}
export const Layout = (props: Props) => {
    return (
        <>
            <NavBar />
            <Box sx={styles.main}>
                <Toolbar />
                {props.children}
            </Box>
        </>
    )
}
const styles = {
    main: {
        width: { xs: '100%', sm: '90%', md: '80%' },
        margin: 'auto',
        padding: { xs: 1, sm: 2, md: 2 },
    }
}