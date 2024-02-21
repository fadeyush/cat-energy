import React, { FC } from 'react';
import PromoSection from '../components/PromoSection';
import ProgramList from '../components/ProgramList';
import Advantage from '../components/Advantage';
import Comments from '../components/Comments';

const Main: FC = () => {
    return (
        <main>
           <PromoSection/>
           <ProgramList/>
           <Advantage/>
           <Comments/>
        </main>
    );
};

export default Main;