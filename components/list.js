import React, {useEffect,useState} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,FlatList,TouchableOpacity} from 'react-native';

const List = ({navigation}) => {

   const[post,setPost] = useState([]);
   const[isLoading,setLoading] = useState(true);

    useEffect(() => {
        
        const url = 'http://api.duckduckgo.com/?q=simpsons+characters&format=json';
        fetch(url).then((res) => res.json())
        .then((resp) => {
            setPost(resp.RelatedTopics);
            setLoading(false);
        }).catch((err) => alert(err));
   },[]);

   const FlatListItemSeparator = () => {
    return (
      <View
        style={{  
          height: 0.7,
          width: "100%",
          backgroundColor: "#adadad"
        }}
      />
    );
  }

  const actionOnRow = (item) => {
       navigation.navigate('Detail',item);
  }
 
        return(

          <View style={{flex:1,justifyContent:'center'}}>

          { isLoading ? <ActivityIndicator color="#8E24AA" size="large"/> : <FlatList 
              data = {post} 
              keyExtractor = {(item) => item.FirstURL} 
              renderItem = {({item}) => ( 
             <TouchableOpacity onPress={() => actionOnRow(item)}>    
               <View>  
              <Text style={styles.my}>{item.Text.split('-', 1)[0]}</Text>
              </View>  
              </TouchableOpacity>
               ) } 
              ItemSeparatorComponent = { FlatListItemSeparator }/>  }
        
        </View>

        );

};

const styles = StyleSheet.create({
     my:{
         marginBottom: 15,
         marginTop: 15,
         marginLeft: 15
       }
});

export default List;