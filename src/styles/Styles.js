import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#000'
    },
    gridItem: {
        width: '46%',
        marginBottom: 20,
        height: width / 2,
        marginHorizontal: '2%',
        borderRadius: 5,
    },
    relatedItem: {
        width: width/2.6,
        marginBottom: 25,
        height: 150,
        marginRight: 10,
        borderRadius: 5,
    },
    synopsis: {
        fontSize: 16,
        letterSpacing: 0.6,
        lineHeight: 20,
        color: '#fff'
    },
    img: {
        width: '100%',
        height: '90%',
        borderRadius: 20
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        marginVertical: 10
    },
    flexDirRow: {
        flexDirection: 'row'
    },
    genre: {
        paddingHorizontal: 7.5,
        paddingVertical: 2.5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginRight: 5,
        color: '#fff'
    },
    marginVert20: {
        marginVertical: 20
    },
    fontSize14: {
        fontSize: 14
    },
    title: {
        fontSize: 14,
        color: '#fff'
    },
    loadingSec: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeCat: {
        fontSize: 14,
        color: '#fc5e03',
        textDecorationLine: 'underline',
        marginHorizontal: 10,
        // textDecorationColor: '#fc5e03'
    },
    inactiveCat: {
        fontSize: 14,
        color: '#fff',
        marginHorizontal: 10
    },
    detailCont: {
        flex: 1,
        backgroundColor: '#000'
    },
    slogan: {
        marginVertical: 20,
        color: '#fff'
    }
});