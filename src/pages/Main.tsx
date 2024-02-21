import React, { FC } from 'react';
import PromoSection from '../components/PromoSection';
import ProgramList from '../components/ProgramList';
import Advantage from '../components/Advantage';
import CommentsList from '../components/CommentsList';

const Main: FC = () => {
    return (
        <main>
           <PromoSection/>
           <ProgramList/>
           <Advantage/>
           <CommentsList/>
        </main>
    );
};

export default Main;