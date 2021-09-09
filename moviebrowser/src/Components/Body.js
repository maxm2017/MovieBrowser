const Body = ({text}) => {
    return(
        <div className = "container">
            <div className = "row">
            <div className = "col-lg-8 offset-lg-2 my-5">
                <p className = "lead">
                {text}
                </p>
            </div>
            </div>
        </div>
    )
}

export default Body;