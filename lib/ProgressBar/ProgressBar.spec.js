"use strict";

var _interopRequireDefault = require("C:/Users/wheat/Dropbox/TAREAS-ACTIVAS/PLURALSIGHT/react-courses/REUSABLE-REACT-COMP/REUSABLE-REACT-COMP/reusable-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

describe('ProgressBar', function () {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
      percent: 50,
      width: 500
    }));
    var width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});