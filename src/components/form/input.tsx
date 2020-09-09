import React, { FC, useState, ChangeEvent } from 'react';
export interface InputProps {}
export const Input: FC<InputProps> = () => {
    const [name, setName] = useState('');
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onFocus = (e: ChangeEvent<HTMLInputElement>) => {
    }
    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    }
    return <input onFocus={onFocus} onBlur={onBlur} onChange={onChangeName} value={name} />
}
