import { useState } from "react";
import styles from "../DropdownMenu/DropdownMenu.module.css"
import axios from "axios"

const DropdownMenu = () => {
    const [responseData, setResponseData] = useState(null);


    const idSearch = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get("https://swapi.dev/api/people/1/");
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.forInput}>
                    <h1>Search for:</h1>
                    <select name="" id="" className={styles.options}>
                        <option value=""  > People</option>
                        <option value="" >Films</option>
                        <option value="" >Starships</option>
                        <option value="" >Vehicles</option>
                        <option value="" >Species</option>
                        <option value="" >Planets</option>
                    </select>
                </div>
                <div>
                    <form onSubmit={idSearch} action="" className={styles.forSearch}>
                        <h1>Id:</h1>
                        <input type="number" name="" id="" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div >
            {responseData && (
                    <div className={styles.list}>
                        <h1>{responseData.name}</h1>
                        <p>Height: {responseData.height}</p>
                        <p>Weight: {responseData.mass}</p>
                        <p>Hair Color: {responseData.hair_color}</p>
                        <p>Skin Color: {responseData.skin_color}</p>
                    </div>
                )}
            
            </div>
        </div>

    )
}
export default DropdownMenu