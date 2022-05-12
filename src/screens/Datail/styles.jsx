import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },

  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 1.2,
  },

  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
    marginBottom: 10
  },

  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },

  textContent: {
    fontSize: 14,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
    fontFamily: 'Anton_400Regular',
    textAlign: 'center',
  },

  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Anton_400Regular',
    fontWeight: '100'
  },

  textList: {
    fontSize: 14,
    fontFamily: 'Anton_400Regular',
    color: '#000000'
  },

  line: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%'
  }

})

export { styles };