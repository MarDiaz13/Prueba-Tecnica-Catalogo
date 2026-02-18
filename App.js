import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTintColor: '#003366', headerTitleAlign: 'center' }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Catalogo' }} />
                <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Informacion del Producto' }} />
                <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Mi Carrito' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}