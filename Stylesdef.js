import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
      //justifyContent: "flex-end",
      flexWrap: 'wrap',
      flexDirection: 'row', // Changed from bottom to top format into row format
      
    },
  
    calresult: {
      color: "#fff",
      fontSize: 40,
      textAlign: "center",
      margin: 10,
    },

    resultbutt: {
      backgroundColor: "grey", 
      padding: 10, 
      width: 10, 
      alignSelf: 'center',
      margin: 10,
      flexBasis: '100%',
    },

    calnums: {
      color: "blue",
      padding: 2,
      fontSize: 40,
      textAlign: "center",
      
    },

    calnumbutt: {
      backgroundColor: "orange", //All three below create the circle
      padding: 10, // Height
      borderRadius: 100, // Cuts edges
      width: 70, // Width
      alignSelf: 'center',
      margin: 10,
      flexBasis: '30%' // Value set to (1/n)% where n is the desired # of rows 
    },



    defaulted: { flex: 1, alignItems: 'center', justifyContent: 'center' }

  })