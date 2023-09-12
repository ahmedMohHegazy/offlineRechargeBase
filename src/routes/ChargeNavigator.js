import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChargeScreen from '../screens/ChargeScreen';

export default function ChargeNavigator (){
    const Stack = createNativeStackNavigator();
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="ChargeScreen" component={ChargeScreen}/>
    </Stack.Navigator>
}