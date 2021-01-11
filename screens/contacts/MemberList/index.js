/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';

import styles from './styles';

class ListScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
     loading: true,
     data: [],
     page: 1,
     seed: 1,
     error: null,
     animating: true,
   };
 }

 _getUsers = () => {
  const { page, seed } = this.state;
  const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=100`;
  this.setState({ loading: true });

  setTimeout( () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false});
      });
  }, 1500);
 }

 _clearLoader(time){
  setTimeout(()=> this.setState({
       animating: false,
  }), time);
}

componentDidMount() {
  this._getUsers();
  this._clearLoader(3500);
}

keyExtractor = (item, index) => index.toString()
renderItem = ({ item }) => (
  <View style={styles.list}>
    <Text style={styles.listText} onPress={() => this.props.navigation.navigate('DetailScreen', {item})}>{item.name.first} {item.name.last}</Text>
  </View>
)

render (){
  return (
          (this.state.loading === true) ?

            <ActivityIndicator style={styles.container} animating={this.state.animating} size="small" color="#0000ff" /> :

            <View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.renderItem}
              />
            </View>
        );
    }
}

export default ListScreen;
