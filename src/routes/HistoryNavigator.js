import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransHistoryScreen from '../screens/TransHistoryScreen';

export default function HistoryNavigator (){
    const Stack = createNativeStackNavigator();
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HistoryScreen" component={TransHistoryScreen}/>
    </Stack.Navigator>
}