import React from 'react';
import './stance.css';



export const stanceDropDown = () => {
    const options = [
        {label: 'regular', value: 'footing'},
        {label: 'switch', value: 'footing'},
    ];
    const [value, setValue] = React.useState('regular');
    const handleChange = (event) => {
        setValue(event.target.value);

        return (
            <div>
                <label>Choose Your Stance
                    <select>
                        <option value="regular">footing</option>
                        <option value="switch">footing</option>
                    </select>
                </label>
            </div>
        );
    };
};

    export default stanceDropDown