import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {Card} from 'react-native-shadow-cards';

const Detail = ({navigation, route}) => {

    return(
          
          <View style={styles.cardView}>
              
               {route.params.Icon.URL ? <Image source={{uri: 'https://duckduckgo.com' + route.params.Icon.URL}}  
                  style={{width: 100, height: 100}} /> : <Image source={require('../images/user.png')}  
                  style={{width: 100, height: 100}} /> }

               <Card style={styles.cardLayout}>
               <Text style={styles.textStyle}> {route.params.Text.split('-',1)[0]} </Text>
               </Card>

               <Card style={styles.cardLayout}>
               <Text> {route.params.Text.split('-',2)[1]}</Text>
               </Card>
                                
          </View>  
        );

};

export default Detail; 

const styles = StyleSheet.create({
  
    textStyle:{
       fontWeight:'bold'
    },
    cardView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50
    }, 
    cardLayout:{
         padding:10,
         margin:10,
         alignItems: 'center'
     }
    
});