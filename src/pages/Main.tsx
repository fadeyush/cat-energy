import React, { FC } from 'react';
import PromoSection from '../components/promoSection/PromoSection';
import ProgramList from '../components/pageProgramList/ProgramList';
import Andvantage from '../components/advantage/Advantage';
import Comments from '../components/comments/Comments';

const Main: FC = () => {
    return (
        <main>
           <PromoSection/>
           <ProgramList/>
           <Andvantage/>
           <Comments/>
        </main>
    );
};

export default Main;