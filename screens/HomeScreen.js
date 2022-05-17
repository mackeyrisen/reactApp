import * as React from 'react';
import {SafeAreaView,ScrollView,View,Image,Text,StyleSheet} from 'react-native';

export default function HomeScreen({navigation}){
   
    const [products,setProducts] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://siamcityacc.com/api/react/getProduct")
        .then(res =>res.json())
        .then(
            (result)=>{
                setProducts(result);
            },
            (error)=>{},
        )
    });
    return(
        <ScrollView>
            {products.map(product=>(
                <View key={product.id} style={styles.container}>
                    <Image source={{ uri: product.img_url,}} style={styles.image}/>
                    <Text>{product.name}</Text>
                </View>
            ))}
            <View style={{height:120}}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        marginLeft:40,
        marginRight:40,
        backgroundColor:"#fff",
        padding:15,
        borderRadius:15
    },
    image:{
        width: 250,
        height: 250
    }
});
