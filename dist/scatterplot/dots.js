'use strict';Object.defineProperty(exports,'__esModule',{value:!0});exports.ScatterPlotDots=void 0;var _circle=require('../svg/circle.js'),_labels=require('../lib/labels.js'),label=_interopRequireWildcard(_labels),_react=require('react'),_react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}var ScatterPlotDots=exports.ScatterPlotDots=function ScatterPlotDots(_ref){var _ref$chartType=_ref.chartType,g=void 0===_ref$chartType?'scatterplot':_ref$chartType,_ref$className=_ref.className,h=void 0===_ref$className?'dot':_ref$className,a=_ref.colorScale,_ref$data=_ref.data,j=void 0===_ref$data?[]:_ref$data,_ref$labels=_ref.labels,k=void 0===_ref$labels?[]:_ref$labels,_ref$r=_ref.r,l=void 0===_ref$r?3.5:_ref$r,b=_ref.xValue,c=_ref.yValue,e=_ref.xScale,f=_ref.yScale;if(!f||!e||!b||!c)return null;var m=[];return j.forEach(function(n,o){var p=label.getLabelText({chartType:g,d:n,labels:k});m.push(_react2.default.createElement('g',{className:h,key:''+p.replace(/\s+/g,'-').toLowerCase()+o},_react2.default.createElement(_circle.Circle,{className:'circle',cx:e(n[b]),cy:f(n[c]),fill:a(o),r:l})))}),m};