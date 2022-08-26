import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView, Dimensions} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Title } from 'react-native-paper';
import styles from '../styles/Styles';

const height = Dimensions.get('screen').height;

class Detail extends Component{
    static contextType = NavigationContext;
    state = {
        movieDetail: {},
        related: [],
        complete: false
    }

    componentDidMount(){
        const {route} = this.props;
        const {id} = route.params;
        this.fetchMovie(id);
    }

    componentDidUpdate() {
        const {route} = this.props;
        const {id} = route.params;

        if (id !== this.state.movieDetail.id) {
            if (this.state.complete) {
                this.setState({complete: false});
            }
            this.fetchMovie(id);
        }
    }

    fetchMovie = async(id) => {
        const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9f6a2859ab266a4b4fb6947740b42ecb`);
        const related = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=9f6a2859ab266a4b4fb6947740b42ecb`);
        this.setState({movieDetail: result.data, related: related.data.results, complete: true});
    }

    render(){
        const navigation = this.context;
        const {movieDetail, complete, related} = this.state;
        let body;

        if(complete){
            body = (
                <ScrollView>
                    <Image source={{uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}} style={{width: '100%', height: height/3}} />
                    <View style={{paddingHorizontal: 20}}>
                        <View style={{paddingVertical: 20}}>
                            <Title style={{color: '#fff'}}>{movieDetail.title}</Title>
                            <View style={styles.flexDirRow}>
                                <View style={styles.flexDirRow}>
                                    <Icon name='clock-time-three-outline' size={15} color='#fff' style={{marginRight: 5}} />
                                    <Text style={{marginRight: 20, color: '#fff'}}>
                                        {movieDetail.runtime} minutes
                                    </Text>
                                </View>
                                <View style={styles.flexDirRow}>
                                    <Icon name='star' size={15} color='#fff' style={{marginRight: 5}} />
                                    <Text style={{color: '#fff'}}>
                                        {movieDetail.vote_average.toFixed(1)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{backgroundColor: '#3d3b3b'}} />
                        <View style={[styles.flexDirRow, {paddingBottom: 15, paddingTop: 10}]}>
                            <View style={{marginRight: 20}}>
                                <Title style={styles.title}>Release date</Title>
                                <Text style={{color: '#fff'}}>{moment(movieDetail.release_date).format('MMMM D, YYYY')}</Text>
                            </View>
                            <View>
                                <Title style={styles.title}>Genre</Title>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.flexDirRow}>
                                    {movieDetail.genres.map(genre => (<Text key={genre.id} style={styles.genre}>{genre.name}</Text>))}
                                </ScrollView>
                            </View>
                        </View>
                        <Divider style={{backgroundColor: '#3d3b3b'}} />
                        <View style={{marginVertical: 5}}>
                            <Title style={styles.title}>Synopsis</Title>
                            <Text style={styles.synopsis}>{movieDetail.overview}</Text>
                        </View>
                        <View>
                            <Title style={[styles.title, {marginBottom: 10}]}>Related Movies</Title>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.flexDirRow}>
                                {related.map(movie => (
                                    <TouchableOpacity key={movie.id} style={styles.relatedItem} onPress={() => navigation.navigate('Detail', {id: movie.id})}>
                                        <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={styles.img} />
                                        <Text numberOfLines={2} style={{fontSize: 16, marginTop: 5, color: '#fff'}}>{movie.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            );
        } else{
            body = <View style={styles.loadingSec}>
                <Text style={styles.title}>Loading...</Text>
            </View>
        }
        return(
            <SafeAreaView style={styles.detailCont}>
                {body}
            </SafeAreaView>
        );
    }
}

export default Detail;