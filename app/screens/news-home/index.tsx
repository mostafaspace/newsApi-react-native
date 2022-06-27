import React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TextInput,
} from 'react-native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '@store';
import {
  getAllNewsAsync,
  searchNewsAsync,
} from '../../redux/modules/news/thunks';
import {
  selectAllNews,
  selectIsNewsLoading,
} from '../../redux/modules/news/selectors';
import NewsItem from './components/NewsItem';
import {Flexbox} from '../../components/layouts';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const NewsHome = () => {
  const appDispatch = useAppDispatch();
  const newsState = useAppSelector(selectAllNews);
  const isNewsLoading = useAppSelector(selectIsNewsLoading);
  const [refreshing, setRefreshing] = React.useState(false);
  const {colors} = useTheme();
  const {t} = useTranslation('common');

  React.useEffect(() => {
    appDispatch(getAllNewsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log('newsState', newsState.articles);
  }, [newsState]);
  let timer: number;

  function handleSearch(searchText: string) {
    if (searchText.length > 1) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        appDispatch(searchNewsAsync({query: searchText}));
      }, 300);
    } else {
      appDispatch(getAllNewsAsync());
    }
  }
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Flexbox style={styles.searchSection}>
        <TextInput
          style={[
            styles.searchInput,
            {backgroundColor: colors.card, color: colors.text},
          ]}
          autoCorrect={false}
          placeholder={t('search')}
          onChangeText={handleSearch}
        />
        {isNewsLoading && !refreshing && (
          <ActivityIndicator style={styles.indicator} />
        )}
      </Flexbox>

      <FlatList
        data={newsState.articles}
        contentContainerStyle={styles.flatListContainer}
        refreshControl={
          <RefreshControl
            colors={['#6394d3', '#277c9f']}
            refreshing={refreshing}
            onRefresh={() =>
              appDispatch(getAllNewsAsync()).then(() => {
                setRefreshing(false);
              })
            }
          />
        }
        renderItem={({item, index}) => (
          <NewsItem article={item} key={item.publishedAt + index} />
        )}
        keyExtractor={(item, index) => item.publishedAt + index}
        ListEmptyComponent={
          <Flexbox f={1} justifyContent={'center'} alignItems={'center'}>
            <Text style={{color: colors.text}}>{t('no-articles')}</Text>
          </Flexbox>
        }
      />
    </SafeAreaView>
  );
};

export default NewsHome;
