import React from 'react';
import { Container } from 'react-bootstrap';


const WeatherWidget = props => {
    
    console.log(props.weather)
    
    return (
        <Container>
            {
                props.loading ? 
                'Cargando...':
                <div>
                    {props.weather.data.weather && props.weather.data.weather[0].description}
                    {props.weather.data.weather && props.weather.data.weather[0].description}
                </div> 
            }
        </Container>
    );
}

export default WeatherWidget;