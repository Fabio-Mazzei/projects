let x = "", y = "", DisplayNumber = "", display = "", sign = "", floatingPoint = ""

function click1() {
    if (sign === "") {
        x += "1"
        DisplayNumber = "1" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "1"
        DisplayNumber = "1" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)  
    }
    
}

function click2() {
    if (sign === "") {
        x += "2"
        DisplayNumber = "2" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "2"
        DisplayNumber = "2" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)  
    }
}

function click3() {
    if (sign === "") {
        x += "3"
        DisplayNumber = "3" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "3"
        DisplayNumber = "3" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function click4() {
    if (sign === "") {
        x += "4"
        DisplayNumber = "4" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "4"
        DisplayNumber = "4" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function click5() {
    if (sign === "") {
        x += "5"
        DisplayNumber = "5" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "5"
        DisplayNumber = "5" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }

}

function click6() {
    if (sign === "") {
        x += "6"
        DisplayNumber = "6" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "6"
        DisplayNumber = "6" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function click7() {
    if (sign === "") {
        x += "7"
        DisplayNumber = "7" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "7"
        DisplayNumber = "7" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function click8() {
    if (sign === "") {
        x += "8"
        DisplayNumber = "8" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "8"
        DisplayNumber = "8" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function click9() {
    if (sign === "") {
        x += "9"
        DisplayNumber = "9" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else if (x === "-"){
        x = x * 9
        DisplayNumber = x
        display = document.getElementById("display")
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "9"
        DisplayNumber = "9" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function click0() {
    if (sign === "") {
        x += "0"
        DisplayNumber = "0" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'x': " + x)
    } else {
        y += "0"
        DisplayNumber = "0" 
        display = document.getElementById("display")
        display.textContent += DisplayNumber
        console.log("Display number add: " + DisplayNumber)
        console.log("Variable 'y': " + y)
    }
}

function clickAdd() {
    if (sign === "+") {
        sign = "+"
        console.log("Sign '+' already add in display")
    } else if (sign === "-" ||
        sign === "x" ||
        sign === "/" ||
        sign === "%" ||
        sign === "^") {
        console.log("Another sign already add in display")
    } else {
        sign = "+"
        display = document.getElementById("display") 
        display.textContent += " + "
        console.log("Display sign add: +")
    }   
}

function clickSub() {
    if (x == "" &&
        y == "" &&
        sign == "" &&
        floatingPoint == "") {
            display = document.getElementById("display")
            display.innerHTML = "-"
            x = "-"
            console.log("Sign changed from '+' to '-'")
            console.log("Variable 'x': " + x)
    } else if (sign === "-") {
        sign = "-"
        console.log("Sign '-' already add in display")
    } else if (sign === "+" ||
        sign === "x" ||
        sign === "/" ||
        sign === "%" ||
        sign === "^") {
        console.log("Another sign already add in display")
    } else {
        sign = "-"
        display = document.getElementById("display")
        display.textContent += " - "
        console.log("Display sign add: -")
    }
    
}

function clickMult() {
    if (sign === "x") {
        sign = "x"
        console.log("Sign '×' already add in display")
    } else if (sign === "+" ||
        sign === "-" ||
        sign === "/" ||
        sign === "%" ||
        sign === "^") {
        console.log("Another sign already add in display")
    } else {
        sign = "x"
        display = document.getElementById("display")
        display.textContent += " × "
        console.log("Display sign add: ×")
    }
}

function clickDiv() {
    if (sign === "/") {
        sign = "/"
        console.log("Sign '÷' already add in display")
    } else if (sign === "+" ||
        sign === "-" ||
        sign === "x" ||
        sign === "%" ||
        sign === "^") {
        console.log("Another sign already add in display")
    } else {
        sign = "/"
        display = document.getElementById("display")
        display.textContent += " ÷ "
        console.log("Display sign add: ÷")
    }
}

function clickPercent() {
    if (sign === "%") {
        sign = "%"
        console.log("Sign '%' already add in display")
    } else if (sign === "+" ||
        sign === "-" ||
        sign === "x" ||
        sign === "/" ||
        sign === "^") {
        console.log("Another sign already add in display")
    } else {
        sign = "%"
        display = document.getElementById("display")
        display.textContent += " % "
        console.log("Display sign add: %")
    }
}

function clickPow() {
    if (sign === "^") {
        sign = "^"
        console.log("Sign '^' already add in display")
    } else if (sign === "+" ||
        sign === "-" ||
        sign === "x" ||
        sign === "/" ||
        sign === "%") {
        console.log("Another sign already add in display")
    } else {
        sign = "^"
        display = document.getElementById("display")
        display.textContent += " ^ "
        console.log("Display sign add: ^")
    }
}

function clickFloatingPoint() {
    if (floatingPoint === ".") {
        console.log("Floating-point already added in the operation")
    } else {
        display = document.getElementById("display")
        display.textContent += "."
        if (sign === "") {
            floatingPoint = "."
            x += "."
            console.log("Floating-point")
        } else {
            floatingPoint = "."
            y += "."
            console.log("Floating-point")
        }
    }
}

function clickChs() {
    if (x == "" &&
        y == "" &&
        sign == "+" &&
        floatingPoint == "") {
            sign = "-"
            display = document.getElementById("display")
            display.innerHTML = "-"
            console.log("Sign changed from '+' to '-'")
            console.log("Variable 'x': " + x)
    } else if (x == "" &&
        y == "" &&
        sign == "-" &&
        floatingPoint == "") {
            sign = "+"
            display = document.getElementById("display")
            display.innerHTML = "+"
            console.log("Sign changed from '+' to '-'")
            console.log("Variable 'x': " + x)
    } else if (x == "" &&
               y == "" &&
               sign == "" &&
               floatingPoint == "") {
            console.log("Operation sign cannot be changed")
    } else if (sign === "") {
        x *= -1
        display = document.getElementById("display")
        display.innerHTML = x
        console.log("Sign changed from '+' to '-'")
        console.log("Variable 'x': " + x)
    } else if (sign === "+" && y === "") {
        display = document.getElementById("display")
        display.innerHTML = x + " - "
        sign = "-"
        console.log("Sign changed from '+' to '-'")
        console.log("Variable 'x': " + x)
    } else if (sign === "-" && y === "") {
        display = document.getElementById("display")
        display.innerHTML = x + " + "
        sign = "+"
        console.log("Sign changed from '-' to '+'")
        console.log("Variable 'x': " + x)
    } else {
        y *= -1
        display = document.getElementById("display")
        display.innerHTML = x + " + (" + y + ")"
        console.log("Sign changed from '+' to '-'")
        console.log("Variable 'y': " + y)
    }
}

function clickAllClear() {
    document.getElementById("display").innerHTML = "&nbsp"
    x = ""
    y = ""
    sign = ""
    floatingPoint = ""
    console.log("All Clear")
}

function clickEqual() {
    display = document.getElementById("display")
    if (sign === "+") {
        resStr = x + " " + sign + " " + y
        numArr = resStr.split("+")
        resNum = Number(numArr[0]) + Number(numArr[1])
        display.innerHTML =  resNum
        console.log(`Result of the operation: ${resNum}`)
        sign = ""
        x = resNum
        y = ""
    } else if (sign === "-") { 
        resStr = x + " " + sign + " " + y
        numArr = resStr.split("-")
        resNum = Number(numArr[0]) - Number(numArr[1])
        display.innerHTML =  resNum
        console.log(`Result of the operation: ${resNum}`)
        sign = ""
        x = resNum
        y = ""
    } else if (sign === "x") {
        resStr = x + " " + sign + " " + y
        numArr = resStr.split("x")
        resNum = Number(numArr[0]) * Number(numArr[1])
        display.innerHTML =  resNum
        console.log(`Result of the operation: ${resNum}`)
        sign = ""
        x = resNum
        y = ""
    } else if (sign === "/") {
        resStr = x + " " + sign + " " + y
        numArr = resStr.split("/")
        resNum = Number(numArr[0]) / Number(numArr[1])
        display.innerHTML =  resNum
        console.log(`Result of the operation: ${resNum}`)
        sign = ""
        x = resNum
        y = ""
    } else if (sign === "^") {
        resStr = x + " " + sign + " " + y
        numArr = resStr.split("^")
        resNum = Math.pow(Number(numArr[0]), Number(numArr[1]))
        display.innerHTML =  resNum
        console.log(`Result of the operation: ${resNum}`)
        sign = ""
        x = resNum
        y = ""
    } else if (sign === "%") {
        resStr = x + " " + sign + " " + y
        numArr = resStr.split("%")
        resNum = (Number(numArr[1]) / 100 * Number(numArr[0]))
        display.innerHTML =  resNum
        console.log(`Result of the operation: ${resNum}`)
        sign = ""
        x = resNum
        y = ""
    }
}
