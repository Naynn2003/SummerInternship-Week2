function Details(props){
    return(
        <div>
            <h1>hello , {props.name} </h1>
        </div>
    );
}

function Multipledata(props){
    return(
        <div>
            <p>Hello , {props.name} your email is : {props.email} </p>
        </div>
    );
}

export default Details;
export {Multipledata}

