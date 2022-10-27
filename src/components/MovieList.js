import './MovieList.css';
function MovieList(props){
    console.log(props.movies);
    const AddFavourite = props.AddFavourite;
    return(
    props.movies.map((elem,index)=>{
        return (<div className="image-container d-flex justify-content-start m-3" key={index}>
            <img src={elem.Poster} alt="movie"/>
            <div className='overlay d-flex align-items-center justify-content-center' onClick={()=>{
                props.addFavouriteMovie(elem);
            }}>
                <AddFavourite/>
			</div>
        </div>)
        })
    )
}
export default MovieList