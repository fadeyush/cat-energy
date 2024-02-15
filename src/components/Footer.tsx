import React, { FC } from 'react';
import FooterLogo from './FooterLogo';
import '../styles/pageFooter.scss';
import FooterMediaList from './FooterMediaList';
import FooterCopyright from './FooterCopyright';

const Footer: FC = () => {
    return (
        <footer className='page-footer'>
            <FooterLogo/>
            <FooterMediaList/>
            <FooterCopyright/>
        </footer>
    );
};

export default Footer;