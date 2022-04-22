
const mainSection = document.querySelector(".main-section"),
labelButton = mainSection.querySelector(".label button"),
inputField = mainSection.querySelector("input"),
regionsOptions = mainSection.querySelectorAll(".options a:not(.all)"),
countriesEl = document.querySelector(".countries-container"),
toggleBtn = document.querySelector(".modes"),
viewAll = document.querySelector(".all"),
modalContainer = document.querySelector(".modal-container"),
backButton = document.querySelector(".modal-container button")

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
        mainSection.classList.add("active")
        countriesEl.classList.add("active")
        modalContainer.classList.remove("active")
        displayLabel(country)
    })

    backButton.addEventListener('click', () => {
        mainSection.classList.remove("active")
        countriesEl.classList.remove("active")
        modalContainer.classList.add("active")

    })

    

    countriesEl.appendChild(countryEl)       
    });

    

}

const displayLabel = country => {
    const modalText = document.querySelector(".modal-text")

   

    modalText.innerHTML = `
                   <img src="${country.flag}" alt="">
                   
                   <div class="modal-infos">
                    <h1>${country.name}</h1>
                    <div class="columns">
                        <div class="col1">
                            <div class="native">
                                <span>Native Name:</span>
                                <p>${country.nativeName}</p>
                            </div>
                            <div class="pop">
                             <span>Population:</span>
                             <p>${country.population}</p>
                           </div>
                           <div class="reg">
                             <span>Region:</span>
                             <p>${country.region}</p>
                         </div>
                         <div class="sub-reg">
                             <span>Sub Region:</span>
                             <p>${country.subregion}</p>
                         </div>
                        </div>
                           
                     <div class="col2">
                        <div class="cap">
                            <span>Capital:</span>
                            <p>${country.capital}</p>
                        </div>
                        <div class="dom">
                            <span>Top Level Domain:</span>
                            <p>${country.topLevelDomain[0]}</p>
                        </div>
                        <div class="curr">
                            <span>Currencies:</span>
                            <p>${country.currencies.name}</p>
                        </div>
                        <div class="lan">
                            <span>Languages:</span>
                            <p>${country.languages[0].name}</p>
                        </div>
                     </div>
        
                      
                    </div>
                   <div class="border-countries">
                    <h2>Border countries :</h2>
                    <div class="border-countries">
                      <button>${country.borders}</button>

                      
                    </div>
                   </div>
       

    `

    if(country.borders == undefined){
        document.querySelector(".border-countries button").innerHTML = "No border countries!"
    }

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
        console.log(data)
        

        
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




    