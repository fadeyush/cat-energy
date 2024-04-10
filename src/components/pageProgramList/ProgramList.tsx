import React, { FC } from 'react';
import classes from './ProgramList.module.scss';
import { ProgramItemProps } from '../../types/programMainItem';
import MainPageProgramItem from '../mainPageProgramItem/MainPageProgramItem';

const ProgramList: FC = () => {
    const programItems: ProgramItemProps[] = [
        {info: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.', catalogName: 'Похудение', catalogButtonName: 'Каталог Slim', className: 'program__title--slim'},
        {info: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!', catalogName: 'Набор веса', catalogButtonName: 'Каталог Pro', className: 'program__title--pro'}
    ];

    return (
        <section className={classes.program}>
            <ul className={classes.program__list}>
                {programItems.map(program=>
                    <MainPageProgramItem key={program.className} info={program.info} className={program.className} catalogButtonName={program.catalogButtonName} catalogName={program.catalogName}/>
                )}
            </ul>
        </section>
    );
};

export default ProgramList;