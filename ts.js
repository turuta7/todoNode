var D = new Date();
const oldData = D.getTime();
 console.log(D.getTime())
console.log((new Date(D.setHours(D.getHours() + 3))).getTime())

const newData = (new Date(D.setHours(D.getHours() + 3))).getTime()

console.log(oldData < newData)
console.log(oldData > newData)

if (D < newData) {
    console.log('dd')
}


