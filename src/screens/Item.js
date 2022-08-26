import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Title } from "react-native-paper";

import styles from '../styles/Styles';

const Item = ({item}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Detail', {id: item.id})}>
            <Image source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.img} />
            <Title numberOfLines={1} style={styles.title}>{item.title}</Title>
        </TouchableOpacity>
    );
}

export default Item;