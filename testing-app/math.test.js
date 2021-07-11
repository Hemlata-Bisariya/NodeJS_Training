const { calculateTip , fahrenheitToCelsius , celsiusToFahrenheit , add  } = require("./src/math");

test('should calculate total with tip', () => {
    const total = calculateTip(10,.3);
    expect(total).toBe(13);
 });

test('should calculate total with default tip', () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5);
})

test('should convert 32 F to 0 c', () => {
    const temp = fahrenheitToCelsius(32);
    expect(temp).toBe(0)
});

test('should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0);
    expect(temp).toBe(32)
});

// test('async test demo ', async () => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//     }, 2000);
// })

test("should add two numbers",(done) =>{
    add(3,2).then((sum) => {
        expect(sum).toBe(5);
        done()
    })
})

test("should add two numbers async/await", async() =>{
    const sum = await add(5,5);
    expect(sum).toBe(10);
   
})