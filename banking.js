let deposit = document.getElementById('deposit')
let deposit_button = document.getElementById('deposit-button')
let withdraw = document.getElementById('withdraw')
let withdraw_button = document.getElementById('withdraw-button')
let overall_div = document.getElementById('overall')
let balance = document.getElementById('balance')

total_money = 0
withdraw_amount = 0


const deposit_money = () => {
    let deposit_val = Number(deposit.value)
    total_money += deposit_val
    deposit.value = ""
    balance.innerHTML = `Total Balance $${total_money}`
}


const withdraw_money = () => {
    let withdraw_val = Number(withdraw.value)
    if (withdraw_val > total_money)
    {
        let error_message = document.createElement('p')
        error_message.innerHTML = "Not enough money in balance!"
        overall_div.appendChild(error_message)
        withdraw.value = ""
        return 0
    }
    else {
        total_money -= withdraw_val
        withdraw.value = ""
        balance.innerHTML = `Total Balance $${total_money}`
    }

}


deposit_button.addEventListener('click', deposit_money)
withdraw_button.addEventListener('click', withdraw_money)

