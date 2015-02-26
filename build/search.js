webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var b = __webpack_require__(3);
	var c = __webpack_require__(2);
	var Hello = __webpack_require__(4);

	alert('search.js');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);

	var b = function () {
	  alert('b.js');
	};

	module.exports = b;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);

	var Hello = React.createClass({displayName: "Hello",
	  render: function () {
	    return (
	      React.createElement("h1", null, "Hello!")
	    );
	  }
	});

	module.exports = Hello;


/***/ }
]);