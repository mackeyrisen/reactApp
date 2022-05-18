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
                <Product key={product.id} title={product.name} image={product.img_url}/>
            ))}
            <View style={{height:120}}/>
        </ScrollView>
    );
}

function Product(props){
    var url = props.image;
    var title = props.title;
    return (
        <View style={styles.container}>
            <Image source={{ uri:url,}} style={styles.image}/>
             <Text>{title}</Text>
        </View>
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
       