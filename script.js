function getResults(searchTerm) {

    // const url = "https://www.loc.gov/search?fo=json&q=" + searchTerm;
    const url = `https://www.loc.gov/search?fo=json&q=${searchTerm}`;
    console.log(url);

    fetch(url, {})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.results.forEach(item => {
                console.log(item.url)
            })
        });
}
getResults();

document.querySelector("#searchInput")
    .addEventListener("change", function (event) {
        console.log(event.target.value);
        getResults(event.target.value);
    });