import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/home';
import OrderScreen from './screens/order/order';
import AboutScreen from './screens/about/about';
import ProductScreen from './screens/product/product';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from "@react-native-material/core";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
	<NavigationContainer theme={DarkTheme}>
		<StatusBar hidden/>

		<Tab.Navigator 
			initialRouteName="Home"
			tabBarPosition='top'
			screenOptions={{
				tabBarStyle: { 
					elevation: 0,
					width: '100%',
					backgroundColor: '#000'
				},
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: '#ff6600',
				tabBarIndicatorStyle: {backgroundColor: '#ff6600', height: '100%'}
			}}
		>

			<Tab.Screen 
				name="Home" 
				component={HomeScreen} 
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<IconComponentProvider IconComponent={MaterialCommunityIcons}>
							<Icon name="home-outline" size={23} color={color}/>
						</IconComponentProvider>
					),
				}}
			/>

			<Tab.Screen 
				name="Cardapio" 
				component={ProductScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<IconComponentProvider IconComponent={MaterialCommunityIcons}>
							<Icon name="food-outline" size={23} color={color}/>
						</IconComponentProvider>
					),
				}}
			/>

			<Tab.Screen 
				name="Pedidos" 
				component={OrderScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<IconComponentProvider IconComponent={MaterialCommunityIcons}>
							<Icon name="list-status" size={23} color={color}/>
						</IconComponentProvider>
					),
				}}
			/>
			
			<Tab.Screen 
				name="Sobre o aplicativo" 
				component={AboutScreen} 
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<IconComponentProvider IconComponent={MaterialCommunityIcons}>
							<Icon name="information-outline" size={23} color={color}/>
						</IconComponentProvider>
					),
				}}
			/>
		</Tab.Navigator>
    </NavigationContainer>
  );
}
