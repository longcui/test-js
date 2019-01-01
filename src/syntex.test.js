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
});