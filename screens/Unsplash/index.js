/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, Image, FlatList, ActivityIndicator} from 'react-native';

import styles from './styles';

class UnsplashGalery extends Component{

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      items: [],
      error: null,
      animating: true,
    };

  }

  _initPictureList = () => {
      const url = 'https://picsum.photos/v2/list';
      this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              items: res,
              error: res.error || null,
              loading: false,
            });
          })
          .catch(error => {
            this.setState({ error, loading: false});
          });
        }


  componentDidMount() {
    this._initPictureList();
  }


render () {
  const { items, loading } = this.state;
  if (!items) {
    return null;
  }
  return (
          (loading === true) ?
            <ActivityIndicator style={styles.container} animating={this.state.animating} size="small" color="#0000ff" /> :
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={items}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <Image style={styles.images} source={{uri: item.download_url}}/>
                  <Text style={styles.imagesAuth}>{item.author}</Text>
                </View>
                  )}
            />
        );
    }
}


export default UnsplashGalery;


