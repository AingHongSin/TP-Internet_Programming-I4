function findUniversity() {
    const inputElement = document.getElementById("countryInput")
    const dataContainer = document.getElementById("data-container")

    dataContainer.innerHTML = ""

    var uni = inputElement.value

    fetch("http://universities.hipolabs.com/search?country=" + uni).then(async (res) => {
        let data = await res.json()
        console.log(data)   

        data.forEach(element => {
            dataContainer.innerHTML += `
                <div class="data">
                    <h5 id="uniName">${element.name}</h5>
                    <p id="country">(${element.country} - ${element.alpha_two_code})</p>

                    <div class="link-container">
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_275_1639)">
                            <path d="M10.3516 17.3438C11.6016 17.3438 15.0195 12.8516 15.0195 11.1719C15.0195 10.2246 12.9102 8.37891 11.8066 8.37891C11.3281 8.37891 10.5566 9.0625 10 9.0625C9.44336 9.0625 8.19336 7.96875 8.19336 7.49023C8.19336 7.2168 8.42773 7.06055 8.70117 7.06055C9.17969 7.06055 9.93164 7.86133 10.6934 7.86133C11.3281 7.86133 11.6699 7.42188 11.6699 6.78711C11.6699 6.45508 11.4844 6.12305 11.2109 5.69336C12.2168 5.20508 14.2285 4.15039 14.8828 2.80273C14.1504 1.66992 12.207 0.927734 9.94141 0.927734C6.5918 0.927734 3.29102 2.90039 2.99805 4.81445C2.89062 5.83984 3.67188 6.96289 5.03906 8.1543L6.46484 9.39453C6.91406 9.79492 7.17773 9.98047 7.17773 10.2344C7.17773 10.6543 6.70898 10.9473 6.70898 11.4844C6.70898 11.9727 6.94336 12.3926 7.45117 12.7637C9.0332 13.9551 9.41406 14.1211 9.41406 14.4824C9.42383 15.127 9.04297 15.6152 9.04297 16.2109C9.04297 16.748 9.73633 17.3438 10.3516 17.3438ZM9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.5938C5.24414 18.5938 1.32812 14.6777 1.32812 9.96094C1.32812 5.24414 5.23438 1.32812 9.95117 1.32812C14.668 1.32812 18.5938 5.24414 18.5938 9.96094C18.5938 14.6777 14.6777 18.5938 9.96094 18.5938Z" fill="#3083FF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_275_1639">
                            <rect width="19.9219" height="19.9316" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <a href="${element.web_pages[0]}" id="link">${element.web_pages[0]}</a>
                    </div>

                </div>
            `
            
        });
    })
}