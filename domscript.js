const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const del = document.querySelector("#del")
const umno = document.querySelector("#umno")
const result = document.querySelector("#result")
const n1 = document.querySelector("#num1")
const n2 = document.querySelector("#num2")


plus.addEventListener("click", () => {
    let result = parseInt(n1.value) + parseInt(n2.value);
    if (result>=0){
        calculator(result);
    }else(result<=0)
    calculator(result);
})  
minus.addEventListener("click", () => {
    let result = parseInt(n1.value) - parseInt(n2.value);
    if (result>=0){
        calculator(result);
    }else(result<=0)
        calculator(result);
    
})
del.addEventListener("click", () => {
    let result = parseInt(n1.value) / parseInt(n2.value);
    if (result>=0){
        calculator(result);
    }else(result<=0)
    calculator(result);
})
umno.addEventListener("click", () => {
    let result = parseInt(n1.value) * parseInt(n2.value);
    if (result>=0){
        calculator(result);
    }else(result<=0)
    calculator(result);
})

const calculator = (reduce) => {
    let count = reduce
    result.innerHTML = count
}
