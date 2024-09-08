import "./style.css"

const PokemonCard = ({ name, image, experience }) => {

    const ColorSwitch = () => {
        if(experience >= 200){
            return "gold"
        }
        if(experience >= 150){
            return "purple"
        }
        if (experience >= 100){
            return "orange"
        }
        return "lightgrey"
    }

    return (
        <div className="container-card-pokemon">
            <h1>name: {name}</h1>
            <h1>experience: <span style={{color: ColorSwitch()}}>{experience}</span></h1>
            <img src={image} />
        </div>

    )
}

export default PokemonCard;