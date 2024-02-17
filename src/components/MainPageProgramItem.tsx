import React, { FC } from 'react';
import { ProgramItemProps } from '../types/programMainItem';
import classes from '../styles/ProgramMainPage.module.scss'
import { NavLink } from 'react-router-dom';
import { Pages } from '../types/pageHeader';

const MainPageProgramItem: FC<ProgramItemProps> = ({info, catalogName, catalogButtonName, className}) => {
    return (
        <li className={classes.program__item}>
            <div className={classes.program__item__wrapper}>
                <h3 className={`${classes.program__title } ${classes[className]}`}>{catalogName}</h3>
                <p className={classes.program__info}>{info}</p>
                <NavLink to={Pages.catalog} className={classes.program__button}>{catalogButtonName}<span></span></NavLink>
            </div>
        </li>
    );
};

export default MainPageProgramItem;