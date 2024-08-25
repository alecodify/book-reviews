import { ReactNode } from 'react';
import { Navbar } from '../components';

type LayoutProps = {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout