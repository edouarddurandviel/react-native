/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React, {Component} from 'react';
import { Text } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import { Col, Row, Grid } from '../../../react-native-easy-grid';
import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

//const { width, height } = Dimensions.get('window');


class DetailScreen extends Component {

  constructor( props ){
    super(props);
  }


render () {
  const { item } = this.props.route.params;
  const latitude = Number(item.location.coordinates.latitude);
  const longitude =  Number(item.location.coordinates.longitude);

  const coord = {
    latitude: latitude,
    longitude: longitude,
  };


  return (
        <Grid style={styles.grid}>
        <Row size={0.2}>
          <Col style={{width: 50}}>
              <Icon style={styles.picture} name="person-circle-outline" size={50} />
          </Col>
          <Col>
            <Text style={styles.title}>{item.name.title} {item.name.first} {item.name.last}</Text>
          </Col>
        </Row>
        <Row size={0.06}>
            <Text style={styles.description}>Adresse: {item.location.street.number}, {item.location.street.name}</Text>
        </Row>
        <Row size={0.08}>
          <Text style={styles.description}>{item.location.postcode} {item.location.city}</Text>
        </Row>
        <Row size={0.08} style={styles.beerRow}>
            <Col style={{width: 25}}><Icon style={styles.beer} name="beer-outline" size={20} /></Col>
            <Col><Text style={styles.count}>{item.name.last}</Text></Col>
        </Row>
        <Row>
        <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
                initialRegion={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 20,
                  longitudeDelta: 20,
                }}
          ><Marker
              coordinate={coord}
              title={item.name.title}
              description={item.name.title}
        /></MapView>

       </Row>
        </Grid>
        );
    }
}

export default DetailScreen;


