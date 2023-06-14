import { useState } from 'react';
import mapView from "../assets/map-view.png";
import listView from "../assets/list-view.png";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const Map = ({ getLocation }) => {
    const [viewStore, setViewStore] = useState("Map View");

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY
    })
    const handleListView = () => {
        setViewStore("List View");
    }
    const handleMapView = () => {
        setViewStore("Map View");
    }

    const data = [
        {
            location: "Khadki",
            name: "Sun Shine Green",
            lat: 18.56639775919182,
            lng: 73.83851296931093
        },
        {
            location: "Khadki",
            name: "Mont Vert",
            lat: 18.56448825647721,
            lng: 73.83767986997688
        },
        {
            location: "Pimple Saudagar",
            name: "Bhoomi Allium",
            lat: 18.59941482022125,
            lng: 73.79228913953241
        },
        {
            location: "Khadadi",
            name: "Satin Brick",
            lat: 18.564528299860857,
            lng: 73.95034719553216
        },
        {
            location: "Hinjewadi",
            name: "Eon Homes",
            lat: 18.579354440961446,
            lng: 73.68963942242554
        }
    ]



    if (!isLoaded) return <div>Loading...</div>
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '10%', paddingTop: '40px' }}>
                <button style={{ fontFamily: 'sans-serif', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', backgroundColor: 'transparent', border: 'none' }} onClick={handleMapView}>
                    <img src={mapView} alt="map-view" />
                    Map View
                </button><br /><br />
                <button style={{ fontFamily: 'sans-serif', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', backgroundColor: 'transparent', border: 'none' }} onClick={handleListView}>
                    <img src={listView} alt="list-view" />
                    List View
                </button>
            </div>
            {viewStore == "Map View" ? <GoogleMap
                zoom={11}
                center={{ lat: 18.56639775919182, lng: 73.83851296931093 }}
                mapContainerStyle={{ width: '100%', height: '90vh' }}
            >

                {getLocation.lat ? data.filter((filterData) => getLocation.lat == filterData.lat).map((data, index) => (
                    <Marker position={{ lat: data.lat, lng: data.lng }} label={{ text: data.name, color: '#F9F54B' }} />
                )) :
                    data.filter((filterData) => getLocation.location == filterData.location).map((data, index) => (
                        <Marker key={index} position={{ lat: data.lat, lng: data.lng }} label={{ text: data.name, color: '#F9F54B' }} />
                    ))}

            </GoogleMap> :

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>

                    {getLocation.location && <table border="3">
                        <thead>
                            <th>City</th>
                            <th>Location</th>
                            <th>Project Name</th>
                            <th>Coordinates</th>
                        </thead>
                        <tbody>
                            {data?.filter((filterData) => getLocation.location == filterData.location).map((data, index) => (
                                <tr key={index}>
                                    <td>Pune</td>
                                    <td>{data.location}</td>
                                    <td>{data.name}</td>
                                    <td>{data.lat}, {data.lng}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}

                    {getLocation.lat && <table border="3">
                        <thead>
                            <th>City</th>
                            <th>Location</th>
                            <th>Project Name</th>
                            <th>Coordinates</th>
                        </thead>
                        <tbody>
                            {data?.filter((filterData) => getLocation.lat == filterData.lat).map((data, index) => (
                                <tr key={index}>
                                    <td>Pune</td>
                                    <td>{data.location}</td>
                                    <td>{data.name}</td>
                                    <td>{data.lat}, {data.lng}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}

                </div>}
        </div>
    );
}

export default Map;


