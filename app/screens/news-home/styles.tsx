import {I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#9fa7b0',
    height: 46,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  indicator: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
  flatListContainer: {
    marginTop: 8,
    flexGrow: 1,
  },
});
