import React, { FC } from 'react';
import classes from '../styles/Program.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import { buttonTypes } from '../types/button';
import { ProgrammFormProps } from '../types/programForm';

const Program: FC = () => {
    const { register, handleSubmit, formState } = useForm<ProgrammFormProps>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<ProgrammFormProps> = (data) => {
        console.log(data)
    }

    const errName = formState.errors['name']?.message;
    const errWeight = formState.errors['weight']?.message;
    const errAge = formState.errors['age']?.message;
    const errEmail = formState.errors['email']?.message
    const errPhone = formState.errors['phone']?.message

    return (
        <main className={classes.program__wrappper}>
            <h1 className={classes.program__title}>Подбор программы</h1>
            <p className={classes.program__info}>Заполните анкету и мы подберем программу питания для вашего кота</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div> 
                    <label>
                    Имя:
                    <input type='text' {...register("name", { 
                        required: 'Обязательное поле', 
                    })} placeholder='БАРСИК'></input>
                    </label>
                    {errName && <p className={classes.program__error}>{errName}</p>}
                </div>

                <div>
                    <label>
                    Вес (кг):
                    <input type='text' {...register("weight", { 
                        required: 'Обязательное поле',
                        pattern: {
                        value: /^\s*[\d]+(?:,[\d]+)?\s*$/,
                        message: "Неправильно введен вес"
                        }
                    })} placeholder='7'></input>
                    </label>
                    {errWeight && <p className={classes.program__error}>{errWeight}</p>}
                </div>

                <div>
                <label>
                        Возраст (лет):
                        <input type='text' {...register("age", { 
                            required: 'Обязательное поле', 
                            pattern: {
                                value: /^\s*[\d]+(?:,[\d]+)?\s*$/,
                                message: "Неправильно введен возраст"
                            },
                        })} placeholder='7'></input>
                    </label>
                    {errAge && <p className={classes.program__error}>{errAge}</p>}
                </div>

                <div>
                    <label>
                        E-mail:
                        <input type='email' {...register("email", { 
                            required: 'Обязательное поле', 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Неправильно введен email"
                            },
                        })} placeholder='kuklachev@gmail.com'></input>
                    </label>
                    {errEmail && <p className={classes.program__error}>{errEmail}</p>}
                </div>

                <div>
                    <label>
                        Телефон:
                        <input type='tel' {...register("phone", {
                            required: 'Обязательное поле', 
                            minLength: { value: 11, message: 'Неправильно введен телефон'},
                            maxLength: { value: 15, message: 'Неправильно введен телефон'},
                            pattern: {
                                value: /^\s*[\d]+(?:,[\d]+)?\s*$/,
                                message: "Неправильно введен телефон"
                            },
                        })} placeholder='8 (960) 900-60-90'></input>
                    </label>
                    {errPhone && <p className={classes.program__error}>{errPhone}</p>}
                </div>
                
                <div>
                    <label>
                        Комментарии:
                        <textarea {...register("comments")} placeholder='Расскажите обо всех повадках кота'></textarea>
                    </label>
                </div>

                <MyButton colorType={buttonTypes.green} type='submit'>Отправить заявку</MyButton>
            </form>
        </main>
    );
};

export default Program;
