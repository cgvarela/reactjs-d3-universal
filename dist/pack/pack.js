'use strict';Object.defineProperty(exports,'__esModule',{value:!0});exports.pack=void 0;var _d=require('d3'),d3=_interopRequireWildcard(_d);function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}var pack=exports.pack=function(_ref){var a=_ref.chartWidth;return d3.pack().size([a-4,a-4]).padding(2)};