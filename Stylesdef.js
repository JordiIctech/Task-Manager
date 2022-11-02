import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 10,
      marginTop: 10,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
    },
    button1: {
      backgroundColor: "lightblue",
      padding: 20,
      borderRadius: 5,
    },
    buttontext1: {
      fontSize: 20,
      color: '#fff',
    },
    importedI: {
      width: 30,
      height: 30,
      resizeMode: "contain"
    },
    // Calculator Styles
    container: {
      flex: 1,
      backgroundColor: "#202020",
      justifyContent: "flex-end",
    },
  
    computedValue: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10,
    },

    defaulted: { flex: 1, alignItems: 'center', justifyContent: 'center' }

  })