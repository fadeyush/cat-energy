import React, { FC } from 'react';
import classes from '../styles/advantage.module.scss';
import { AdvantagesItemsProps } from '../types/advantage';
import AdvantagesItem from './AdvantagesItem';

const Andvantage: FC = () => {

    const advantageItems: AdvantagesItemsProps[] = [
        {info: 'Функциональное питание содержит только полезные питательные вещества.', className: 'advantage__item--first', index: 1},
        {info: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.', className: 'advantage__item--second', index: 2},
        {info: 'Замените один-два приема обычной еды на наше фунцкциональное питание.', className: 'advantage__item--third', index: 3},
        {info: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!', className: 'advantage__item--fourth', index: 4}
    ]
    return (
        <section className={classes.advantage}>
            <div className={classes.advantage__wrapper}>
                <h2 className={classes.advantage__title}>Как это работает</h2>
                <ul className={classes.advantage__list}>
                    {advantageItems.map(advantage =>
                        <AdvantagesItem key={advantage.index} index={advantage.index} className={advantage.className} info={advantage.info}/>
                    )}
                </ul>

            </div>
        </section>
    );
};

export default Andvantage;