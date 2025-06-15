function Card(props){
return(
    <div className="card">
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
        <p>This card is: {props.num > 50 ? "High" : "Low"}</p>
    </div>
);
}
export default Card