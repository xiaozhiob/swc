var _bar = /*#__PURE__*/ new WeakMap();
var Foo = /*#__PURE__*/ function(Bar1) {
    "use strict";
    _inherits(Foo, Bar1);
    var _super = _create_super(Foo);
    function Foo() {
        _class_call_check(this, Foo);
        var _this;
        var _temp;
        foo((_temp = _this = _super.call(this), _class_private_field_init(_assert_this_initialized(_this), _bar, {
            writable: true,
            value: "foo"
        }), _temp));
        return _possible_constructor_return(_this);
    }
    return Foo;
}(Bar);
