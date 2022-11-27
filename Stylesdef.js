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
 
    defaulted: { flex: 0.5, alignItems: 'center', justifyContent: 'center', 
      flexDirection: 'row', width: "100%", height: "100%", flexWrap: 'wrap',
    },

    homeparentbutton: {alignItems: 'center', margin: 12
  },

    homebutton:{
      width: 100, height: 100
    },

    hometext: {color: 'grey', alignItems: 'center', fontSize:"20"},

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
      flexWrap: 'wrap',
      flexDirection: 'row', // Changed from bottom to top format into row format
      
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

    calresult: {
      color: "#fff",
      fontSize: 40,
      textAlign: "left",
      margin: 10,
    },

    // Task Styles

    taskbuttM: {
      backgroundColor: "#ff471a", 
      borderRadius: 100, 
      width: 50, 
      margin: 10,
      position: "absolute",
      marginTop: 25,
    },

    taskbuttP: {
      backgroundColor: "#00cc00", 
      borderRadius: 100, 
      width: 50, 
      margin: 10,
      position: "absolute",
      marginTop: 25,
      right: 0 // Default position set to left, so right must be specified.
    },

    tasksign: {
      color: "#333333",
      fontSize: 40,
      textAlign: "center",
      
    },

  })