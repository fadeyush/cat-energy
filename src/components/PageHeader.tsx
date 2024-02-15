import React, { FC } from 'react';
import '../styles/PageHeader.scss';
import PageHeaderNavigation from './PageHeaderNavigation';
import { useLocation } from 'react-router-dom';

const PageHeader: FC = () => {
    const location = useLocation();
    return (
        <header className='page-header'>
            <PageHeaderNavigation location={location.pathname}/>
            {}
        </header>
    );
};

export default PageHeader;