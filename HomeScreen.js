import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { globalStyles, colors } from './styles/globalStyles';

const HomeScreen = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={globalStyles.center}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <FlatList
                data={items}
                contentContainerStyle={{ padding: 15 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={globalStyles.card}
                        onPress={() => navigation.navigate('Details', { product: item })}
                    >
                        <View style={{ backgroundColor: '#FFF', padding: 5, borderRadius: 8 }}>
                            <Image source={{ uri: item.image }} style={{ width: 70, height: 70 }} resizeMode="contain" />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 15, justifyContent: 'center' }}>
                            <Text style={globalStyles.tag}>{item.category}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#1A202C' }} numberOfLines={2}>{item.title}</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.primary }}>${item.price.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;