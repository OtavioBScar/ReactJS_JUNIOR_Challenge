import "./style.css"

const PokemonCard = ({ name, image, experience, type }) => {

    const ColorSwitch = () => {
        if (experience >= 200) {
            return "gold"
        }
        if (experience >= 150) {
            return "#b808b8"
        }
        if (experience >= 100) {
            return "orange"
        }
        return "lightgrey"
    }

    const typeDictionary = {
        "normal": "linear-gradient(to bottom, #363b33, #c2ccbe)",
        "fire": "linear-gradient(to bottom, #5a4629, #dd6413)",
        "water": "linear-gradient(to bottom, #27484d, #5066c7ec)",
        "bug": "linear-gradient(to bottom, #3d4b41, #694003ec)",
        "grass": "linear-gradient(to bottom, #225244, #05c435ec)"
    }

    return (
        <div className="container-card-pokemon" style={{ background: typeDictionary[type] }}>
            <h1> <span style={{ color: ColorSwitch() }}>{name}</span></h1>
            <h1>experience: <span style={{ color: ColorSwitch() }}>{experience}</span></h1>
            <img src={image} />
        </div>

    )
}

export default PokemonCard;