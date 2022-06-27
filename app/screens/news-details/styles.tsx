import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  arrowCircle: {
    padding: 10,
    borderRadius: 50,
  },
  arrow: {
    position: 'absolute',
    top: 16,
    marginHorizontal: 16,
  },
  image: {
    backgroundColor: '#eee',
    width: '100%',
    height: Dimensions.get('window').height / 2.4,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 16,
  },
  content: {
    fontWeight: '200',
    fontSize: 18,
    marginBottom: 16,
  },
  author: {
    fontWeight: '200',
    fontSize: 14,
  },
});
