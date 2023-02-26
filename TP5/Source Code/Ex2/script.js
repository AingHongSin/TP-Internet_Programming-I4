function guess() {
    const nameInputed = document.getElementsByName("Name")[0]
    const nameElement = document.getElementById("nameDisplay")
    const genderElement = document.getElementById("gender")
    const probablityElement = document.getElementById("probability")
    const loadingElement = document.getElementById("loading")

    var name = nameInputed.value

    
    genderElement.hidden = true
    probablityElement.hidden = true
    loading.hidden = false
    
    nameElement.innerHTML = name

    fetch("https://api.genderize.io?name=" + name).then(async (res) => {
        let data = await res.json()

        console.log(data)
        loadingElement.hidden = true
        genderElement.hidden = false
        probablityElement.hidden = false
        genderElement.innerHTML = data.gender;
        probablityElement.innerHTML = `${data.probability * 100}%`
    })
}