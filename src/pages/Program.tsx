import React, { FC, useEffect } from 'react';
import classes from '../styles/Program.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import { buttonTypes } from '../types/button';
import { ProgrammFormProps } from '../types/programForm';
import MyInput from '../components/UI/input/MyInput';

const Program: FC = () => {
    const { register, handleSubmit, formState, reset, control } = useForm<ProgrammFormProps>({
        mode: 'onChange',
        defaultValues: {
            target: 'weightloss',
            sweetener: true
        }
    });

    const onSubmit: SubmitHandler<ProgrammFormProps> = (data) => {
        console.log(data);
        // reset();
    }

    const errName = formState.errors['name']?.message;
    const errWeight = formState.errors['weight']?.message;
    const errAge = formState.errors['age']?.message;
    const errEmail = formState.errors['email']?.message;
    const errPhone = formState.errors['phone']?.message;
    
    return (
        <main className={classes.program__wrappper}>
            <h1 className={classes.program__title}>Подбор программы</h1>
            <p className={classes.program__info}>Заполните анкету и мы подберем программу питания для вашего кота</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.programItem__wrappper}>  
                    Имя:*
                    <Controller 
                        name='name' 
                        control={control} 
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field: { value, onChange } }) => <MyInput isError={errName ? true : false} onChange={onChange} value={value} type='text' placeholder='БАРСИК' />}/>
                    {errName && <p className={classes.program__error}>{errName}</p>}
                </div>

                <div className={classes.programItem__wrappper}>  
                    Вес (кг):*
                    <Controller 
                        name='weight' 
                        control={control} 
                        rules={{ 
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^\s*[\d]+(?:,[\d]+)?\s*$/,
                                message: "Неправильно введен вес"
                            } 
                        }}
                        render={({ field: { value, onChange } }) => <MyInput isError={errWeight ? true : false} onChange={onChange} value={value} type='text' placeholder='7' />}/>
                    {errWeight && <p className={classes.program__error}>{errWeight}</p>}
                </div>

                <div className={classes.programItem__wrappper}>  
                    Возраст (лет):*
                    <Controller 
                        name='age' 
                        control={control} 
                        rules={{ 
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^\s*[\d]+(?:,[\d]+)?\s*$/,
                                message: "Неправильно введен возраст"
                            }
                        }}
                        render={({ field: { value, onChange } }) => <MyInput isError={errAge ? true : false} onChange={onChange} value={value} type='text' placeholder='7' />}/>
                    {errAge && <p className={classes.program__error}>{errAge}</p>}
                </div>

                <ul>
                    <li>
                        <label>
                            <input {...register("target", { required: true })} type="radio" value="weightloss"/>Похудение
                        </label>
                    </li>
                    <li>
                        <label>
                            <input {...register("target", { required: true })} type="radio" value="massgain"/>Набор массы
                        </label>  
                    </li>
                    <li>
                        <label>
                            <input {...register("target", { required: true })} type="radio" value="needadvice"/>Не знаю (нужен ваш совет)
                        </label>
                    </li>
                </ul>

                <div>
                    <p>Контактные данные (владельца кота)</p>
                    <div className={classes.programItem__wrappper}>  
                        E-mail:*
                        <Controller 
                            name='email' 
                            control={control} 
                            rules={{ 
                                required: 'Обязательное поле',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Неправильно введен email"
                                }
                            }}
                            render={({ field: { value, onChange } }) => <MyInput isError={errEmail ? true : false} onChange={onChange} value={value} type='email' placeholder='kuklachev@gmail.com' />}/>
                        {errEmail && <p className={classes.program__error}>{errEmail}</p>}
                    </div>

                    <div className={classes.programItem__wrappper}>  
                        Телефон:*
                        <Controller 
                            name='phone' 
                            control={control} 
                            rules={{ 
                                required: 'Обязательное поле',
                                minLength: { value: 11, message: 'Неправильно введен телефон'},
                                maxLength: { value: 15, message: 'Неправильно введен телефон'},
                                pattern: {
                                    value: /^\s*[\d]+(?:,[\d]+)?\s*$/,
                                    message: "Неправильно введен телефон"
                                }
                            }}
                            render={({ field: { value, onChange } }) => <MyInput isError={errPhone ? true : false} onChange={onChange} value={value} type='tel' placeholder='8 (960) 900-60-90' />}/>
                        {errPhone && <p className={classes.program__error}>{errPhone}</p>}
                    </div>
                </div>
                
                <div className={classes.programItem__wrappper}>
                    <p>Комментарии:</p>
                    <textarea {...register("comments")} placeholder='Расскажите обо всех повадках кота'></textarea>
                </div>

                <div>
                    <p>Дополнительно</p>
                    <ul>
                        <li>
                            <label>
                                <input {...register("sweetener")} type="checkbox"/>
                                Сахарозаменитель
                            </label>
                        </li>
                        <li>
                            <label>
                                <input {...register("water")} type="checkbox"/>
                                Питьевая вода
                            </label>
                        </li>
                        <li>
                            <label>
                                <input {...register("milk")} type="checkbox"/>
                                Молоко
                            </label>
                        </li>
                        <li>
                            <label>
                                <input {...register("vitamins")} type="checkbox"/>
                                Витамины
                            </label>
                        </li>
                    </ul>
                    

                </div>

                <p>* — Обязательные поля</p>
                <MyButton colorType={buttonTypes.green} type='submit'>Отправить заявку</MyButton>
            </form>
        </main>
    );
};

export default Program;
