import React, {Component} from 'react';
import {SafeAreaView, Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import { Title, Searchbar } from 'react-native-paper';
import axios from 'axios';

import Item from './Item';
import styles from '../styles/Styles';

class Discover extends Component{
    static contextType = NavigationContext;
    state = {
        movies: [],
        type: 'movie',
        categories: ['Movies', 'Tv Series', 'Documentary', 'Sports'],
        selectedCat: 'Movies'
    }

    async componentDidMount(){
        const movies = await axios.get(`https://api.themoviedb.org/3/discover/${this.state.type}?api_key=9f6a2859ab266a4b4fb6947740b42ecb`);
        this.setState({movies: movies.data.results});
    }

    render(){
        const {movies, categories, selectedCat} = this.state;

        return(
            <SafeAreaView style={styles.mainContainer}>
                <FlatList
                    data={movies}
                    renderItem={({item}) => <Item item={item} />}
                    numColumns={2}
                    key={item => item.id}
                    ListHeaderComponent={
                        <View style={{marginVertical: 20}}>
                            <Title style={styles.slogan}>Find Movies, Tv series and more... </Title>
                            <Searchbar
                                placeholder="Search"
                                // onChangeText={onChangeSearch}
                                // value={searchQuery}
                            />
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop: 10}}>
                                {categories.map((category, key) => (
                                    <TouchableOpacity key={key} onPress={() => this.setState({selectedCat: category})}>
                                        <Title style={selectedCat == category ? styles.activeCat : styles.inactiveCat}>{category}</Title>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    }
                />
            </SafeAreaView>
        );
    }
}

export default Discover;

