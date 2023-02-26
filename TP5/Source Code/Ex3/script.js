function guess() {
    const name = document.getElementsByName("name")[0].value
    const dataElement = document.getElementById("data-container")
    const loadingElement = document.getElementById("loading")

    loadingElement.hidden = false
    dataElement.innerHTML = ""
    


    fetch("https://api.nationalize.io?name=" + name).then(async (res) => {
        let data = await res.json()
        console.log(data)
        loadingElement.hidden = true

        data.country.forEach(element => {
            dataElement.innerHTML += `
            <div class="data-row">
                <h2 class="country">${element.country_id}</h2>
                <h2 class="percentage">${parseFloat(element.probability * 100).toFixed(2)}%</h2>
            </div>
            `
        });
    })
}