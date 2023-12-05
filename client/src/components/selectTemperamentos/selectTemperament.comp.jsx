import './selectTemperament.css';


function Temperaments({ dogTemperaments }) {  //aca recibimos a allDogs como props
    const temperamentsList = dogTemperaments

    return (
        <select className='select_form' name="temperamentos" >
            {dogTemperaments?.map(temperamento => {
                return (
                    <option className='option_form' value={temperamento}>{temperamento}</option>
                )
            })}
        </select>
    );
}

export default Temperaments;