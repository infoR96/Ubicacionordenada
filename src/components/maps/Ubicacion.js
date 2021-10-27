import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


export const Ubicacion = () => {
    const containerStyle = {
        width: '100%vw',
        height: '1000px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCkJi7CPzOTFvk6Jo9E2AFX3vvctERV2bA"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}


