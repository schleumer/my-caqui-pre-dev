'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _system = require('./system');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown(props) {
    _classCallCheck(this, DropDown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.displayName = 'DateTime(DropDown)';

    _this.prevMonth = _this.prevMonth.bind(_this);
    _this.nextMonth = _this.nextMonth.bind(_this);
    _this.pickADate = _this.pickADate.bind(_this);

    _this.addHour = _this.addHour.bind(_this);
    _this.subHour = _this.subHour.bind(_this);
    _this.addMinute = _this.addMinute.bind(_this);
    _this.subMinute = _this.subMinute.bind(_this);

    _this.setMinute = _this.setMinute.bind(_this);
    _this.setHour = _this.setHour.bind(_this);

    _this.close = _this.close.bind(_this);
    return _this;
  }

  DropDown.prototype.prevMonth = function prevMonth() {
    var _props$store = this.props.store;
    var dispatch = _props$store.dispatch;
    var actions = _props$store.actions;

    dispatch(actions.prevMonth());
  };

  DropDown.prototype.nextMonth = function nextMonth() {
    var _props$store2 = this.props.store;
    var dispatch = _props$store2.dispatch;
    var actions = _props$store2.actions;

    dispatch(actions.nextMonth());
  };

  DropDown.prototype.addMinute = function addMinute() {
    var _props$store3 = this.props.store;
    var dispatch = _props$store3.dispatch;
    var actions = _props$store3.actions;

    dispatch(actions.addMinute());

    this.timeChanged();
  };

  DropDown.prototype.subMinute = function subMinute() {
    var _props$store4 = this.props.store;
    var dispatch = _props$store4.dispatch;
    var actions = _props$store4.actions;

    dispatch(actions.subMinute());

    this.timeChanged();
  };

  DropDown.prototype.addHour = function addHour() {
    var _props$store5 = this.props.store;
    var dispatch = _props$store5.dispatch;
    var actions = _props$store5.actions;

    dispatch(actions.addHour());

    this.timeChanged();
  };

  DropDown.prototype.subHour = function subHour() {
    var _props$store6 = this.props.store;
    var dispatch = _props$store6.dispatch;
    var actions = _props$store6.actions;

    dispatch(actions.subHour());

    this.timeChanged();
  };

  DropDown.prototype.timeChanged = function timeChanged() {
    var getState = this.props.store.getState;

    this.props.onTimeChanged && this.props.onTimeChanged(getState().value);
  };

  DropDown.prototype.setMinute = function setMinute(minute) {
    var _props$store7 = this.props.store;
    var dispatch = _props$store7.dispatch;
    var actions = _props$store7.actions;

    dispatch(actions.setMinute(minute));

    this.timeChanged();
  };

  DropDown.prototype.setHour = function setHour(hour) {
    var _props$store8 = this.props.store;
    var dispatch = _props$store8.dispatch;
    var actions = _props$store8.actions;

    dispatch(actions.setHour(hour));

    this.timeChanged();
  };

  DropDown.prototype.pickADate = function pickADate(evt) {
    this.props.onDatePicked(evt);
  };

  DropDown.prototype.close = function close() {
    var _props$store9 = this.props.store;
    var dispatch = _props$store9.dispatch;
    var actions = _props$store9.actions;

    dispatch(actions.close());
  };

  // TODO: shrink, split, etc.

  DropDown.prototype.render = function render() {
    var _this2 = this;

    var state = this.props.store.getState();
    var current = state.current;

    var value = state.value || current.clone();

    if (!this.props.visible) {
      return null;
    }

    var calendar = (0, _system.buildCalendar)(current);

    // TODO: remove?
    var weekDaysTitles = _moment2.default.weekdaysShort().map(function (day) {
      return _react2.default.createElement(
        'td',
        { key: day, style: _styles2.default.weekDayTitle },
        _react2.default.createElement(
          'b',
          null,
          day
        )
      );
    });

    var days = function days(week) {
      return week.map(function (day, weekDay) {
        if (!day) {
          return _react2.default.createElement('td', { key: weekDay, style: _styles2.default.dayCell });
        }

        return _react2.default.createElement(
          'td',
          { key: weekDay, style: _styles2.default.dayCell },
          _react2.default.createElement(_day2.default, { day: day, value: value, onPick: _this2.pickADate })
        );
      });
    };

    var time = this.props.showTime ? _react2.default.createElement(_footer2.default, { current: current,
      addHour: this.addHour,
      subHour: this.subHour,
      addMinute: this.addMinute,
      subMinute: this.subMinute,
      setHour: this.setHour,
      setMinute: this.setMinute }) : null;

    var calendarRows = calendar.map(function (week, which) {
      return _react2.default.createElement(
        'tr',
        { key: which },
        days(week)
      );
    });

    return _react2.default.createElement(
      'div',
      { style: _styles2.default.dropdownRoot, className: 'dropdown-menu', tabIndex: '0' },
      _react2.default.createElement(
        'div',
        { style: { padding: '5px' } },
        _react2.default.createElement(_header2.default, { current: current,
          prevMonth: this.prevMonth,
          nextMonth: this.nextMonth }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'table',
            { style: _styles2.default.daysTable, className: 'table table-bordered' },
            _react2.default.createElement(
              'thead',
              { style: _styles2.default.daysTableHeader },
              _react2.default.createElement(
                'tr',
                null,
                weekDaysTitles
              )
            ),
            _react2.default.createElement(
              'tbody',
              { style: _styles2.default.daysTableBody },
              calendarRows
            )
          )
        ),
        time
      ),
      _react2.default.createElement(
        'a',
        { href: 'javascript:;', onClick: this.close, style: { textAlign: 'center', backgroundColor: 'rgba(245, 245, 245, .8)', position: 'absolute', bottom: '0px', left: '0px', right: '0px', padding: '4px' } },
        'Fechar'
      )
    );
  };

  return DropDown;
}(_react2.default.Component);

DropDown.propTypes = {
  onDatePicked: _react.PropTypes.func
};
exports.default = DropDown;