import React, { FC } from 'react';
import classes from '../styles/Program.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import { buttonTypes } from '../types/button';
import { ProgrammFormProps } from '../types/programForm';

const Program: FC = () => {
    const { register, handleSubmit } = useForm<ProgrammFormProps>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<ProgrammFormProps> = (data) => {
        console.log(data)
    }

    return (
        <main className={classes.Program__wrappper}>
            <h1 className={classes.Program__title}>Подбор программы</h1>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Имя
                    <input {...register("name", { required: true})} placeholder='БАРСИК'></input>
                    <input {...register("age", { required: true , valueAsNumber : true})} placeholder='7'></input>
                </label>
                <MyButton colorType={buttonTypes.green} type='submit'>Отправить заявку</MyButton>
            </form> */}
        </main>
    );
};

export default Program;
