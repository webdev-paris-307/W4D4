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

const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
]

function MovieList() {
	const [movies, setMovies] = useState([oneMovie, { title: "-1 and go" }])
	const [title, setTitle] = useState("")
	const [duration, setDuration] = useState(0)
	const [description, setDescription] = useState("")
	const [isGoodMovie, setIsGoodMovie] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const [filter, setFilter] = useState("-1")

	function handleTitle(event) {
		// console.log(event.target.value)
		setTitle(event.target.value)
	}
	function handleDuration(event) {
		// console.log(event.target.value)
		setDuration(event.target.value)
	}
	function handleDescription(event) {
		// console.log(event.target.value)
		setDescription(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		/**
		 * This is the moment in time where the user wants to create a movie
		 */

		if (!title || !description || duration === 0) {
			setTimeout(() => {
				setErrorMessage("")
			}, 2000)
			return setErrorMessage("Please don't send empty fields")
		}

		const newMovie = {
			id: crypto.randomUUID(),
			title: title,
			description,
			duration,
			isGoodMovie,
		}

		// const copy = [...movies]
		// copy.push(newMovie)
		// setMovies(copy)

		setMovies([...movies, newMovie])

		resetFields()
	}

	function resetFields() {
		setDescription("")
		setTitle("")
		setDuration(0)
		setIsGoodMovie(false)
	}

	function handleGoodMovie() {
		setIsGoodMovie(!isGoodMovie)
	}

	function handleFilters(event) {
		console.log(event.target.value)
		setFilter(event.target.value)
		const filteredMovies = movies.filter((movie) => {
			return movie.title.toLowerCase().startsWith(event.target.value)
		})
		setMovies(filteredMovies)
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
					<input value={title} onChange={handleTitle} type="text" id="title" />
				</div>
				<div>
					<label htmlFor="duration">Duration: </label>
					<input
						value={duration}
						onChange={handleDuration}
						type="number"
						id="duration"
					/>
				</div>
				<div>
					<label htmlFor="description">Description: </label>
					<textarea
						onChange={handleDescription}
						value={description}
						id="description"
						cols="30"
						rows="5"></textarea>
				</div>

				<div>
					<label htmlFor="goodMovie">Is it good? </label>
					<input
						type="checkbox"
						id="goodMovie"
						checked={isGoodMovie}
						onChange={handleGoodMovie}
					/>
				</div>

				<p className="error">{errorMessage}</p>
				<button>Create a movie</button>
			</form>

			<div>
				<h3>Filters</h3>
				<select value={filter} onChange={handleFilters} name="" id="">
					<option disabled value="-1">
						Pick a letter
					</option>
					{alphabet.map((letter) => {
						return (
							<option value={letter} key={letter}>
								{" "}
								{letter.toUpperCase()}{" "}
							</option>
						)
					})}
				</select>
			</div>

			{movies.map((movie) => {
				return <OneMovie key={movie.id} movie={movie} />
			})}
		</div>
	)
}

export default MovieList
