import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';

const ViewPoint = () => {
    
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const history = useHistory();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInitialPosition([latitude, longitude]);
        })
    }, []);

    return (
        <div id="page-create-point">
            <header>
                <img src={ logo } alt="Ecoleta" />
            
            <Link to="/">
                <FiArrowLeft />
                Voltar para home
            </Link>
            </header>

            <form>
                <h1>Pontos de coleta cadastrados</h1>

                <fieldset>

                    { initialPosition[0] !== 0 && (
                        <Map center={initialPosition} zoom={19.75} onClick={() => {}}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </Map>
                    )}
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2>
                        <span>Selecione um ou mais ítens abaixo</span>
                    </legend>
                    

                </fieldset>

                
            </form>
        </div>
    );
}

export default ViewPoint;