export default function Square(props) {
    return (
        <button className="square" id={props.id} onClick={props.onClick} key={props.keyVal}>
            {props.value} 
        </button>
    );
}