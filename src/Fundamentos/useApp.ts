import { useState } from "react"

export const useApp = () =>{
    const [value, setValue] = useState('abc')

    const handleOnpress = () =>{
      setValue('deef')
    }

    return {
        value,
        handleOnpress
    }
}