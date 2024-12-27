// Using async/await
// fetchData();
async function fetchData() {
	try {
		const pokemonName = document.getElementById("pokeman").value.toLowerCase();
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		if (!response.ok) {
			throw new Error("Could not fetch resource");
		}
		const data = await response.json();
		pokemonSprite = data.sprites.front_default;
		const imgFile = document.getElementById("pokemonSprite");
		imgFile.src = pokemonSprite;
		imgFile.style.display = "block";
	} catch (error) {
		const dvErr = document.getElementById("err");
		dvErr.textContent = `Opps ${error}`;
	}
}

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error("Could not fetch resource");
// 		}
// 		return response.json();
// 	})
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error(error));
