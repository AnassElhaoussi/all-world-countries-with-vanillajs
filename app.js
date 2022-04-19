
const mainSection = document.querySelector(".main-section"),
labelButton = mainSection.querySelector(".label button"),
inputField = mainSection.querySelector("input"),
regionsOptions = mainSection.querySelectorAll(".options a:not(.all)"),
countriesEl = document.querySelector(".countries-container"),
toggleBtn = document.querySelector(".modes"),
viewAll = document.querySelector(".all")

let api;



const displayCountry = countries => {

    countries.forEach(country => {
    const countryEl = document.createElement('div')
    countryEl.classList.add('card')

    

    
    

    countryEl.innerHTML = `
                <img src="${country.flag}" alt="">
                <div class="infos">
                    <h3 class="country-name">${country.name}</h3>
                    <div class="details">
                        <div class="population detail">
                            <span>Population:</span>
                            <p>${country.population}</p>
                        </div>
                        <div class="region detail">
                            <span>Region:</span>
                            <p>${country.region}</p>
                        </div>
                        <div class="capital detail">
                            <span>Capital:</span>
                            <p>${country.capital}</p>
                        </div>
                    </div>
                </div>
`
countryEl.addEventListener('click', () => {
    const detailsPage = document.querySelector(".details-container")
     countriesEl.classList.add('active')
     mainSection.classList.add("active")
     detailsPage.classList.remove("active")

    
    displayDetailsPageCountry(country)
    

    })
    

    countriesEl.appendChild(countryEl)       
    });

    

}


const displayDetailsPageCountry = country => {
    const detailsBody = document.querySelector(".details-text")
    const detailsImage = document.querySelector(".details-container img")

    detailsImage.src = country.flag

    detailsBody.innerHTML = `
    <h3 class="details-country-name">${country.name}</h3>
                    <div class="population detail">
                        <span>Population:</span>
                        <p>${country.population}</p>
                    </div>
                    <div class="region detail">
                        <span>Region:</span>
                        <p>${country.region}</p>
                    </div>
                    <div class="capital detail">
                        <span>Capital:</span>
                        <p>${country.capital}</p>
                    </div>

    `

    
}



const requestApi = () => {
    api = `https://restcountries.com/v2/all`
    fetchData()
    
}


const fetchData = () => {
    fetch(api).then(response => {
        return response.json()
    }).then(data => {
        displayCountry(data)
        
    })
}

requestApi()


labelButton.addEventListener('click' ,() => {
    mainSection.classList.toggle("isactive")
})

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark")
})

inputField.addEventListener('input', e => {
    const {value} = e.target
    const countryName = document.querySelectorAll(".country-name")

    countryName.forEach(name => {
        console.log(name.innerHTML);
        if(name.innerHTML.toLowerCase().includes(value.toLowerCase())){
            name.parentElement.parentElement.style.display = "block"

            
        } else {
            name.parentElement.parentElement.style.display = "none"

        }
        

    })
})



regionsOptions.forEach(option => {
    option.addEventListener('click', () => {
        console.log(option.innerHTML);

    const regionName = document.querySelectorAll(".region")

    
    regionName.forEach(region => {
 
        viewAll.addEventListener('click', () => {
            region.parentElement.parentElement.parentElement.style.display = 'block'
        })

        if(region.innerHTML.includes(option.innerHTML)){
            region.parentElement.parentElement.parentElement.style.display = "block"


        } else {
            region.parentElement.parentElement.parentElement.style.display = "none"

        }


    })  


})

})




    