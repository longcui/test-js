/*
Spread Operator
 */
//Experimental. Expect behavior to change in the future.
test('spread in object literals syntax(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)', () => {
    const obj = {
        a: 'test',
        b: '1'
    };
    const obj2 = {
        ...obj,
        c: '2'
    };
    expect(obj2).toEqual({"a": 'test', "b": "1", "c": "2"});
});


/*
Object.assign()
 */
test('Object.assign()', () =>{
   const o1 = {a: 1};
   const o2 = {b: 2};
   const obj = Object.assign(o2, o1);
   expect(obj).toBe(o2);
   expect(obj).toEqual({
       a: 1,
       b: 2
   });
});

test('Object.assign() merge', () => {
    const prop = {
        a: 1
    };
    const prop2 = {
        a: 2
    };
    let result = Object.assign({}, prop, prop2);
    expect(result).toBe({
        a: 2
    })
});

test('anonymous function', () => {
    const fun1 = (x, y) => x * y;
    expect(fun1(5, 5)).toBe(25);

    const fun2 = (x, y) => { return x * y };
    expect(fun2(5, 5)).toBe(25);

    const expected = {a: 5, b: 5};
    const fun3 = (x, y) => { return {a: x, b: y} };
    // expect(fun3(5, 5)).toBe({a: 5, b: 5});  //Compared values have no visual difference. Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead. <Click to see difference>
    expect(fun3(5, 5)).toEqual(expected);

    // Parenthesize the body of function to return an object literal expression:
    const fun4 = (x, y) => ({a: x, b: y});
    // expect(fun3(5, 5)).toBe({a: 5, b: 5});  //Compared values have no visual difference. Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead. <Click to see difference>
    expect(fun4(5, 5)).toEqual(expected);

});


test('default parameter value', function () {
   function f1(a, b = 0) {
       expect(b).toEqual(0);
   }

   f1(1, undefined);
});