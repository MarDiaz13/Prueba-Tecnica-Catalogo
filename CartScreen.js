import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const CartScreen = ({ route }) => {
    const product = route?.params?.addedProduct;

    return (
        <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Mi Carrito</Text>
                <Text style={styles.subtitle}>Revisa y completa tu pedido</Text>

                {product ? (
                    <View style={styles.itemCard}>
                        <Image source={{ uri: product.image }} style={styles.img} resizeMode="contain" />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{product.title}</Text>
                            <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
                        </View>
                    </View>
                ) : (
                    <Text style={styles.emptyText}>No hay productos en el carrito</Text>
                )}

                <View style={styles.summaryBox}>
                    <Text style={styles.summaryTitle}>Resumen del Pedido</Text>
                    <View style={styles.row}><Text>Subtotal:</Text><Text style={{ fontWeight: 'bold' }}>${product ? product.price.toFixed(2) : '0.00'}</Text></View>
                    <View style={styles.row}><Text>Envio:</Text><Text style={{ color: '#2F855A', fontWeight: 'bold' }}>Gratis</Text></View>
                    <View style={styles.totalRow}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Total:</Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#003366' }}>${product ? product.price.toFixed(2) : '0.00'}</Text>
                    </View>
                    <TouchableOpacity style={styles.confirmBtn}>
                        <Text style={styles.confirmBtnText}>REALIZAR PEDIDO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: { flex: 1, backgroundColor: '#F8FAFC' },
    wrapper: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
    subtitle: { fontSize: 14, color: '#64748B', marginBottom: 20 },
    itemCard: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, flexDirection: 'row', marginBottom: 20, elevation: 2 },
    img: { width: 50, height: 50 },
    itemInfo: { marginLeft: 15, flex: 1 },
    itemName: { fontSize: 14, fontWeight: '600' },
    itemPrice: { fontSize: 14, fontWeight: 'bold', color: '#003366' },
    summaryBox: { backgroundColor: '#FFF', borderRadius: 12, padding: 20, elevation: 3 },
    summaryTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, borderTopWidth: 1, borderTopColor: '#E2E8F0', paddingTop: 15 },
    confirmBtn: { backgroundColor: '#007BFF', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 25 },
    confirmBtnText: { color: '#FFF', fontWeight: 'bold', letterSpacing: 1 },
    emptyText: { textAlign: 'center', padding: 40, color: '#94A3B8' }
});

export default CartScreen;