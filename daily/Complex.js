
function Complex(real, imag) {
    if (this === window) {
        return new Complex(real, imag)
    }
    if (imag == undefined) {
        return Complex.fromString(string)
    }
    this.real = real;
    this.imag = imag;
}
Complex.prototype.plus = function (c) {
    if (!(c instanceof Complex)) {
        return "ERROR NOT COMPLEX"
    }
    return new Complex(
        this.real + c.real,
        this.imag + c.imag
    )
}