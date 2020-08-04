import React ,{useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
 import {fetchCountries} from '../../api';

function CountryPicker({handleCountryChange}) {

    const [fetchedCountries, setfetchCountries] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            setfetchCountries(await fetchCountries());

        }
        fetchApi();
        //changes only when setfetchCountries changes
    },[setfetchCountries]);

    return (
        <div>
           <FormControl className={styles.formControl}>
                <NativeSelect className={styles.omg} defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {/*i is a index or a counter*/}
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </NativeSelect>
           </FormControl>
        </div>
    )
}

export default CountryPicker
