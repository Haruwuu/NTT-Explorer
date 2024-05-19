import React from 'react';
import NavbarCom from './NavbarCom';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <NavbarCom />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
