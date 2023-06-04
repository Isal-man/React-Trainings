import './Button.css'

/* eslint-disable react/prop-types */
const TombolLogin = (props) => {
    return <button className="btn" onClick={props.onClick}>{props.name}</button>;
};

export default TombolLogin