import {
  View,
  Text,
  FlatList,
} from 'react-native';
import {
  Header,
  CardHeaderComp,
  ReservationPreviewComp,
} from '../components/index';
import { classes } from '../data/mockClasses';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyles.containerMain}>
        <Header name="Inicio" />
        <CardHeaderComp />
        <FlatList
          data={classes.slice(0, 4)}
          renderItem={({ item }) => (
            <ReservationPreviewComp classData={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
