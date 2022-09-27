import { useState } from "react";

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const reset = (newValue?: string) => {
        setValue(newValue || initialValue);
    };
    const bind = {
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValue(e.target.value);
        },
    };
    return {value, bind, reset};
};

export default useInput;