const serviceOptions = document.getElementById("service-options")
const servicesUsed = document.getElementById("services-used")
let totalAmount = document.getElementById("total-amount")
const serviceBtns = document.querySelectorAll(".service-btn")
const serviceBtnArr = []
const notes = document.getElementById("notes")
// maybe don't need this variable
let totalAmountOwed = 0
const submitBtn = document.querySelector(".submit-btn")

// ADD NEW SERVICES HERE
const availableServices = [
    {name: "Wash car", price: 10}, 
    {name: "Mow Lawn", price: 20}, 
    {name: "Pull Weeds", price: 30}]

// set up the buttons
for (let i = 0; i < availableServices.length; i++) {
    // create buttons
    const button = document.createElement("button")
    // add the class name
    button.classList.add("service-btn")
    // add the value
    button.value = i
    // set the text
    button.textContent = `${availableServices[i].name}: \$${availableServices[i].price}`
    // append to serviceOptions in DOM
    serviceOptions.appendChild(button)
    // addEventListener
    // button.addEventListener("click", generateServicesUsed)
    // push to the array
    serviceBtnArr.push(button)
}

// add click events for each btn, then create items for task list
serviceBtnArr.forEach( (btn, index) => {
    btn.addEventListener("click", () => {
        // add div for styling
        const serviceUsedGroup = document.createElement("div")
        serviceUsedGroup.classList.add("services-used-group")
        servicesUsed.append(serviceUsedGroup)
        // add item
        const serviceUsedItem = document.createElement("p")
        serviceUsedItem.classList.add("services-used-itemization")
        serviceUsedItem.innerHTML = `${availableServices[index].name}`
        serviceUsedGroup.append(serviceUsedItem)
        // add price
        const servicesUsedPrice = document.createElement("p")
        servicesUsedPrice.classList.add("services-used-price")
        servicesUsedPrice.innerHTML = `
        <span class="dollar-sign">$</span>${availableServices[index].price}`
        serviceUsedGroup.append(servicesUsedPrice)
        // push to totalAmountOwed
        totalAmountOwed += availableServices[index].price
        totalAmount.textContent = `\$${totalAmountOwed}`

        // refresh all on submit
        submitBtn.addEventListener("click", function() {
            console.log("clicked")
            serviceUsedGroup.remove()
            serviceUsedItem.remove()
            servicesUsedPrice.remove()
            notes.value = ""
            totalAmount.textContent = "$0"
        })
    })
})