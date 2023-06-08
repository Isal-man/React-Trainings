/* eslint-disable react/prop-types */
const Button = (props) => {
    return <button onClick={props.onClick}>{props.title}</button>
}

export default Button