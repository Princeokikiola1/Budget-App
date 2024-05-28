

// const items = []
// const item = []
// const tab = []
// let budget = ""
// let bal = ""
// let balshow = ""
// let currentBal= ""
// let spend = ""
// let expense = 0;

// let price = ""

// const setBudget = () => {
//     let total = document.getElementById("totalAmount").value
    
//     if (total == "") {
//         alert("Value Cannot Be Empty")
//     }else{
//         items.push(total)
//         showItems()
//         budget = document.getElementById("totalAmount").value
//         bal = budget
//         totalAmount.value = ""
        
//     }
// }
// const showItems = () => {
//     showOne.innerHTML = ""
//     for (i = 0; i < items.length; i++) {
//         showOne.innerHTML = `
//         <p style="color: #587ef4;">$ ${items[i]}</p>`

//     }
// }


// const check = () => {
//     let produntName = document.getElementById("productTitle").value
//     let amount = document.getElementById("userAmount").value
//     let spend  = Number(document.getElementById("userAmount").value)
//     expense += spend
//     if (produntName == "") {
//         alert("Value Cannot Be Empty")
//     }else{
//         tab.push(amount)
//         disp()
//         currentBal = bal - document.getElementById("userAmount").value
//         bal = currentBal
//         showThree.innerHTML ="$" + currentBal
//         price = userAmount.value


//         userAmount.value = ""
//         item.push(produntName)
//         display()

//         productTitle.value = ""
        
        
//     }
// }
// const edit = (index) => {
//     item.splice(index,1,prompt())
//     display()
// }
// const deleteMe = (index) => {
//     item.splice(index,1)
//     display()
// }
// const display = () => {
//    list.innerHTML = ""
//     for (j = 0; j < item.length; j++) {
//         list.innerHTML += `
//          <div style="color: #587ef4; display: flex;"> ${item[j]}     <div style="margin-left: auto;"><span class="" onclick="edit()">edit</span>
//         <span class="material-symbols-outlined" onclick="deleteMe()">delete</span></div></div>
//         `

//     }
// }
// const disp = () => {
//    showTwo.innerHTML = ""
//     for (a = 0; a < tab.length; a++) {
//         showTwo.innerHTML ="$" + expense

//     }
// }
let totalAmount = 0;
let balance = 0;
let budgetArray = []
let operation = 0;


const setBudget = () => {
    let total = document.getElementById("totalAmount").value
    if (total != "") {
        totalAmount = Number(total)
        balance = Number(total)
        error1.style.display = "none"
        document.getElementById('totalAmount').value = ""
    } else{
        error1.style.display = "block"
        error1.style.color ="white"
    }
    console.log(total);
    showOne.innerHTML ="$" + `${total}`
    showThree.innerHTML ="$" + `${total}`
}

const check = () => {
    if(productTitle.value == '' || userAmount.value == '' || userQuantity.value == '') {
        error2.style.display = "block"
        error2.style.color ="white"
     } else {
        error2.style.display = "none"
        let bud = {
            name: productTitle.value,
            amount: userAmount.value,
            quantity: userQuantity.value
    
        }
        if (totalAmount > 0 && balance > 0){
            if (bud.amount * bud.quantity <= balance) {
                  budgetArray.push(bud)
                  console.log(budgetArray);
                  balance = balance - (bud.amount * bud.quantity)
                  showThree.innerHTML = ` ${balance}`
                  display()

                
                  operation = bud.amount * bud.quantity
                  document.getElementById("productTitle").value =""
                  document.getElementById("userAmount").value =""
                  document.getElementById("userQuantity").value =""
            } else {
                alert("Insufficient Fund")
            }
        } else {
            alert("Set Your budget first")
        }


     }
}

const deleteItem = (i) => {
    let confirmation = confirm("Are you sure you want to proceed, unimaginable bad things will happen o.")
    if (confirmation == true) {
        budgetArray.splice(i, 1)
        display()
        balance = balance + operation
        showThree.innerHTML = ` ${balance}`
    }
}

const editItem = (i) => {
    newIndex = i
}

const editValues = () => {
    let bud = {
        name: newName.value,
        amount: newAmount.value,
        quantity: newQuantity.value
    }
    budgetArray.splice(newIndex, 1, bud)
    display()
    operationEdit = bud.amount * bud.quantity
    balance = 0
    balance = total - operationEdit
    showBalance.innerHTML = ` ${balance}`
}
const display = () => {
    list.innerHTML = ''
    budgetArray.map((item, index)=>{
        list.innerHTML += `
            <div>
                
                    <div  style="" >
                    <div>${index+1}. ${item.name}</div>
                    <div>
                        <span>${item.amount}</span>
                        
                    </div>
                    <div class='card-footer'> ${item.quantity}</div>
                    <div class='card-footer'>${Number(item.quantity) * Number(item.amount)}</div>
                    <span style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal" class="material-symbols-outlined " onclick="editItem(${index})">edit</span>
                        <span  style="cursor: pointer;" class="material-symbols-outlined " onclick="deleteItem(${index})">delete</span>
                    </div>
                <div>
                </div>
            </div>
       `
    })
}