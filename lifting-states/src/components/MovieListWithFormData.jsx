import { useState } from "react"
import OneMovie from "./OneMovie"
const oneMovie = {
	id: crypto.randomUUID(),
	title: "Barbie",
	duration: 90,
	description: "Barbie and Ken checkout the fact that the world is Patriarcal",
	isGoodMovie: true,
	// cast: ["Margot Robbie", "Ryan Gosling"],
}

function MovieList() {
	const [movies, setMovies] = useState([oneMovie])
	const [dataForm, setDataForm] = useState({
		title: "",
		duration: 0,
		description: "",
		isGoodMovie: false,
	})

	function handleSubmit(event) {
		event.preventDefault()
		/**
		 * This is the moment in time where the user wants to create a movie
		 */
		const newMovie = {
			id: crypto.randomUUID(),
			title: dataForm.title,
			description: dataForm.description,
			duration: dataForm.duration,
			idGoodMovie: dataForm.isGoodMovie,
		}

		// const copy = [...movies]
		// copy.push(newMovie)
		// setMovies(copy)

		setMovies([...movies, newMovie])
	}

	function handleChange(event) {
		const key = event.target.id
		const value = event.target.value
		console.log(event.target.id, event.target.value)
		// setDataForm({ ...dataForm, [event.target.id]: event.target.value })
		setDataForm({ ...dataForm, [key]: value })
	}
	function handleCheckedChange(event) {
		const key = event.target.id
		const checked = event.target.checked
		setDataForm({ ...dataForm, [key]: checked })
	}

	return (
		<div>
			<h1>Moviiies !</h1>

			<form onSubmit={handleSubmit}>
				<div>
					{/* Every input is controlled
						It means that they need to have value set by a state
						They need an onChange behaviour to modify the associated state
					*/}
					<label htmlFor="title">Title: </label>
					<input
						value={dataForm.title}
						onChange={handleChange}
						type="text"
						id="title"
					/>
				</div>
				<div>
					<label htmlFor="duration">Duration: </label>
					<input
						value={dataForm.duration}
						onChange={handleChange}
						type="number"
						id="duration"
					/>
				</div>
				<div>
					<label htmlFor="description">Description: </label>
					<textarea
						onChange={handleChange}
						value={dataForm.description}
						id="description"
						cols="30"
						rows="5"></textarea>
				</div>

				<div>
					<label htmlFor="goodMovie">Is it good? </label>
					<input
						type="checkbox"
						id="goodMovie"
						checked={dataForm.isGoodMovie}
						onChange={handleCheckedChange}
					/>
				</div>

				<button>Create a movie</button>
			</form>

			{movies.map((movie) => {
				return <OneMovie key={movie.id} movie={movie} />
			})}
		</div>
	)
}

export default MovieList
