import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sectionTitleLinkStyles } from '../styles/components/sectionTitleLink';
import { colors } from '../styles/constants';

export default function SectionTitleLinkComp({
  title,
  linkText,
  children,
  linkIcon,
  onLink = () => {},
}) {
  return (
    <View style={sectionTitleLinkStyles.mainContainer}>
      <View style={sectionTitleLinkStyles.titleContainer}>
        <Text style={sectionTitleLinkStyles.textTitle}>
          {title}
        </Text>
        {linkText && linkText.trim() !== '' && (
        <TouchableOpacity
          onPress={onLink}
          activeOpacity={0.6}
        >
          <View
            style={sectionTitleLinkStyles.linkContainer}
          >
            <Text style={sectionTitleLinkStyles.textLink}>
              {linkText}
            </Text>
            <Ionicons
              name={'chevron-forward-outline'}
              size={24}
              color={colors.textAlternative}
            />
          </View>
        </TouchableOpacity>
        )}
      </View>
      <View style={sectionTitleLinkStyles.bodyContainer}>{children}</View>
    </View>
  );
}
