/* eslint-disable react/prop-types */
// CastCard css
import './CastCard.css'

const CastCard = (props) => {
    const { realName, castName, imgUrl } = props

    return(
        <div className="castcard-wrapper">
            <img src={imgUrl} alt={realName} className="image" />
            <h2>{realName} <p style={{ display: "inline", fontWeight: "lighter" }}>as</p> {castName}</h2>
        </div>
    )
}

export default CastCard