import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const ProfileLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProfileLayout;