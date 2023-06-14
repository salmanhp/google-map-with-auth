import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LocationForm = ({ setGetLocation }) => {
    const navigate = useNavigate();

    const [inputVal, setInputVal] = useState({
        city: "",
        location: "",
        lat: "",
        lng: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setGetLocation(inputVal);
        inputVal.city !== "" & inputVal.location !== "" ? navigate("/map") : inputVal.lat !== "" & inputVal.lng !== "" ? navigate("/map") : "";
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>
            <form onSubmit={handleSubmit} style={{ width: '1400px' }}>
                <div style={{ width: '100%' }}>
                    <label htmlFor="city">City</label>
                    <div>
                        <select onChange={handleChange} name="city" value={inputVal.city} style={{ width: '100%', padding: '8px 0px 8px 15px', borderRadius: '5px' }} >
                            <option>Select City</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <br /><label htmlFor="location">Select Location</label><br />
                    <small>* for which micromarket analysis is required.</small>
                    <div>
                        <select onChange={handleChange} name="location" value={inputVal.location} style={{ width: '100%', padding: '8px 0px 8px 15px', borderRadius: '5px' }} >
                            <option>Select...</option>
                            <option value="Khadki">Khadki</option>
                            <option value="Pimple Saudagar">Pimple Saudagar</option>
                            <option value="Khadadi">Khadadi</option>
                            <option value="Hinjewadi">Hinjewadi</option>
                        </select>
                    </div>
                </div>
                <p>OR</p>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%' }}>
                        <label htmlFor="latitude">Latitude</label>
                        <div>
                            <input onChange={handleChange} value={inputVal.lat} style={{ width: '99%', padding: '8px 0px 8px 15px', borderRadius: '5px', border: '1px solid gray' }} id="lat" name="lat" type="text" placeholder="Project Latitude" />
                        </div>
                    </div>
                    <div style={{ width: '45%' }}>
                        <label htmlFor="longitude">Longitude</label>
                        <div>
                            <input onChange={handleChange} value={inputVal.lng} style={{ width: '99%', padding: '8px 0px 8px 15px', borderRadius: '5px', border: '1px solid gray' }} id="lng" name="lng" type="text" placeholder="Project Longitude" />
                        </div>
                    </div>
                </div>
                <br /><button style={{ backgroundColor: 'cyan', padding: '8px 18px', borderRadius: '5px', borderColor: 'transparent', cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LocationForm;