const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select")

 
function convertValues(){
   const inputCurrencyValues = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-convert")
   const currencyValuecnverted =  document.querySelector(".currency-value")

  
   const dolarToday = 5.2
   const euroToday = 6.2
   const libraToday = 3.28 


    if(currencySelect.value == "dolar"){
      currencyValuecnverted.innerHTML =  new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
  }).format(inputCurrencyValues / dolarToday)
    }

    if(currencySelect.value == "euro"){
      currencyValuecnverted.innerHTML =  new Intl.NumberFormat("de-DE", {
          style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValues / euroToday) 
    }

    if(currencySelect.value == "libra"){
      currencyValuecnverted.innerHTML =  new Intl.NumberFormat("de-CH", {
          style: "currency",
         currency: "LBA"
      }).format(inputCurrencyValues / libraToday) 

      
   }
 



   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
      style: "currency",
      currency: "BRL"
      
   }).format(inputCurrencyValues)


}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if(currencySelect.value == "dolar"){
    
   currencyName.innerHTML = " Dõlar americano "
   currencyImage.src = "./assets/img/usa.png"
  }

  if(currencySelect.value == "euro"){
    
   currencyName.innerHTML = " Euro"
   currencyImage.src = "./assets/img/euro.png"
  }

  if(currencySelect.value == "libra"){
    
   currencyName.innerHTML = " libra"
   currencyImage.src = "./assets/img/libra.png"
  }

 
  
  convertValues()
  
}



currencySelect.addEventListener("change" ,changeCurrency )
convertButton.addEventListener("click", convertValues)