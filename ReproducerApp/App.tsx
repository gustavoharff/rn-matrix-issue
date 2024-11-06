import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const isBridgeless = !!global.__turboModuleProxy;

function App() {
  return (
    <View style={styles.container}>
      <Text>
        {isBridgeless ? 'Bridgeless' : 'Bridge'}
      </Text>

      <View style={styles.workspace}>
        <View
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            transform: [
              { translateX: -50 },
              // { translateY: -50 },
              { matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 150, 50, 0, 1] },
              // { translateX: 50 },
              // { translateY: 50 },
            ],
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workspace: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
  },
});

export default App;
