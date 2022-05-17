
#  zenlib

## Methods available:



## newArray ( arg1, arg2 , arg3 )

- Creates a new empty array based on the arguments passed

**Create an empty undefined array of x elements**

    newArray(5);  // [ undefined, undefined, undefined, undefined, undefined ]

**Create a range of empty undefined array from x to y (inclusive) elements**

    newArray(1,5) // [ undefined, undefined, undefined, undefined ]

**Create a range from 1 to 5 with the increment of 0**

    newArray(1,5,0) // [ 1, 2, 3, 4, 5 ]

**Create a range from 1 to 5 with the increment of 2**

    newArray(1,5,2) // [ 3, 4, 5, 6, 7 ]

## isNumber ( arg )

Returns a boolean value based on argument type

    isNumber('test') // false
    isNumber('5') // true
    isNumber(5) // true



