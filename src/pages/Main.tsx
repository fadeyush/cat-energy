import React, { FC } from 'react';
import PromoSection from '../components/PromoSection';
import ProgramList from '../components/ProgramList';
import Advantage from '../components/Advantage';

const Main: FC = () => {
    return (
        <main>
           <PromoSection/>
           <ProgramList/>
           <Advantage/>
        </main>
    );
};

export default Main;