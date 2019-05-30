function awesome(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('AweSome')
        } else if (i % 3 === 0) {
            console.log('Awe')
        } else if (i % 5 === 0) {
            console.log('Some')
        } else {
            console.log(i)
        }
    }
}


y = awesome(20)
console.log(y)