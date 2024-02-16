import React, { FC } from 'react';
import PromoSection from '../components/PromoSection';
import ProgramList from '../components/ProgramList';

const Main: FC = () => {
    return (
        <main>
           <PromoSection/>
           <ProgramList/>
        </main>
    );
};

export default Main;