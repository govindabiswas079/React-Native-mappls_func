import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { point } from '@turf/helpers';
import { lineString as makeLineString } from '@turf/helpers';
import RouteSimulator from '../Helper/RouteSimulatorV2';
import carIcon from '../assets/images/car.png';
import bearing from '@turf/bearing';
import bbox from '@turf/bbox';
import Polyline from 'mappls-polyline';
import { Slider } from 'react-native-elements';
import MapplsGL from 'mappls-map-react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 3,
  },
  textCon: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorGrey: {
    color: '#000000'
  },
  colorYellow: {
    color: '#dc143c'
  },
  viewContainer: {
    backgroundColor: 'transparent',
    bottom: 80,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    left: 0,
    position: 'absolute',
    right: 0,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  buttonCnt: {
    backgroundColor: 'transparent',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    position: 'absolute',
    right: 0,
  },
});

const layerStyles = {
  origin: {
    circleRadius: 10,
    circleColor: 'white',
  },
  destination: {
    circleRadius: 10,
    circleColor: 'green',
  },
  route: {
    lineColor: 'red',
    lineCap: "round",
    lineWidth: 5,
    lineOpacity: 0.84,
  },
  progress: {
    lineColor: '#314ccd',
    lineWidth: 5,
  },
};
let routeSimulator;
class MapAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maximumValue: null,
      distance: 0,
      route: null, // {"coordinates": [[79.297476, 19.967247], [79.310502, 19.968691], [79.323493, 19.944791], [79.316817, 19.924812], [79.343124, 19.886281], [79.345185, 19.875338], [79.340562, 19.867629], [79.351277, 19.849475], [79.367052, 19.840573], [79.404735, 19.835906], [79.426169, 19.817965], [79.446269, 19.81946], [79.480355, 19.79073], [79.520418, 19.787196], [79.531386, 19.780233], [79.546634, 19.77997], [79.558268, 19.771381], [79.588867, 19.772162], [79.63896, 19.74711], [79.669627, 19.723887], [79.670625, 19.715655], [79.682447, 19.713157], [79.689132, 19.719031], [79.716772, 19.720545], [79.780196, 19.677413], [79.799897, 19.681286], [79.815129, 19.676536], [79.828804, 19.664526], [79.831784, 19.615371], [79.862594, 19.584197], [79.871904, 19.584324], [79.88065, 19.558709], [79.915473, 19.535835], [79.913603, 19.53176]], "type": "LineString"},
      currentPoint: null,// [79.297476, 19.967247],
      routeSimulator: null,
      bearing: 0,
      sourceCoordinates: '79.2975136,19.9673882',
      destinationCoordinates: '79.910747,19.531277',
      routeCoordinates: [],// [[79.297476, 19.967247], [79.310502, 19.968691], [79.323493, 19.944791], [79.316817, 19.924812], [79.343124, 19.886281], [79.345185, 19.875338], [79.340562, 19.867629], [79.351277, 19.849475], [79.367052, 19.840573], [79.404735, 19.835906], [79.426169, 19.817965], [79.446269, 19.81946], [79.480355, 19.79073], [79.520418, 19.787196], [79.531386, 19.780233], [79.546634, 19.77997], [79.558268, 19.771381], [79.588867, 19.772162], [79.63896, 19.74711], [79.669627, 19.723887], [79.670625, 19.715655], [79.682447, 19.713157], [79.689132, 19.719031], [79.716772, 19.720545], [79.780196, 19.677413], [79.799897, 19.681286], [79.815129, 19.676536], [79.828804, 19.664526], [79.831784, 19.615371], [79.862594, 19.584197], [79.871904, 19.584324], [79.88065, 19.558709], [79.915473, 19.535835], [79.913603, 19.53176]],
      isMounted: false,
      isDisable: false,
      isStartButton: false,
      isSpeed: 0.9,

    };

    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.sliderHandler = this.sliderHandler.bind(this);
    this.onPause = this.onPause.bind(this)
  }

  async componentDidMount() {
    this.callApi();
    this.setState({
      isMounted: true
    })
  }

  callApi() {
    MapplsGL.RestApi.direction({
      origin: this.state.sourceCoordinates,
      destination: this.state.destinationCoordinates,
      resource: 'route_eta',
      profile: 'driving',
      overview: 'simplified',
    }).then(response => {
      console.log(Polyline.toGeoJSON(response.routes[0].geometry, 6).coordinates[0], { nearestIndex: 0 })
      this.setState({
        route: Polyline.toGeoJSON(response.routes[0].geometry, 6),
        routeCoordinates: Polyline.toGeoJSON(response.routes[0].geometry, 6).coordinates,
        currentPoint: point(Polyline.toGeoJSON(response.routes[0].geometry, 6).coordinates[0], { nearestIndex: 0 })
      });
      // if(!this.state.routeSimulator) {
      let routeSim = RouteSimulator(Polyline.toGeoJSON(response.routes[0].geometry, 6), this?.state?.isSpeed, this.state.isMounted)
      routeSim.addListener(currentPoint => {
        console.log("point" + currentPoint)
        if (this.state.currentPoint && this.state.isMounted == true) {
          let prevPoint = this.state.currentPoint;
          if (prevPoint.coordinates != currentPoint.coordinates) {

            let bear = bearing(currentPoint, prevPoint);
            currentPoint.properties.bearing = bear;
            this.setState({ bearing: bear })
          } else {
            currentPoint.properties.bearing = this.state.bearing;
          }
        }

        this.setState({ currentPoint });
      });
      this.setState({ routeSimulator: routeSim })
      // }
    }).catch(e => {

    });

  }

  componentWillUnmount() {
    this.setState({
      isMounted: false
    })
    if (this.state.routeSimulator) {
      this.state.routeSimulator.stop();
    }
  }

  renderOrigin() {
    if (!this.state.route) {
      return null;
    }

    let backgroundColor = 'red';

    if (this.state.currentPoint) {
      backgroundColor = '#314ccd';
    }

    const style = [layerStyles.origin, { circleColor: backgroundColor }];

    return (
      <MapplsGL.ShapeSource
        id="origin"
        shape={point(this.state.routeCoordinates[0])}>
        <MapplsGL.Animated.CircleLayer
          id="originInnerCircle"
          style={style}
        />
      </MapplsGL.ShapeSource>
    );
  }

  renderRoute() {
    if (!this.state.route) {
      return null;
    }

    return (
      <Fragment>
        <MapplsGL.ShapeSource id="routeSource" shape={this.state.route}>
          <MapplsGL.LineLayer
            id="routeFill"
            style={layerStyles.route}
            belowLayerID="originInnerCircle"
          />
        </MapplsGL.ShapeSource>
      </Fragment>
    );
  }

  renderCurrentPoint() {
    if (!this.state.currentPoint) {
      return;
    }

    return (
      <MapplsGL.ShapeSource
        id="symbolLocationSource"
        shape={this.state.currentPoint}>
        <MapplsGL.SymbolLayer
          id="symbolLocationSymbols"
          minZoomLevel={1}
          style={{
            iconRotationAlignment: 'map',
            iconImage: carIcon,
            iconIgnorePlacement: true,
            iconAllowOverlap: true,
            iconAnchor: 'center',
            iconRotate: ["get", "bearing"],
            iconSize: 0.07,
          }}
        />
      </MapplsGL.ShapeSource>
    );
  }

  renderProgressLine() {
    if (!this.state.currentPoint) {
      return null;
    }

    const { nearestIndex } = this.state.currentPoint.properties;
    const coords = this.state.route.coordinates.filter(
      (c, i) => i <= nearestIndex,
    );
    coords.push(this.state.currentPoint.geometry.coordinates);
    if (coords.length < 2) {
      return null;
    }


    const lineString = makeLineString(coords);

    return (
      <MapplsGL.Animated.ShapeSource id="progressSource" shape={lineString}>
        <MapplsGL.Animated.LineLayer
          id="progressFill"
          style={layerStyles.progress}
          aboveLayerID="routeFill"
        />
      </MapplsGL.Animated.ShapeSource>
    );
  }

  onStop() {
    if (this.state.routeSimulator) {
      this.state.routeSimulator.stop();
    }
  }
  onPause() {
    if (this.state.routeSimulator) {
      this.state.routeSimulator.pause();
    }
  }

  onHandleSpeed(event) {
    this.setState({ isSpeed: event });
    this.onPause();
    this.onStop();
  }

  onStart() {
    this.state.isStartButton = true;
    const bounds = bbox(this.state.route);
    this.camera.fitBounds(
      [bounds[0], bounds[1]],
      [bounds[2], bounds[3]],
      0,
      40,
    );
    if (!this.state.routeSimulator) {
      routeSimulator = new RouteSimulator(this.state.route, this?.state?.isSpeed, this.state.isMounted);
      routeSimulator.addListener(currentPoint => {
        if (this.state.currentPoint && this.state.isMounted == true) {
          let prevPoint = this.state.currentPoint;
          let bear = bearing(currentPoint, prevPoint);
          currentPoint.properties.bearing = bear;
          this.setState({ bearing: bear })
        }
        this.setState({ currentPoint });
      });
      routeSimulator.start();
      this.setState({ routeSimulator: routeSimulator });
    } else {
      new RouteSimulator(this.state.route, this?.state?.isSpeed, this.state.isMounted);
      this.state.routeSimulator.addListener(currentPoint => {
        if (this.state.currentPoint && this.state.isMounted == true) {
          let prevPoint = this.state.currentPoint;
          let bear = bearing(currentPoint, prevPoint);
          currentPoint.properties.bearing = bear;
        }
        this.setState({ currentPoint });
        // this.setState({ center: currentPoint?.geometry?.coordinates });
        // console.log(currentPoint?.geometry?.coordinates)
      });
      this.state.routeSimulator.resume(this?.props?.isSpeed);
    }
  }


  renderActions() {
    let length = this.state.routeCoordinates.length > 0 ? ((this.state.routeCoordinates.length) - 1) : 0;
    const maxvalue = Object.values(this.state.routeCoordinates).filter((array) => array.length > 0).length;
    let index = 0
    if (this.state.currentPoint) {
      if (this.state.currentPoint.properties && this.state.currentPoint.properties.nearestIndex) {
        index = this.state.currentPoint.properties.nearestIndex
      }
    }
    return (
      <View style={[styles.viewContainer, { backgroundColor: '#FFFFFF' }]}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <View style={{ flexGrow: 1 }} />
          <Button
            raised
            title="1X"
            onPress={() => this.onHandleSpeed(0.002)}
            style={styles.button}
            disabled={!this.state.route}
          />
          <View style={{ flexGrow: 1 }} />
          <Button
            raised
            title="2X"
            onPress={() => this.onHandleSpeed(this.state.isSpeed * 2)}
            style={styles.button}
            disabled={!this.state.route}
          />
          <View style={{ flexGrow: 1 }} />
          <Button
            raised
            title="4X"
            onPress={() => this.onHandleSpeed(this.state.isSpeed * 4)}
            style={styles.button}
            disabled={!this.state.route}
          />
          <View style={{ flexGrow: 1 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <View style={{ flexGrow: 1 }} />
          <Button
            raised
            title="Start"
            onPress={this.onStart}
            style={styles.button}
            disabled={!this.state.route}
          />
          <View style={{ flexGrow: 1 }} />
          <Button
            raised
            title="Pause"
            onPress={this.onPause}
            style={styles.button}
            disabled={!this.state.route}
          />
          <View style={{ flexGrow: 1 }} />
          <Button
            raised
            title="Stop"
            onPress={this.onStop}
            style={styles.button}
            disabled={!this.state.route}
          />
          <View style={{ flexGrow: 1 }} />
        </View>
        <Slider
          style={{ width: 300 }}
          maximumValue={length}
          minimumValue={0}
          step={1}
          value={index}
          thumbTintColor='#ff7f50'
          maximumTrackTintColor='#d3d3d3'
          minimumTrackTintColor='#ff7f50'
          onValueChange={val => this.sliderHandler(val)}
        />
        <View style={styles.textCon}>
          <Text style={styles.colorGrey}>{0}</Text>
          <Text style={styles.colorYellow}>
            {index}
          </Text>
          <Text style={styles.colorGrey}>{length}</Text>
        </View>

      </View>


    );
  }

  sliderHandler(val) {
    if (this.state.routeSimulator) {
      this.setState({ distance: val })
      this.state.routeSimulator.setTrackingProgressIndex(val)
    }
  }

  renderDestination() {
    if (!this.state.route) {
      return null;
    }

    return (
      <MapplsGL.ShapeSource
        id="destination"
        shape={point(this.state.routeCoordinates[this.state.routeCoordinates.length - 1])}>
        <MapplsGL.CircleLayer
          id="destinationInnerCircle"
          style={layerStyles.destination}
        />
      </MapplsGL.ShapeSource>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
        <MapplsGL.MapView style={{ flex: 1 }}>
          <MapplsGL.Camera
            zoomLevel={16}
            ref={c => (this.camera = c)}
            centerCoordinate={[79.2975136, 19.9673882]}
          />

          {this.renderOrigin()}
          {this.renderRoute()}
          {this.renderCurrentPoint()}
          {this.renderProgressLine()}
          {this.renderDestination()}
        </MapplsGL.MapView>
        {this.renderActions()}

      </View>
    );
  }
}

export default MapAnimation;