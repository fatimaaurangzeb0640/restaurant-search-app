import { StyleSheet, View,  } from 'react-native';
import RootStack from './src/navigation/RootStack';

export default function App() {

  return (
    <View style={styles.container}>
     <RootStack/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 65
  },
});
