import React from 'react';

interface IInput {
    type: any;
    name: string;
    placeholder: string;
}

const ReserveFormInput = ({ type, name, placeholder }: IInput) => {
    return (
        <input
            className="focus:outline-none p-3 rounded placeholder:text-sm"
            type={type}
            name={name}
            placeholder={placeholder}
            required />

    );
};

export default ReserveFormInput;