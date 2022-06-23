import React, {useState} from 'react';
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ['x', 'y', 'z']

export const TestComponent = () => {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <SuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
            <SuperRadio
                name={'radio'}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
        </div>
    );
};

