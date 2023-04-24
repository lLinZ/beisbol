import { FC } from 'react'
import { FooterComponent, NavbarComponent } from './'
import Box from '@mui/material/Box'
interface Props {
    children: any
}
export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <Box sx={{ minHeight: "100vh", p: 0, m: 0 }}>
                {children}
            </Box>
            <FooterComponent />
        </>
    )
}
