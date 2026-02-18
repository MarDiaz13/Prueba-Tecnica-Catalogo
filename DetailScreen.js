import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyles, colors } from './styles/globalStyles';

const { width } = Dimensions.get('window');

const DetailScreen = ({ route, navigation }) => {
    const { product } = route.params;

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.blueHeader}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: product.image }} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
                    </View>
                </View>

                <View style={styles.contentBox}>
                    <Text style={globalStyles.tag}>{product.category}</Text>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>

                    <View style={styles.divider} />

                    <Text style={styles.label}>Descripcion</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.mainBtn}
                    onPress={() => navigation.navigate('Cart', { addedProduct: product })}
                >
                    <Text style={styles.mainBtnText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    blueHeader: { backgroundColor: '#003366', height: 160, alignItems: 'center', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 },
    imageContainer: { backgroundColor: '#FFF', padding: 15, borderRadius: 20, width: width * 0.75, height: 200, elevation: 6, position: 'relative', top: 30 },
    contentBox: { padding: 25, marginTop: 70 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#003366', marginVertical: 10 },
    price: { fontSize: 28, fontWeight: '800', color: '#1A1A1A' },
    divider: { height: 1, backgroundColor: '#E2E8F0', marginVertical: 20 },
    label: { fontSize: 16, fontWeight: 'bold', color: '#003366', marginBottom: 10 },
    description: { fontSize: 15, color: '#4A5568', lineHeight: 24, textAlign: 'justify', paddingBottom: 100 },
    footer: { padding: 20, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#E2E8F0' },
    mainBtn: { backgroundColor: '#003366', padding: 18, borderRadius: 10, alignItems: 'center' },
    mainBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }
});

export default DetailScreen;