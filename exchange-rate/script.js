//获取节点
const currencyElement_one = document.getElementById('currency-one')
const amountElement_one = document.getElementById('amount-one')
const currencyElement_two = document.getElementById('currency-two')
const amountElement_two = document.getElementById('amount-two')

const swap = document.getElementById('swap')
const rateElement = document.getElementById('rate')

//获取汇率并实现dom更新
function calculate() {
  const currency_one = currencyElement_one.value
  const currency_two = currencyElement_two.value
  //console.log(currency_one, currency_two)

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.rates[currency_two]
    rateElement.innerText = `1${currency_one} = ${rate}${currency_two}`
    amountElement_two.value = (amountElement_one.value * rate).toFixed(4)
  })

}


//事件监听
currencyElement_one.addEventListener('change', calculate)
amountElement_one.addEventListener('input', calculate)
currencyElement_two.addEventListener('change', calculate)
amountElement_two.addEventListener('input', calculate)
swap.addEventListener('click', () => {
  const temp = currencyElement_one.value
  currencyElement_one.value = currencyElement_two.value
  currencyElement_two.value = temp
  calculate()
})

calculate()