import React, { FC, useState, ChangeEvent } from 'react';
import { Input } from './input';
import styled from 'styled-components';

const UnserNameStyled = styled.div`
    height: 40px;
    text-align: center;

`;
export interface UserNameProps {
    onChange: () => void;
}
export const UserName: FC<UserNameProps> = ({onChange}) => {
    const [name, setName] = useState('');
    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    return (
        <div>
            <div>
                Hello Tell me your name
            </div>
            <Input onChange={onChangeUserName} />
        </div>
    );
}
