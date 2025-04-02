const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');

    test('Converts euros to dollars correctly', () => {
        expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
        expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
        expect(fromEuroToDollar(0)).toBe(0);
    });



const { fromDollarToYen, fromYenToPound } = require('./app.js');

    test('Converts dollars to yen correctly', () => {
        expect(fromDollarToYen(1)).toBeCloseTo(146.26);
        expect(fromDollarToYen(10)).toBeCloseTo(1462.6);
        expect(fromDollarToYen(0)).toBe(0);
    });


    test('Converts yen to pounds correctly', () => {
        expect(fromYenToPound(1)).toBeCloseTo(0.00556);
        expect(fromYenToPound(100)).toBeCloseTo(0.556);
        expect(fromYenToPound(0)).toBe(0);
    });
