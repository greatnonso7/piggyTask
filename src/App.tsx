import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import FlashMessage from 'react-native-flash-message';
import { StyleSheet } from 'react-native';
import { fontFamily } from './styles/typography';

const App = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <FlashMessage
            position="top"
            duration={3000}
            titleStyle={styles.flashMessageText}
          />
          <AppNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flashMessageText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: fontFamily.DMSansMedium,
    fontSize: 14,
  },
});

export default App;
