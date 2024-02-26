import { useState, useEffect } from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

interface  Props {
    text?: string;
    children?: string;
}

const Example = ({children, text}: Props) =>{
    const [newText, setNewText] = useState()
    
    useEffect(() => {
    }, [newText])

    const handleOnpress = () => {
        setNewText('Novo')
    }

    return(
        <View>
            <Text>{children}</Text>
            <Text style={styles.text1}>{newText || text}</Text>

            <Button title="Press me" onPress={handleOnpress} />
        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        backgroundColor: '#6b89e396'
      }
})

export default  Example;