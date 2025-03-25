import { Colors } from "@/constants/Colors";
import { Button, ImageBackground, StyleSheet } from "react-native";



const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorCountainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingBottom: 5,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },


    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 90,
        backgroundColor: Colors.orange,
        borderRadius: 100,
        marginHorizontal: 4,
    },


    buttonText: {
       textAlign: 'center',
        padding: 10,
        fontSize: 22,
        color: Colors.textPrimary,
        fontWeight: '300',
        fontFamily: 'SpaceMono',
    },

});

export default globalStyles;