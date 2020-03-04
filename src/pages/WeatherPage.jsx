import React, { useState }  from 'react';
import SearchBox from '../components/SearchBox';
import WeatherWidget from '../components/WeatherWidget';
import { fetchWeather } from '../services';

const WeatherPage = () => {

    // useEffect(() => {
    // }, []);

    const [ form, setForm ] = useState({location: ''});

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState({status: false, message: ''});
    const [ weather, setWeather ] = useState({data: ''})


    const handlerOnChange = ({target}) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handlerOnSubmit = event => {
        event.preventDefault();
        setLoading(true);
        fetchWeather(form.location)
            .then(response => {

                console.log('response: ', response.data)

                setWeather({data: response.data})
                setLoading(false);
            },
            err => {
                console.log('-------->', err)
                setError({
                    error: true,
                    message: err.response
                })
                console.log(error)
                setLoading(false);

            })

    }

    return (
        <div>
            <SearchBox
                handlerOnSubmit={handlerOnSubmit} 
                handlerOnChange={handlerOnChange} 
                loading={loading}
                form={form} 
            />
            <WeatherWidget
                loading={loading}
                weather={weather}
            />
        </div>
    )

}

export default WeatherPage;
