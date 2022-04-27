const serviceOptions = document.getElementById("service-options")
const servicesUsed = document.getElementById("services-used")
let totalAmount = document.getElementById("total-amount")
const serviceBtns = document.querySelectorAll(".service-btn")
const serviceBtnArr = []
const usedServiceList = []
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

        // add remove link
        const removeLink = document.createElement("span")
        removeLink.innerHTML = "Remove"
        removeLink.classList.add("remove")
        serviceUsedItem.append(removeLink)
        usedServiceList.push(removeLink)
        // event listener 
        // usedServiceList.forEach((ele, index) => {
        //     ele.addEventListener("click", () => {
        //         console.log("clicked")
        //         usedServiceList.pop(this.serviceUsedGroup)
        //         serviceUsedGroup.remove()
        //         serviceUsedItem.remove()
        //         servicesUsedPrice.remove()
        //         totalAmountOwed -= availableServices[index].price
        //     })
        // })

        // add price
        const servicesUsedPrice = document.createElement("p")
        servicesUsedPrice.classList.add("services-used-price")
        servicesUsedPrice.innerHTML = `
        <span class="dollar-sign">$</span>${availableServices[index].price}`
        serviceUsedGroup.append(servicesUsedPrice)
        // push to totalAmountOwed
        totalAmountOwed += availableServices[index].price
        totalAmount.textContent = `\$${totalAmountOwed}`

        usedServiceList.forEach((ele, index) => {
            ele.addEventListener("click", () => {
                console.log("clicked")
                usedServiceList.pop(serviceUsedGroup)
                serviceUsedGroup.remove()
                serviceUsedItem.remove()
                servicesUsedPrice.remove()
                totalAmountOwed -= availableServices[index].price
            })
        })

        // refresh all on submit
        submitBtn.addEventListener("click", () => {
            serviceUsedGroup.remove()
            // serviceUsedItem.remove()
            // servicesUsedPrice.remove()
            document.getElementById("notes").value = ""
            totalAmount.textContent = "$0"
        })
    })
})

// removeEl.addEventListener("click", () => {
//     usedServiceList.pop(this.serviceUsedGroup)
//     serviceUsedGroup.remove()
// })

// usedServiceList.forEach((link, index) => {
//     link.addEventListener("click", () => {
//         console.log("clicked")
//         usedServiceList.pop(serviceUsedGroup)
//         serviceUsedGroup.remove()
//         serviceUsedItem.remove()
//         servicesUsedPrice.remove()
//         totalAmountOwed -= availableServices[index].price
//     })
// })