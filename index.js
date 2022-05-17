const newArray = (initialArg = 0, maxArg = 0, increment = null) => {
    if ( isNaN(initialArg) || isNaN(maxArg) || isNaN(increment) ) {
        throw new Error('Arguments must be numbers');
    }
    if ( initialArg > maxArg ) {
        throw new Error('initialArg must be less than maxArg');
    }
    if ( maxArg < 0 ) {
        throw new Error('maxArg must be greater than 0');
    }
    return [...Array(maxArg + 1 - initialArg)].map( (el, idx) => {
        return increment != null ? el = idx + increment : el
    });
    }

module.exports = newArray
