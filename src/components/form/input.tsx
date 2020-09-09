import React, { FC, useState, ChangeEvent } from 'react';
export interface InputProps {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Input: FC<InputProps> = ({
        onChange = () => {},
        onFocus = () => {},
        onBlur = () => {},
    }) => {
    const [name, setName] = useState('');
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        onChange(e);
    }
    const onFocusInput = (e: ChangeEvent<HTMLInputElement>) => {
        onFocus(e);
    }
    const onBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
        onBlur(e);
    }
    return <input
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            onChange={onChangeInput}
            value={name}
            />
}
