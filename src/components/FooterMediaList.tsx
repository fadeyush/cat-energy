import React, { FC } from 'react';
import { MediaProps } from '../types/footer';
import {ReactComponent as VkIkon} from '../assets/img/icons/icon-vk.svg';
import {ReactComponent as IgIkon} from '../assets/img/icons/icon-insta.svg';
import {ReactComponent as FbIkon} from '../assets/img/icons/icon-fb.svg';
import FooterMediaItem from './FooterMediaItem';
import '../styles/footerMedia.scss';

const FooterMediaList: FC = () => {
    const medias: MediaProps[] = [
        {ikon: <VkIkon/>, link: '#', name: 'Вконтакте', className: 'footer-media__ikon--vk'},
        {ikon: <IgIkon/>, link: '#', name: 'Инстраграм', className: 'footer-media__ikon--ig'},
        {ikon: <FbIkon/>, link: '#', name: 'Фейсбук', className: 'footer-media__ikon--fb'},
    ]
    return (
        <ul className='footer-media__list'>
            {medias.map(media =>
                <FooterMediaItem className={media.className} ikon={media.ikon} link={media.link} name={media.name}/>
            )}
        </ul>
    );
};

export default FooterMediaList;