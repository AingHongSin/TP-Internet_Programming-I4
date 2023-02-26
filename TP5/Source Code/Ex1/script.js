function getActivity() {

    const activity = document.getElementById("acivityName")
    const type = document.getElementById("type")
    const participaint = document.getElementById("participaint")
    const price = document.getElementById("price")
    const link = document.getElementById("link")

    fetch("https://www.boredapi.com/api/activity").then( async (response) => {
        let data = await response.json()
        console.log(data)

        activity.innerHTML = `<b>${data.activity}</b>`
        type.innerHTML = data.type
        participaint.innerHTML = data.participaint
        price.innerHTML = data.price
        link.innerHTML = data.link
        
    })

}