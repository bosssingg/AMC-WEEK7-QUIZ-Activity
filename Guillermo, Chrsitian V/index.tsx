import React, {useState} from 'react';
import {View, Text, TextInput, Switch, StyleSheet, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, {backgroundColor: isEnabled ? 'white' : 'gray'}]}>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image source={{
          uri: isEnabled
          ? 'https://th.bing.com/th/id/OIP.Eh80jhi1xPqlDfM7xn8aNgHaMa?rs=1&pid=ImgDetMain'
          : 'https://th.bing.com/th/id/R.7a674cb2737026340123a4d674c63969?rik=7pAiKWXjF08SOg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flight-bulb-transparent-png%2flight-bulb-transparent-png-6.png&ehk=RvS4KO8p14wresp4gBI7Xm2S13F%2fzhn1B0kfWp%2b3pR8%3d&risl=&pid=ImgRaw&r=0'
          }} style={styles.image} 
          />
      <Text style={styles.text}>{isEnabled ? 'ON' : 'OFF'}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TextInput style={styles.text}>AMC</TextInput>
        <TextInput style={styles.text}>Ligthbulb</TextInput>
      </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f2f2f2',
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 0,
  },
  image:{
    width: 200,
    height: 300,
    marginBottom: 40,
  },
  
});

export default App;