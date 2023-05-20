import React, { Fragment, } from 'react';
import { useTheme } from 'react-native-paper';
import MapplsGL from 'mappls-map-react-native';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { MainContainer } from '../UIComponent'
import { ClusterIconFunc } from '../Helper/ClusterIconFunc';
import { ClusterTextFunc } from '../Helper/ClusterTextFunc';



const layerStyles = {
  singlePoint: {
    iconImage: ['get', 'iconImage'],
    iconAllowOverlap: true,
    iconSize: 0.7,
    iconAnchor: 'bottom',
    iconPitchAlignment: 'map',
    iconRotate: ["get", "iconRotate"],
  },

  clusteredPoints: {
    circlePitchAlignment: 'map',

    circleColor: [
      'step',
      ['get', 'point_count'],
      '#51bbd6',
      100,
      '#f1f075',
      750,
      '#f28cb1',
    ],

    circleRadius: ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],

    circleOpacity: 0.84,
    circleStrokeWidth: 2,
    circleStrokeColor: 'white',
  },

  clusterCount: {
    textField: '{point_count}',
    textSize: 12,
    textPitchAlignment: 'map',
  },
};

const MapMarker = () => {
  const theme = useTheme();

  const ImageElement = data?.map((value, _) => (ClusterIconFunc(value)));

  return (
    <Fragment>
      <FocusAwareStatusBar translucent={true} backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <MapplsGL.MapView style={{ flex: 1 }}>
          <MapplsGL.Camera
            zoomLevel={10}
            centerCoordinate={[79.2975136, 19.9673882]}
          />
          {ImageElement}
          <MapplsGL.ShapeSource
            id="earthquakes"
            cluster={true}
            clusterRadius={50}

            shape={{
              type: 'FeatureCollection',
              features: data?.map((value, _) => ({
                type: 'Feature',
                properties: {
                  id: value?.device?.id,
                  iconImage: ClusterTextFunc(value)
                },
                geometry: {
                  type: 'Point',
                  coordinates: [value?.longitude, value?.latitude],
                },
              }
              )),
            }}
            onPress={e => { }}
          >
            <MapplsGL.SymbolLayer
              id="pointCount"
              style={layerStyles.clusterCount}
            />

            <MapplsGL.CircleLayer
              id="clusteredPoints"
              belowLayerID="pointCount"
              filter={['has', 'point_count']}
              style={layerStyles.clusteredPoints}
            />
            <MapplsGL.SymbolLayer
              id="singlePoint"
              filter={['!', ['has', 'point_count']]}
              style={layerStyles.singlePoint}
            />
          </MapplsGL.ShapeSource >
        </MapplsGL.MapView>
      </MainContainer>
    </Fragment >
  )
}

export default MapMarker;


const data = [
  { id: 1, longitude: 79.297476, latitude: 19.967247, type: 'Car', status: 'online' },
  { id: 2, longitude: 79.323493, latitude: 19.944791, type: 'Truck', status: 'idle' },
  { id: 3, longitude: 79.316817, latitude: 19.924812, type: 'Bike', status: 'stopped' },
  { id: 4, longitude: 79.345185, latitude: 19.875338, type: 'Car', status: 'other' },
  { id: 5, longitude: 79.351277, latitude: 19.849475, type: 'Bus', status: 'offline' },
  { id: 6, longitude: 79.404735, latitude: 19.835906, type: 'Car', status: 'moving' },
  { id: 7, longitude: 79.446269, latitude: 19.81946, type: 'Truck', status: 'towing' },
  { id: 8, longitude: 79.520418, latitude: 19.787196, type: 'Bike', status: 'stopped' },
  { id: 9, longitude: 79.546634, latitude: 19.77997, type: 'Car', status: 'moving' },
  { id: 10, longitude: 79.588867, latitude: 19.772162, type: 'Bus', status: 'towing' },
  { id: 11, longitude: 79.480355, latitude: 19.79073, type: 'Pickups', status: 'online' },
  { id: 12, longitude: 79.88065, latitude: 19.558709, type: 'Pickups', status: 'online' },
]

/* 
[[79.297476, 19.967247], [79.310502, 19.968691], [79.323493, 19.944791], [79.316817, 19.924812], [79.343124, 19.886281], [79.345185, 19.875338], [79.340562, 19.867629], [79.351277, 19.849475], [79.367052, 19.840573], [79.404735, 19.835906], [79.426169, 19.817965], [79.446269, 19.81946], [79.480355, 19.79073], [79.520418, 19.787196], [79.531386, 19.780233], [79.546634, 19.77997], [79.558268, 19.771381], [79.588867, 19.772162], [79.63896, 19.74711], [79.669627, 19.723887], [79.670625, 19.715655], [79.682447, 19.713157], [79.689132, 19.719031], [79.716772, 19.720545], [79.780196, 19.677413], [79.799897, 19.681286], [79.815129, 19.676536], [79.828804, 19.664526], [79.831784, 19.615371], [79.862594, 19.584197], [79.871904, 19.584324], [79.88065, 19.558709], [79.915473, 19.535835], [79.913603, 19.53176]]
*/