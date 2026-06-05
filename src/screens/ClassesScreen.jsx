import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ClassListComp from '../components/ClassListComp';
import SectionTitleLinkComp from '../components/SectionTitleLinkComp';
import { colors, typography } from '../styles/constants';
import { globalStyles } from '../styles/globalStyles';

function ClassesScreen() {
  const { classes, userData, loading } = useContext(AuthContext);

  if (loading || !userData || !classes) {
    return (
      <View style={globalStyles.containerMain}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const filteredClasses = classes.filter(
    (item) => item.sportCenterId === userData?.sportCenterId
  );


  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <View
        style={[globalStyles.containerMain, {overflow:'hidden', borderRadius:16}]}
      >
        <SectionTitleLinkComp
          title={'Mis reservas'}
          linkText={''}
        >
          <FlatList
            data={filteredClasses}
            renderItem={({ item }) => <ClassListComp item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
            ListEmptyComponent={
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: colors.textDisabled, fontSize: typography.body.fontSize, textAlign: 'center' }}>
                  No hay clases disponibles
                </Text>
              </View>
            }
          />
        </SectionTitleLinkComp>
      </View>
    </SafeAreaView>
  );
}

export default ClassesScreen;
