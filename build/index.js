/*!
 * 
 *   react-simple-keyboard v1.26.4
 *   https://github.com/hodgef/react-simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("ReactSimpleKeyboard",[],t):"object"===typeof exports?exports.ReactSimpleKeyboard=t():e.ReactSimpleKeyboard=t()}(window,function(){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){window,e.exports=function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";function _toConsumableArray(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n(1);var o=function(){function Utilities(e){var t=e.getOptions,n=e.getCaretPosition,o=e.dispatch;_classCallCheck(this,Utilities),this.getOptions=t,this.getCaretPosition=n,this.dispatch=o,Utilities.bindMethods(Utilities,this)}return _createClass(Utilities,[{key:"getButtonClass",value:function(e){var t=e.includes("{")&&e.includes("}")&&"{//}"!==e?"functionBtn":"standardBtn",n=e.replace("{","").replace("}",""),o="";return"standardBtn"!==t&&(o=" hg-button-".concat(n)),"hg-".concat(t).concat(o)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"\u2191","{arrowleft}":"\u2190","{arrowdown}":"\u2193","{arrowright}":"\u2192","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(e,t,n){return(t=n?Object.assign({},this.getDefaultDiplay(),t):t||this.getDefaultDiplay())[e]||e}},{key:"getUpdatedInput",value:function(e,t,n,o){var i=this.getOptions(),r=t;return("{bksp}"===e||"{backspace}"===e)&&r.length>0?r=this.removeAt(r,n,o):"{space}"===e?r=this.addStringAt(r," ",n,o):"{tab}"!==e||"boolean"===typeof i.tabCharOnTab&&!1===i.tabCharOnTab?"{enter}"!==e&&"{numpadenter}"!==e||!i.newLineOnEnter?e.includes("numpad")&&Number.isInteger(Number(e[e.length-2]))?r=this.addStringAt(r,e[e.length-2],n,o):"{numpaddivide}"===e?r=this.addStringAt(r,"/",n,o):"{numpadmultiply}"===e?r=this.addStringAt(r,"*",n,o):"{numpadsubtract}"===e?r=this.addStringAt(r,"-",n,o):"{numpadadd}"===e?r=this.addStringAt(r,"+",n,o):"{numpaddecimal}"===e?r=this.addStringAt(r,".",n,o):"{"===e||"}"===e?r=this.addStringAt(r,e,n,o):e.includes("{")||e.includes("}")||(r=this.addStringAt(r,e,n,o)):r=this.addStringAt(r,"\n",n,o):r=this.addStringAt(r,"\t",n,o),r}},{key:"updateCaretPos",value:function(e,t){var n=this.updateCaretPosAction(e,t);this.dispatch(function(e){e.caretPosition=n})}},{key:"updateCaretPosAction",value:function(e,t){var n=this.getOptions(),o=this.getCaretPosition();return t?o>0&&(o-=e):o+=e,n.debug&&console.log("Caret at:",o,"(".concat(this.keyboardDOMClass,")")),o}},{key:"addStringAt",value:function(e,t,n,o){var i;return n||0===n?(i=[e.slice(0,n),t,e.slice(n)].join(""),this.isMaxLengthReached()||o&&this.updateCaretPos(t.length)):i=e+t,i}},{key:"removeAt",value:function(e,t,n){var o;if(0===this.getCaretPosition())return e;var i=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;return t&&t>=0?e.substring(t-2,t).match(i)?(o=e.substr(0,t-2)+e.substr(t),n&&this.updateCaretPos(2,!0)):(o=e.substr(0,t-1)+e.substr(t),n&&this.updateCaretPos(1,!0)):e.slice(-2).match(i)?(o=e.slice(0,-2),n&&this.updateCaretPos(2,!0)):(o=e.slice(0,-1),n&&this.updateCaretPos(1,!0)),o}},{key:"handleMaxLength",value:function(e,t){var n=this.getOptions(),o=n.maxLength,i=e[n.inputName],r=i.length===o;if(t.length<=i.length)return!1;if(Number.isInteger(o))return n.debug&&console.log("maxLength (num) reached:",r),r?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===typeof o){var s=i.length===o[n.inputName];return n.debug&&console.log("maxLength (obj) reached:",s),s?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return Boolean(this.maxLengthReached)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return window.PointerEvent}},{key:"camelCase",value:function(e){return!!e&&e.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(e,t){return t.length?e+t[0].toUpperCase()+t.slice(1):e})}}],[{key:"bindMethods",value:function(e,t){var n=!0,o=!1,i=void 0;try{for(var r,s=Object.getOwnPropertyNames(e.prototype)[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var u=r.value;"constructor"===u||"bindMethods"===u||(t[u]=t[u].bind(t))}}catch(a){o=!0,i=a}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}}}]),Utilities}(),i=function(){function PhysicalKeyboard(e){var t=e.dispatch,n=e.getOptions;_classCallCheck(this,PhysicalKeyboard),this.dispatch=t,this.getOptions=n,o.bindMethods(PhysicalKeyboard,this)}return _createClass(PhysicalKeyboard,[{key:"handleHighlightKeyDown",value:function(e){var t=this.getOptions(),n=this.getSimpleKeyboardLayoutKey(e);this.dispatch(function(e){var o=e.getButtonElement(n)||e.getButtonElement("{".concat(n,"}"));o&&(o.style.backgroundColor=t.physicalKeyboardHighlightBgColor||"#9ab4d0",o.style.color=t.physicalKeyboardHighlightTextColor||"white")})}},{key:"handleHighlightKeyUp",value:function(e){var t=this.getSimpleKeyboardLayoutKey(e);this.dispatch(function(e){var n=e.getButtonElement(t)||e.getButtonElement("{".concat(t,"}"));n&&n.removeAttribute&&n.removeAttribute("style")})}},{key:"getSimpleKeyboardLayoutKey",value:function(e){var t;return((t=e.code.includes("Numpad")||e.code.includes("Shift")||e.code.includes("Space")||e.code.includes("Backspace")||e.code.includes("Control")||e.code.includes("Alt")||e.code.includes("Meta")?e.code:e.key)!==t.toUpperCase()||"F"===e.code[0]&&Number.isInteger(Number(e.code[1]))&&e.code.length<=3)&&(t=t.toLowerCase()),t}}]),PhysicalKeyboard}(),r=function(){function KeyboardLayout(){_classCallCheck(this,KeyboardLayout)}return _createClass(KeyboardLayout,null,[{key:"getDefaultLayout",value:function(){return{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}}}]),KeyboardLayout}(),s=function(){function SimpleKeyboard(){var e=this;_classCallCheck(this,SimpleKeyboard),_defineProperty(this,"getOptions",function(){return e.options}),_defineProperty(this,"getCaretPosition",function(){return e.caretPosition}),_defineProperty(this,"registerModule",function(t,n){e.modules[t]||(e.modules[t]={}),n(e.modules[t])});var t="string"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:".simple-keyboard",n="object"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1];if(n||(n={}),this.utilities=new o({getOptions:this.getOptions,getCaretPosition:this.getCaretPosition,dispatch:this.dispatch}),this.caretPosition=null,this.keyboardDOM=document.querySelector(t),this.options=n,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.options.preventMouseDownDefault=this.options.preventMouseDownDefault||!1,this.keyboardPluginClasses="",o.bindMethods(SimpleKeyboard,this),this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=t.split(".").join(""),this.buttonElements={},window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)]=this,this.allKeyboardInstances=window.SimpleKeyboardInstances,this.currentInstanceName=this.utilities.camelCase(this.keyboardDOMClass),this.keyboardInstanceNames=Object.keys(window.SimpleKeyboardInstances),this.isFirstKeyboardInstance=this.keyboardInstanceNames[0]===this.currentInstanceName,this.physicalKeyboard=new i({dispatch:this.dispatch,getOptions:this.getOptions}),!this.keyboardDOM)throw console.warn('"'.concat(t,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),this.modules={},this.loadModules()}return _createClass(SimpleKeyboard,[{key:"handleButtonClicked",value:function(e){var t=this.options.debug;if("{//}"===e)return!1;"function"===typeof this.options.onKeyPress&&this.options.onKeyPress(e),this.input[this.options.inputName]||(this.input[this.options.inputName]="");var n=this.utilities.getUpdatedInput(e,this.input[this.options.inputName],this.caretPosition);if(this.input[this.options.inputName]!==n&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(n))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,n))return!1;this.input[this.options.inputName]=this.utilities.getUpdatedInput(e,this.input[this.options.inputName],this.caretPosition,!0),t&&console.log("Input changed:",this.input),this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),"function"===typeof this.options.onChange&&this.options.onChange(this.input[this.options.inputName]),"function"===typeof this.options.onChangeAll&&this.options.onChangeAll(this.input)}t&&console.log("Key pressed:",e)}},{key:"handleButtonMouseDown",value:function(e,t){var n=this;this.options.preventMouseDownDefault&&t.preventDefault(),this.options.stopMouseDownPropagation&&t.stopPropagation(),this.isMouseHold=!0,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.options.disableButtonHold||(this.holdTimeout=setTimeout(function(){!n.isMouseHold||(e.includes("{")||e.includes("}"))&&"{delete}"!==e&&"{backspace}"!==e&&"{bksp}"!==e&&"{space}"!==e&&"{tab}"!==e||(n.options.debug&&console.log("Button held:",e),n.handleButtonHold(e,t)),clearTimeout(n.holdTimeout)},500))}},{key:"handleButtonMouseUp",value:function(e){this.isMouseHold=!1,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),e&&"function"===typeof this.options.onKeyReleased&&this.options.onKeyReleased(e)}},{key:"handleButtonHold",value:function(e){var t=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=setTimeout(function(){t.isMouseHold?(t.handleButtonClicked(e),t.handleButtonHold(e)):clearTimeout(t.holdInteractionTimeout)},100)}},{key:"syncInstanceInputs",value:function(){var e=this;this.dispatch(function(t){t.replaceInput(e.input),t.caretPosition=e.caretPosition})}},{key:"clearInput",value:function(e){e=e||this.options.inputName,this.input[e]="",this.caretPosition=0,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"getInput",value:function(e){return e=e||this.options.inputName,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),this.input[e]}},{key:"setInput",value:function(e,t){t=t||this.options.inputName,this.input[t]=e,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"replaceInput",value:function(e){this.input=e}},{key:"setOptions",value:function(e){e=e||{},this.options=Object.assign(this.options,e),this.onSetOptions(e),this.render()}},{key:"onSetOptions",value:function(e){e.inputName&&(this.options.debug&&console.log("inputName changed. caretPosition reset."),this.caretPosition=null)}},{key:"clear",value:function(){this.keyboardDOM.innerHTML="",this.keyboardDOM.className=this.keyboardDOMClass,this.buttonElements={}}},{key:"dispatch",value:function(e){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach(function(t){e(window.SimpleKeyboardInstances[t],t)})}},{key:"addButtonTheme",value:function(e,t){var n=this;if(!t||!e)return!1;e.split(" ").forEach(function(o){t.split(" ").forEach(function(t){n.options.buttonTheme||(n.options.buttonTheme=[]);var i=!1;n.options.buttonTheme.map(function(e){if(e.class.split(" ").includes(t)){i=!0;var n=e.buttons.split(" ");n.includes(o)||(i=!0,n.push(o),e.buttons=n.join(" "))}return e}),i||n.options.buttonTheme.push({class:t,buttons:e})})}),this.render()}},{key:"removeButtonTheme",value:function(e,t){var n=this;if(!e&&!t)return this.options.buttonTheme=[],this.render(),!1;e&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(e.split(" ").forEach(function(e,o){n.options.buttonTheme.map(function(o,i){if(t&&t.includes(o.class)||!t){var r=o.buttons.split(" ").filter(function(t){return t!==e});r.length?o.buttons=r.join(" "):(n.options.buttonTheme.splice(i,1),o=null)}return o})}),this.render())}},{key:"getButtonElement",value:function(e){var t,n=this.buttonElements[e];return n&&(t=n.length>1?n:n[0]),t}},{key:"inputPatternIsValid",value:function(e){var t,n=this.options.inputPattern;if((t=n instanceof RegExp?n:n[this.options.inputName])&&e){var o=t.test(e);return this.options.debug&&console.log('inputPattern ("'.concat(t,'"): ').concat(o?"passed":"did not pass!")),o}return!0}},{key:"setEventListeners",value:function(){!this.isFirstKeyboardInstance&&this.allKeyboardInstances||(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleTouchEnd))}},{key:"handleKeyUp",value:function(e){this.caretEventHandler(e),this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyUp(e)}},{key:"handleKeyDown",value:function(e){this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyDown(e)}},{key:"handleMouseUp",value:function(e){this.caretEventHandler(e)}},{key:"handleTouchEnd",value:function(e){this.caretEventHandler(e)}},{key:"caretEventHandler",value:function(e){var t;e.target.tagName&&(t=e.target.tagName.toLowerCase()),this.dispatch(function(n){n.isMouseHold&&(n.isMouseHold=!1),"textarea"!==t&&"input"!==t||n.options.disableCaretPositioning?n.options.disableCaretPositioning&&(n.caretPosition=null):(n.caretPosition=e.target.selectionStart,n.options.debug&&console.log("Caret at: ",e.target.selectionStart,e.target.tagName.toLowerCase(),"(".concat(n.keyboardDOMClass,")")))})}},{key:"destroy",value:function(){document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleTouchEnd),this.clear()}},{key:"getButtonThemeClasses",value:function(e){var t=this.options.buttonTheme,n=[];return Array.isArray(t)&&t.forEach(function(t){if(t.class&&"string"===typeof t.class&&t.buttons&&"string"===typeof t.buttons){var o=t.class.split(" ");t.buttons.split(" ").includes(e)&&(n=[].concat(_toConsumableArray(n),_toConsumableArray(o)))}else console.warn('Incorrect "buttonTheme". Please check the documentation.',t)}),n}},{key:"setDOMButtonAttributes",value:function(e,t){var n=this.options.buttonAttributes;Array.isArray(n)&&n.forEach(function(n){n.attribute&&"string"===typeof n.attribute&&n.value&&"string"===typeof n.value&&n.buttons&&"string"===typeof n.buttons?n.buttons.split(" ").includes(e)&&t(n.attribute,n.value):console.warn('Incorrect "buttonAttributes". Please check the documentation.',n)})}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(e){if(e.target.classList.contains("hg-button"))return e.preventDefault(),e.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.setEventListeners(),"function"===typeof this.options.onInit&&this.options.onInit()}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),"function"===typeof this.options.beforeFirstRender&&this.options.beforeFirstRender(),this.isFirstKeyboardInstance&&this.utilities.pointerEventsSupported()&&!this.options.useTouchEvents&&!this.options.useMouseEvents&&this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){"function"===typeof this.options.beforeRender&&this.options.beforeRender()}},{key:"onRender",value:function(){"function"===typeof this.options.onRender&&this.options.onRender()}},{key:"onModulesLoaded",value:function(){"function"===typeof this.options.onModulesLoaded&&this.options.onModulesLoaded()}},{key:"loadModules",value:function(){var e=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach(function(t){var n=new t;if(n.constructor.name&&"Function"!==n.constructor.name){var o="module-".concat(e.utilities.camelCase(n.constructor.name));e.keyboardPluginClasses=e.keyboardPluginClasses+" ".concat(o)}n.init(e)}),this.keyboardPluginClasses=this.keyboardPluginClasses+" modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(e,t){return!!this.modules[e]&&this.modules[e][t]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(e,t,n,o){var i=this,r=Array.from(e.children),s=0;return r.length&&n.forEach(function(n,u){var a=o[u];if(!a||!(a>n))return!1;var c=n-s,l=a-s,p=document.createElement("div");p.className+="hg-button-container";var d="".concat(i.options.layoutName,"-r").concat(t,"c").concat(u);p.setAttribute("data-skUID",d);var f=r.splice(c,l-c+1);s=l-c,f.forEach(function(e){return p.appendChild(e)}),r.splice(c,0,p),e.innerHTML="",r.forEach(function(t){return e.appendChild(t)}),i.options.debug&&console.log("rowDOMContainer",f,c,l,s+1)}),e}},{key:"render",value:function(){var e=this;this.clear(),this.initialized||this.beforeFirstRender(),this.beforeRender();var t="hg-layout-".concat(this.options.layoutName),n=this.options.layout||r.getDefaultLayout(),o=this.options.useTouchEvents||!1,i=o?"hg-touch-events":"",s=this.options.useMouseEvents||!1,u=this.options.disableRowButtonContainers;this.keyboardDOM.className+=" ".concat(this.options.theme," ").concat(t," ").concat(this.keyboardPluginClasses," ").concat(i),n[this.options.layoutName].forEach(function(t,n){var i=t.split(" "),r=document.createElement("div");r.className+="hg-row";var a=[],c=[];i.forEach(function(t,i){var l,p=!u&&t.includes("[")&&t.length>1,d=!u&&t.includes("]")&&t.length>1;p&&(a.push(i),t=t.replace(/\[/g,"")),d&&(c.push(i),t=t.replace(/\]/g,""));var f=e.utilities.getButtonClass(t),h=e.utilities.getButtonDisplayName(t,e.options.display,e.options.mergeDisplay),y=e.options.useButtonTag?"button":"div",b=document.createElement(y);b.className+="hg-button ".concat(f),(l=b.classList).add.apply(l,_toConsumableArray(e.getButtonThemeClasses(t))),e.setDOMButtonAttributes(t,function(e,t){b.setAttribute(e,t)}),!e.utilities.pointerEventsSupported()||o||s?o?(b.ontouchstart=function(n){e.handleButtonClicked(t),e.handleButtonMouseDown(t,n)},b.ontouchend=function(){return e.handleButtonMouseUp(t)},b.ontouchcancel=function(){return e.handleButtonMouseUp(t)}):(b.onclick=function(){e.isMouseHold=!1,e.handleButtonClicked(t)},b.onmousedown=function(n){return e.handleButtonMouseDown(t,n)},b.onmouseup=function(){return e.handleButtonMouseUp(t)}):(b.onpointerdown=function(n){e.handleButtonClicked(t),e.handleButtonMouseDown(t,n)},b.onpointerup=function(){return e.handleButtonMouseUp(t)},b.onpointercancel=function(){return e.handleButtonMouseUp(t)}),b.setAttribute("data-skBtn",t);var m="".concat(e.options.layoutName,"-r").concat(n,"b").concat(i);b.setAttribute("data-skBtnUID",m);var v=document.createElement("span");v.innerHTML=h,b.appendChild(v),e.buttonElements[t]||(e.buttonElements[t]=[]),e.buttonElements[t].push(b),r.appendChild(b)}),r=e.parseRowDOMContainers(r,n,a,c),e.keyboardDOM.appendChild(r)}),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||o||s?o?(document.ontouchend=function(){return e.handleButtonMouseUp()},document.ontouchcancel=function(){return e.handleButtonMouseUp()}):o||(document.onmouseup=function(){return e.handleButtonMouseUp()}):document.onpointerup=function(){return e.handleButtonMouseUp()},this.onInit())}}]),SimpleKeyboard}();t.default=s}])},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";var o=n(4),i="function"===typeof Symbol&&Symbol.for,r=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,u=i?Symbol.for("react.fragment"):60107,a=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.suspense_list"):60120,y=i?Symbol.for("react.memo"):60115,b=i?Symbol.for("react.lazy"):60116;i&&Symbol.for("react.fundamental"),i&&Symbol.for("react.responder");var m="function"===typeof Symbol&&Symbol.iterator;function A(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function D(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function E(){}function F(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}D.prototype.isReactComponent={},D.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw A(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},D.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=D.prototype;var _=F.prototype=new E;_.constructor=F,o(_,D.prototype),_.isPureReactComponent=!0;var k={current:null},w={suspense:null},O={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,n){var o=void 0,i={},s=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(s=""+t.key),t)P.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:r,type:e,key:s,ref:u,props:i,_owner:O.current}}function N(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g,I=[];function Q(e,t,n,o){if(I.length){var i=I.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=o,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function U(e,t,n){return null==e?0:function S(e,t,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case s:u=!0}}if(u)return n(o,e,""===t?"."+T(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=t+T(i=e[a],a);u+=S(i,c,n,o)}else if(c=null===e||"object"!==typeof e?null:"function"===typeof(c=m&&e[m]||e["@@iterator"])?c:null,"function"===typeof c)for(e=c.call(e),a=0;!(i=e.next()).done;)u+=S(i=i.value,c=t+T(i,a++),n,o);else if("object"===i)throw n=""+e,A(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}(e,"",t,n)}function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function ea(e,t){e.func.call(e.context,t,e.count++)}function fa(e,t,n){var o=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,o,n,function(e){return e}):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+n)),o.push(e))}function V(e,t,n,o,i){var r="";null!=n&&(r=(""+n).replace(j,"$&/")+"/"),U(e,fa,t=Q(t,r,o,i)),R(t)}function W(){var e=k.current;if(null===e)throw A(Error(321));return e}var K={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return V(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;U(e,ea,t=Q(null,null,t,n)),R(t)},count:function(e){return U(e,function(){return null},null)},toArray:function(e){var t=[];return V(e,t,null,function(e){return e}),t},only:function(e){if(!N(e))throw A(Error(143));return e}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return W().useCallback(e,t)},useContext:function(e,t){return W().useContext(e,t)},useEffect:function(e,t){return W().useEffect(e,t)},useImperativeHandle:function(e,t,n){return W().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return W().useLayoutEffect(e,t)},useMemo:function(e,t){return W().useMemo(e,t)},useReducer:function(e,t,n){return W().useReducer(e,t,n)},useRef:function(e){return W().useRef(e)},useState:function(e){return W().useState(e)},Fragment:u,Profiler:c,StrictMode:a,Suspense:f,unstable_SuspenseList:h,createElement:M,cloneElement:function(e,t,n){if(null===e||void 0===e)throw A(Error(267),e);var i=void 0,s=o({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,c=O.current),void 0!==t.key&&(u=""+t.key);var l=void 0;for(i in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)P.call(t,i)&&!C.hasOwnProperty(i)&&(s[i]=void 0===t[i]&&void 0!==l?l[i]:t[i])}if(1===(i=arguments.length-2))s.children=n;else if(1<i){l=Array(i);for(var p=0;p<i;p++)l[p]=arguments[p+2];s.children=l}return{$$typeof:r,type:e.type,key:u,ref:a,props:s,_owner:c}},createFactory:function(e){var t=M.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=w.suspense;w.suspense=void 0===t?null:t;try{e()}finally{w.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:w,ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:o}},x={default:K},B=x&&K||x;e.exports=B.default||B},function(e,t,n){"use strict";var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function toObject(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,s,u=toObject(e),a=1;a<arguments.length;a++){for(var c in n=Object(arguments[a]))i.call(n,c)&&(u[c]=n[c]);if(o){s=o(n);for(var l=0;l<s.length;l++)r.call(n,s[l])&&(u[s[l]]=n[s[l]])}}return u}},function(e,t,n){},function(e,t,n){"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _typeof2(e){return(_typeof2="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var o=n(0),i=n.n(o),r=n(1),s=n.n(r);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var u=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(n,!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{theme:"simple-keyboard ".concat(e.theme||"hg-theme-default")})};n(5);function Keyboard_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var a=function(e){function KeyboardReact(){var e,t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,KeyboardReact);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=this,o=(e=_getPrototypeOf(KeyboardReact)).call.apply(e,[this].concat(r)),t=!o||"object"!==_typeof(o)&&"function"!==typeof o?_assertThisInitialized(n):o,_defineProperty(_assertThisInitialized(t),"baseClassDefault","react-simple-keyboard"),_defineProperty(_assertThisInitialized(t),"componentDidMount",function(){var e=_assertThisInitialized(t),n=e.props,o=(0,e.getCssBaseClass)();t.keyboard=new s.a(".".concat(o),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Keyboard_ownKeys(n,!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Keyboard_ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u(n)))}),_defineProperty(_assertThisInitialized(t),"componentWillReceiveProps",function(e){return t.keyboard.setOptions(u(e))}),_defineProperty(_assertThisInitialized(t),"getCssBaseClass",function(){return t.props.baseClass||t.baseClassDefault}),t}var t,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(KeyboardReact,o["Component"]),t=KeyboardReact,(n=[{key:"shouldComponentUpdate",value:function(e,t){return this.props.stateToIgnore===e.stateToIgnore}},{key:"render",value:function(){var e=this.getCssBaseClass;return i.a.createElement("div",{className:"".concat(e())})}}])&&_defineProperties(t.prototype,n),r&&_defineProperties(t,r),KeyboardReact}();t.default=a}])});
//# sourceMappingURL=index.js.map