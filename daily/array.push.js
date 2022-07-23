
// change the push method by replace the return to Array(afterpush)

Array.prototype.push1 = function () {
    // console.log(arguments);
    this.push(...arguments);
    return this
};

Object.getPrototypeOf(
    ([].push(1))
)

Object.setPrototypeOf()