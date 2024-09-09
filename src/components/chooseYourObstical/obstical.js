import React from 'react';
import './obstical.css';



export const obsticalDropDown = () => {
    const options = [
        {label: 'flat ground', value: 'obstical'},
        {label: 'stairs', value: 'obstical'},
        {label: 'ledge', value: 'obstical'},
    ];
    const [value, setValue] = React.useState('flat ground');
    const handleChange = (event) => {
        setValue(event.target.value);

        return (
            <div>
                <label>Choose Your Obstical
                    <select>
                        <option value="flat ground">Obstical</option>
                        <option value="stairs">Obstical</option>
                        <option value="ledge">Obstical</option>
                    </select>
                </label>
            </div>
        );
    };
};

export default obsticalDropDown