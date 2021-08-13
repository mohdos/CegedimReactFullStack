
import './ListingCard.css';


function ListingCard(props)
{
    console.log("Props  ", props);
    return (
        <div className="card" style={{backgroundColor: props.isDone ? "red" : "#dddddd"}}>
            <h1 className={props.isDone ? "isDone" : ""}>
                {props.value}
            </h1>
        </div>
    );
}


export default ListingCard;

