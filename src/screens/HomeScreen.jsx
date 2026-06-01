import { View, Text, FlatList } from 'react-native';
import {
  Header,
  CardHeaderComp,
  ReservationPreviewComp,
  SectionTitleLinkComp,
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
        <SectionTitleLinkComp title={'Mis reservas'} linkText={'Ver todas'}>
          <FlatList
            data={classes.slice(0, 4)}
            renderItem={({ item }) => (
              <ReservationPreviewComp classData={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </SectionTitleLinkComp>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
