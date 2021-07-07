import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { getDataUsingSimpleGetCall, postDataUsingSimplePostCall } from '../action/Get';

export const AxiosComponent = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        // getDataUsingGlobalCall();
    }, []);

    const getDataUsingGlobalCall = async () => {
        const res = await getDataUsingSimpleGetCall();
        setList(res.data);
    };

    const postDataUsingSimplePstCall = async () => {
        const res = await postDataUsingSimplePostCall();
        Alert.alert(JSON.stringify(res.data))
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Example of Axios Networking in React Native
            </Text>

                {/*Running GET Request*/}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={getDataUsingGlobalCall}>
                    <Text>Simple Get Call</Text>
                </TouchableOpacity>

                {/* <ScrollView>
                {
                    list.map((item) => {
                        return (
                            <View>
                                <Text>{item.title}</Text>
                            </View>
                        )

                    })
                }
            </ScrollView> */}

                <FlatList
                    data={list}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <Text>{item.title}</Text>
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
        </SafeAreaView>
    );
}

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