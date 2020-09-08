import * as React from 'react';
import {Text,Button,TextInput,View} from 'react-native';
import styles from './styles';

export default function({navigation}){
    const [name,setName]=React.useState('');
    const [enroll,setEnroll]=React.useState('');

    return(
        <View style={styles.basic}>
            <Text>`
                Enter name
                `
            </Text>
            <TextInput onChangeText={setName} />
            <Text>
                `
                Enter enroll
                
                `
            </Text>
            <TextInput onChangeText={setEnroll} />
            <Button title={"Done !"} onPress={()=>navigation.navigate("Home",{name:name,enroll:enroll})}/>
        </View>
    );

}