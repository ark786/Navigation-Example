import * as React from 'react';
import {Text,Button,TextInput,View} from 'react-native';
import styles from './styles';

export default function({navigation,route}){
    const {name, enroll}=route.params;

    return(
        <View style={styles.basic}>
            <Text>Welcome {name} your Enrollment is {enroll}</Text>
            <Button title={"Update karo paaji"} onPress={()=>navigation.navigate('Update')}/>
        </View>
    );

}