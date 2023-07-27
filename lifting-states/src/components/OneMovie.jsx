import React from "react"

function OneMovie(props) {
	const movie = props.movie
	return (
		<div>
			<h2>{movie.title}</h2>
			<p>Duration: {movie.duration}</p>
			<p>{movie.description}</p>
			<p>{movie.isGoodMovie ? "It's a good movie" : "Pass..."}</p>
		</div>
	)
}

export default OneMovie
