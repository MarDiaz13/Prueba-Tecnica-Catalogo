import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#003366',
    accent: '#0056b3',
    background: '#F4F7F9',
    white: '#FFFFFF',
    textMain: '#1A202C',
    textLight: '#718096',
    success: '#2F855A',
    border: '#E2E8F0',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        padding: 12,
        borderWidth: 1,
        borderColor: colors.border,
        elevation: 2,
    },
    tag: {
        fontSize: 10,
        color: colors.accent,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 4
    }
});