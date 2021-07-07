import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { getDataUsingSimpleGetCall, postDataUsingSimplePostCall } from '../action/Get';

const First = () => {

    const [list, setList] = React.useState([]);

    useEffect(() => {
        getDataUsingGlobalCall();
    }, [])

    const getDataUsingGlobalCall = async () => {
        const res = await getDataUsingSimpleGetCall();
        //  Alert.alert(JSON.stringify(res.data))
        console.log(JSON.stringify(res.data));
        setList(res.data);
    };

    const postDataUsingSimplePstCall = async () => {
        const res = await postDataUsingSimplePostCall();
        Alert.alert(JSON.stringify(res.data))
    };

    console.log("---------------------");
    console.log(list);
    console.log("---------------------");


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={getDataUsingGlobalCall}>
                <Text>Simple Get Call</Text>
            </TouchableOpacity>

            {/* <ScrollView>
        {
          list.map((item, index) => {
           return (<Text>
            {item.title}
          </Text>) 
          })
        }
      </ScrollView> */}

            <FlatList
                data={list}
                renderItem={
                    ({ item }) => (
                        <View>
                            <Text>{item.title} </Text>
                        </View>
                    )
                }
            />


            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={postDataUsingSimplePstCall}>
                <Text>Post Data Using POST</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 16,
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '100%',
        marginTop: 16,
    },
});

export default First;
