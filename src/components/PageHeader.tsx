import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const PageHeader: FC = () => {
    return (
        <div>
            <Link to='/about'>Главная</Link>    
            <Link to='/catalog'>Каталог продукции</Link>
            <Link to='/program'>Подбор программы</Link>
        </div>
    );
};

export default PageHeader;