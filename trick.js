console.log("Hello")

let click = document.getElementById("click")
click.addEventListener("click", array)

function array(e){
    e.preventDefault()
    let numbers = [1, 2, 3]
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        console.log(element + 5)
        
    }
    // console.log("[a, b, c]")
}




