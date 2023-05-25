import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const PlaceholderImage = require('./assets/images/background.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width:width * .5,
    height: height * .4,
  },
});
