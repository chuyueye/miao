/**
 * 
 * 
 * @param 
 */

let chuyueye = function () {
    // how to iterate or call others.(iteration)
    // do(repeat) something n times.
    let repeat = (n, action) => {
        for (let i = 0; i < n; i++) {
            action()
        }
    }
    //Creates an array of elements split into groups the length of size.
    let chunk = (array, size = 1) => {
        let out1 = array;
        let out2 = [];
        let length = array.length;
        if (length <= size) {
            return [array]
        }
        repeat((length - size),
            () => out2.push(out1.pop())
        )
        return [out1, out2]
    }
    //Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
    let compact = (array) => {
        let localArray = array; //for pure function
        let out = []; //initial the OUTPUT
        for (let entry of localArray) {
            if (entry == 0 || entry == null || Number.isNaN(entry)) { }
            else (out.push(entry))
        }
        return out
    }
    let difference = (array, values) => {
        let localArray = array; //for pure function
        // let out = [];
        for (let entry of values) {
            while (true) {
                let index = localArray.indexOf(entry)
                if (index == -1) { break }
                else { localArray.splice(index, 1) }
            }
        }
        return localArray
    }
    let differenceBy = ()=>{

    }

    return {
        repeat: repeat,
        chunk: chunk,
        compact: compact,
        difference: difference,
        differenceBy:differenceBy,
    }
}()




