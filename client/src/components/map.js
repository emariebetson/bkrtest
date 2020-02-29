import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const BarMarker = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);
class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 41.8781,
            lng: -87.6298
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDwBjk0MTivWoOzPayaTMA8-vwQ-V_sP3U' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <BarMarker
                        lat={41.9435}
                        lng={-87.6496}
                        text={'Roscoes'}
                    />
                    <BarMarker
                        lat={41.9433}
                        lng={-87.6491}
                        text={'Sidetrack'}
                    />
                    <BarMarker
                        lat={41.9453}
                        lng={-87.6496}
                        text={'Hydrate'}
                    />
                    <BarMarker
                        lat={41.9400}
                        lng={-87.6537}
                        text={'Berlin'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;