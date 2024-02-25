import React, { FC } from 'react';
import classes from './MyModal.module.scss';
import { ModalProps } from '../../../types/modal';

const MyModal: FC<ModalProps> = ({children, visible, setVisible, className}) => {
    
    const rootClasses = [classes.myModal];

    if(visible) {
        rootClasses.push(classes.active)
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={e=>setVisible(false)}>
            <div className={`${classes.myModalContent} ${className}`} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;