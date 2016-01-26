'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _left = require('./left');

var _left2 = _interopRequireDefault(_left);

var _right = require('./right');

var _right2 = _interopRequireDefault(_right);

var _base = require('../../../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Base) {
  _inherits(Menu, _Base);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, _Base.call(this, props));

    _this.displayName = 'Page.Container.Menu';
    return _this;
  }

  Menu.prototype.render = function render() {

    return _react2.default.createElement(
      'div',
      { className: 'row', style: { marginBottom: '15px', marginTop: '5px' } },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12' },
        this.props.children
      )
    );
  };

  return Menu;
}(_base2.default);

Menu.Left = _left2.default;
Menu.Right = _right2.default;

exports.default = Menu;