import { useState, useCallback, useEffect } from "react";

const Test = () =>{
    const [name, setName] = useState('test');
    const [sobrenome, setSobre] = useState('sobrenomee')

    const handleNome = useCallback(() =>{
        setName('thiago', $(sobrenome))
    }, [sobrenome, name])

    useEffect(() => {
        handleNome()
        handleSobre()
    })

    const handleSobre = () => {
        setSobre('pires')
    }


    return(
        <div>
            <button onClick={handleNome}></button>
            <button onClick={handleSobre} ></button>
        </div>
    )
}

export default Test;