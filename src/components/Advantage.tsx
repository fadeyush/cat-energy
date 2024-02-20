import React, { FC } from 'react';
import classes from '../styles/advantage.module.scss';
import { AdvantagesItemsProps } from '../types/advantage';
import AdvantagesItem from './AdvantagesItem';

const Andvantage: FC = () => {

    const advantageItems: AdvantagesItemsProps[] = [
        {info: 'Функциональное питание содержит только полезные питательные вещества.', className: 'advantage__item--first'},
        {info: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.', className: 'advantage__item--second'},
        {info: 'Замените один-два приема обычной еды на наше фунцкциональное питание.', className: 'advantage__item--third'},
        {info: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!', className: 'advantage__item--fourth'}
    ]
    return (
        <section className={classes.advantage}>
            <h2 className={classes.advantage__title}>Как это работает</h2>
            <ul className={classes.advantage__list}>
                {advantageItems.map(advantage =>
                    <AdvantagesItem className={advantage.className} info={advantage.info}/>
                )}
            </ul>
        </section>
    );
};

export default Andvantage;