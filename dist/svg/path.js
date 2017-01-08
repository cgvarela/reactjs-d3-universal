'use strict';Object.defineProperty(exports,'__esModule',{value:!0});exports.Path=void 0;var _react=require('react'),_react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Path=exports.Path=function Path(_ref){var _ref$chartType=_ref.chartType,b=void 0===_ref$chartType?'pie':_ref$chartType,a=_ref.d,_ref$fill=_ref.fill,c=void 0===_ref$fill?'blue':_ref$fill,_ref$id=_ref.id,e=void 0===_ref$id?'':_ref$id,_ref$stroke=_ref.stroke,f=void 0===_ref$stroke?'gray':_ref$stroke;return _react2.default.createElement('path',{className:b+'-path',d:a,fill:c,id:e,stroke:f})};Path.propTypes={chartType:_react2.default.PropTypes.string,d:_react2.default.PropTypes.string.isRequired,fill:_react2.default.PropTypes.string,id:_react2.default.PropTypes.string,stroke:_react2.default.PropTypes.string};exports.default=Path;