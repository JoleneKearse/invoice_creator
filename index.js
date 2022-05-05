// ADD NEW SERVICES HERE
const availableServices = [
    {name: "Wash car", price: 10}, 
    {name: "Mow Lawn", price: 20}, 
    {name: "Pull Weeds", price: 30}]

// global variables
const serviceOptions = document.getElementById('serviceOptions')
const serviceBtn = document.querySelector('.service-btn')
const billedServices = document.getElementById('billedServices')
let totalAmount = document.getElementById('totalAmount')
let removeBtn = document.querySelectorAll('.remove')
const notes = document.getElementById('notes')
let total = 0
const submitBtn = document.querySelector('.submit-btn')
// JS-injected elements
let billedServiceItem
let billedServicePrice
const serviceBtnArr = []
let billedServicesItems = []
let billedServicesPrices = []

// set up the buttons
for (let i = 0; i < availableServices.length; i++) {
    // create buttons
    const button = document.createElement('button')
    //  add class
    button.classList.add('service-btn')
    // add value
    button.value = i
    //  set the text
    button.textContent = `${availableServices[i].name}: \$${availableServices[i].price}`
    // append to serviceOptions in DOM
    serviceOptions.appendChild(button)
    // add to array
    serviceBtnArr.push(button)
}

// add click events for each btn, then create items for task list
serviceBtnArr.forEach((button, index) => {
    button.addEventListener('click', () => {
        // add div for grouping
        billedServiceGroup = document.createElement('div')
        // add itemization
        billedServiceItem = document.createElement('p')
        removeBtn = document.createElement('button')
        billedServicePrice = document.createElement('p')

        // add items & prices to respective arrays UNLESS it's a repeat
        billedServicesItems.push(availableServices[index].name)
        billedServicesPrices.push(availableServices[index].price)

        // add classes
        billedServiceGroup.classList.add('service-grp')
        removeBtn.classList.add('remove')
        // add text
        billedServiceItem.textContent = `${billedServicesItems[index]}`
        removeBtn.innerHTML = 'Remove'
        billedServicePrice.innerHTML = `<span class='dollar-sign'>$</span>${billedServicesPrices[index]}`

        // sum totalAmount
        total += parseInt(billedServicesPrices[index])
        // display total
        totalAmount.textContent = `\$${total}`

        // append to billedServices
        billedServices.append(billedServiceGroup)
        billedServiceGroup.append(billedServiceItem)
        billedServiceItem.append(removeBtn)
        billedServiceGroup.append(billedServicePrice)

        // disable previously clicked button to prevent duplicate invoice items
        serviceBtnArr[index].disabled = true


        removeBtn.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove')) {
                // remove billedServiceGroup div
                e.target.closest('div').remove()
                
            }
            // subtract price from total
            total -= parseInt(billedServicesPrices[index])
            totalAmount.textContent = `\$${total}`
        })

        // refresh all on submit
        submitBtn.addEventListener("click", () => {
            // clear out all elements
            location.reload()
            // ensure notes input is cleared
            notes.value = ''
        })
    })
})