import { useState } from "react"

function Counter() {
	const [count, setCount] = useState(0)
	const [otherCount, setOtherCount] = useState(0)

	function handleCount(action) {
		return function () {
			setCount(action === "increment" ? count + 1 : count - 1)
			// if (action === 'increment') {
			//   setCount(count + 1)
			// } else {
			//   setCount(count - 1)
			// }
		}
	}

	function incrementCount() {
		setOtherCount(otherCount + 1)
	}

	function decrementCount() {
		setOtherCount(otherCount - 1)
	}
	return (
		<>
			<h2>{count}</h2>

			<div>
				<button onClick={handleCount("increment")}>Increment</button>
				<button onClick={handleCount("decrement")}>Decrement</button>
			</div>
			<h2>{otherCount}</h2>

			<div>
				<button onClick={incrementCount}>Increment</button>
				<button onClick={decrementCount}>Decrement</button>
			</div>
		</>
	)
}

export default Counter

// function grandParent(cb) {
// 	parent(cb)
// 	function parent(cb) {
// 		child(cb)
// 		function child(cb) {
// 			cb()
// 		}
// 	}
// }

// grandParent(doSomething)

// function doSomething() {
// 	console.log("I am being called by some previous function")
// }

/**
 * Grandparent
 *    |
 *    v
 * Parent
 *   |
 *   v
 * Child
 *   |
 *   v
 * callback()
 *
 */
