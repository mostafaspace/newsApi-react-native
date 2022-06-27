import React, {useState} from 'react';
import {
    Text,
    SafeAreaView,
    Image,
    View,
    TouchableOpacity,
    I18nManager, ScrollView,
} from 'react-native';
import styles from './styles';
import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import {
  AppStackParamList,
  useAppNavigation,
} from '../../config/navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Box, Flexbox} from '../../components/layouts';
import moment from "moment";

const NewsDetailsScreen = () => {
  const navigation = useAppNavigation();
  const {article} =
    useRoute<RouteProp<AppStackParamList, 'NewsDetails'>>().params;
  const {colors} = useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Image source={{uri: article.urlToImage}} style={styles.image} />
      <SafeAreaView style={styles.arrow}>
        <TouchableOpacity
          style={[styles.arrowCircle, {backgroundColor: colors.primary}]}
          activeOpacity={1}
          onPress={() => navigation.canGoBack() && navigation.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
            size={20}
            color={colors.text}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Box p={16}>
        <Text style={[styles.title, {color: colors.text}]}>
          {article.title}
        </Text>
        <Text style={[styles.content, {color: colors.text}]}>
          {article.content}
        </Text>
      </Box>
      <Flexbox f={1} fd={'row'} p={16} justifyContent={'space-between'}>
        <Text style={[styles.author, {color: colors.text}]}>
          {'By '+article.author + '\n' + article.source.name}
        </Text>
        <Text style={[styles.author, {color: colors.text}]}>
          {moment(article.publishedAt).format('ll')}
        </Text>
      </Flexbox>
    </ScrollView>
  );
};

export default NewsDetailsScreen;
