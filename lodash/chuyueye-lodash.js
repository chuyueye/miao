/**
 * 
 * 
 * @param 
 */

let chuyueye = function () {
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
        return [out1,out2]
    }
    let compact = () => { return 1 }

    return {
        repeat: repeat,
        chunk: chunk,
        compact: compact,

    }
}()




