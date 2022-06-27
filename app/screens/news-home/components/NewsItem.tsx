import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Flexbox} from '../../../components/layouts';
import {useAppNavigation} from '../../../config/navigation/types';
import {useTheme} from '@react-navigation/native';

const NewsItem = ({article}: {article: IArticle}) => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: 16,
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    image: {
      backgroundColor: '#eee',
      borderRadius: 16,
      width: 100,
      height: 80,
    },
    title: {
      color: colors.text,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('NewsDetails', {article: article})}
      style={styles.container}>
      <Flexbox f={1} fd="row" justifyContent={'center'}>
        <Flexbox f={1} mr={16}>
          <Text style={styles.title}>{article.title}</Text>
        </Flexbox>

        <Image source={{uri: article.urlToImage}} style={styles.image} />
      </Flexbox>
    </TouchableOpacity>
  );
};

export default NewsItem;
