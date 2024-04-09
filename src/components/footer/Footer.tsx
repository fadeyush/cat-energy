import React, { FC } from 'react';
import FooterLogo from '../footerLogo/FooterLogo';
import classes from './Footer.module.scss';
import FooterMediaList from '../footerMediaList/FooterMediaList';
import FooterCopyright from '../footerCopyright/FooterCopyright';
const Footer: FC = () => {
    return (
        <footer className={classes.pageFooter}>
            <div className={classes.pageFooter__wrapper}>
                <FooterLogo/>
                <FooterMediaList/>
                <FooterCopyright/>
            </div>
        </footer>
    );
};

export default Footer;