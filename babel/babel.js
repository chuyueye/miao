
// implement of class before ES6

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor;
}

var MyClass = /*#__PURE__*/function () {
    // class methods
    function MyClass() {
        _classCallCheck(this, MyClass);
    }

    _createClass(MyClass, [{
        key: "method1",
        value: function method1() { }
    }, {
        key: "method2",
        value: function method2() { }
    }, {
        key: "method3",
        value: function method3() { }
    }]);

    return MyClass;
}();