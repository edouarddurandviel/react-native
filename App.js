/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Bottom nav
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// pages
import ListScreen from './screens/contacts/MemberList';
import DetailScreen from './screens/contacts/MemberListDetail';
import LogInSreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import UserDetailScreen from './screens/UserDetails';
import UnsplashGalery from './screens/Unsplash';
import HooksExampe from './screens/chat-screens/index';


export default function App() {

  const Tab = createBottomTabNavigator();

  const Stack = createStackNavigator();

  const StackAccount = createStackNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              var iconName;
              if (route.name === 'ut') {
                iconName = focused ? 'list-circle' : 'list-circle-outline';
              } else if (route.name === 'si') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              }
              else if (route.name === 'ch') {
                iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
              }
              else if (route.name === 'un') {
                iconName = focused ? 'images' : 'images-outline';
              }
              size = 30;
              // You can return any component that you like here!
              return  <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
                height: 60, paddingBottom: 10, paddingTop: 10, fontSize: 15,
              },
          }}>
          <Tab.Screen name="ut" options={{ title: 'User list' }}>
              {() => (
                <Stack.Navigator>
                  <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: 'Members list' }} />
                  <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Member detail' }} />
                </Stack.Navigator>
                )}
            </Tab.Screen>
          <Tab.Screen name="un" component={UnsplashGalery} options={{ title: 'Unsplash Galery' }}/>
          <Tab.Screen name="ch" component={HooksExampe} options={{ title: 'Chat1' }} />
          <Tab.Screen name="si" options={{ title: 'Sign In', style: { fontSize: 15}}}>
            {() => (
               <StackAccount.Navigator>
                <StackAccount.Screen name="LogInSreen" component={LogInSreen} options={{ title: 'User log in' }} />
                <StackAccount.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'User sign in' }} />
                <StackAccount.Screen name="UserDetailScreen" component={UserDetailScreen} options={{ title: 'User details' }} />
              </StackAccount.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );

}
