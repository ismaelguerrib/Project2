const searchbar = document.getElementById("myinput");

// searchbar.oninput = () => {
//   console.log(searchbar.value);
//   console.log(getClothes());
// };

function getClothes() {
  searchbar.oninput = () => {
    axios
      .get("http://localhost:3000/clothes/api")
      .then(dbRes => {
        const myResult = dbRes.data.filter(oneElement => {
          return oneElement.name
            .toLowerCase()
            .substring(0, searchbar.value.length)
            .includes(searchbar.value.toLowerCase());
        });
        console.log(myResult);
      })
      .catch(dbErr => console.log(dbErr));
  };
}

getClothes();
