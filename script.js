var choice = prompt("Welcome to Area Calculator. \n Please Enter your Choice. \n1.Area of Rectangle. \n2.Area of Triangle. \n3.Area of Circle. \n4.Area of Parallelogram")
if(choice=='1'){
    var l=prompt('enter the length')
    var b=prompt('enter the breadth')
    var result=Number(b)*Number(l)
    alert('the area is'+result)
}
if (choice == '2'){
    var h = prompt('enter the height')
    var b = prompt('enter the base')
    var result = Number(h) * Number(b) /2
    alert('the area is' + result)
}
if (choice == '3') {
    var r = prompt('enter the radius')
    var result=3.14*Number(r)*Number(r)
    alert('the area is' + result)
}
if (choice == '4'){
    var h = prompt('enter the height')
    var cb = prompt('enter the corresponding base')
    var result = Number(h) * Number(cb)
    alert('the area is' + result)
}