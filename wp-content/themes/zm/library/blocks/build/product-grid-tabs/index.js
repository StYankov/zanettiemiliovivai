/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/product-grid-tabs/block.jsx":
/*!********************************************!*\
  !*** ./blocks/product-grid-tabs/block.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tabs */ "./blocks/product-grid-tabs/components/Tabs.jsx");
/* harmony import */ var _components_TabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TabContent */ "./blocks/product-grid-tabs/components/TabContent.jsx");





function Block(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const key = 'ck_6698fe97c5b09db859422506c3b30cc8e6ec85e1';
  const secret = 'cs_fb73e9e2afabc98f512e2e69b9452a379ce76667';
  const {
    onSaleProducts,
    featuredProducts,
    newProducts,
    featuredProductsList,
    newProductsList,
    onSaleProductsList
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&featured=true&per_page=8`
    }).then(products => {
      setAttributes({
        featuredProductsList: products
      });
    });
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&orderby=date&order=desc&per_page=8`
    }).then(products => {
      setAttributes({
        newProductsList: products
      });
    });
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&on_sale=true&per_page=8`
    }).then(products => {
      setAttributes({
        onSaleProductsList: products
      });
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-grid-tabs"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-grid-tabs__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Just arrived in our store"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    attributes: attributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-grid-tabs__content"
  }, featuredProducts && featuredProductsList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_TabContent__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
    products: featuredProductsList
  }), newProducts && newProductsList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_TabContent__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
    products: newProductsList
  }), onSaleProducts && onSaleProductsList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_TabContent__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
    products: onSaleProductsList
  })));
}

/***/ }),

/***/ "./blocks/product-grid-tabs/components/Product.jsx":
/*!*********************************************************!*\
  !*** ./blocks/product-grid-tabs/components/Product.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Product(_ref) {
  let {
    product
  } = _ref;
  const now = new Date();
  const createdAt = new Date(product.date_created);
  const diffTime = Math.abs(now - createdAt);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isNew = diffDays < 30;
  const salePercentage = Math.ceil((parseFloat(product.regular_price) - parseFloat(product.sale_price)) / parseFloat(product.regular_price) * 100);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cell medium-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-mini"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-mini__thumbnail"
  }, product.images.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: product.images[0].src
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-mini__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    className: "product-mini__title"
  }, product.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-mini__price",
    dangerouslySetInnerHTML: {
      __html: product.price_html
    }
  })), product.on_sale && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-mini__sale"
  }, "-", salePercentage, "%"), isNew && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-mini__new"
  }, "New"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: product.permalink,
    className: "product-mini__permalink"
  })));
}

/***/ }),

/***/ "./blocks/product-grid-tabs/components/TabContent.jsx":
/*!************************************************************!*\
  !*** ./blocks/product-grid-tabs/components/TabContent.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContent": () => (/* binding */ TabContent)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./blocks/product-grid-tabs/components/Product.jsx");


function TabContent(_ref) {
  let {
    products
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-grid-tabs__grid grid-x grid-padding-x"
  }, products.map(product => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Product__WEBPACK_IMPORTED_MODULE_1__.Product, {
    key: product.id,
    product: product
  })));
}

/***/ }),

/***/ "./blocks/product-grid-tabs/components/Tabs.jsx":
/*!******************************************************!*\
  !*** ./blocks/product-grid-tabs/components/Tabs.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Tabs(_ref) {
  let {
    attributes
  } = _ref;
  const {
    onSaleProducts,
    featuredProducts,
    newProducts
  } = attributes;
  const tabs = [];
  if (onSaleProducts) tabs.push({
    key: 'on-sale',
    label: 'On Sale'
  });
  if (featuredProducts) tabs.push({
    key: 'features',
    label: 'Featured'
  });
  if (newProducts) tabs.push({
    key: 'new-arrivals',
    label: 'New Arrivals'
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "product-grid-tabs__tabs"
  }, tabs.map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: t.key,
    "data-tab": t.key
  }, t.label)));
}

/***/ }),

/***/ "./blocks/product-grid-tabs/edit.jsx":
/*!*******************************************!*\
  !*** ./blocks/product-grid-tabs/edit.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Edit": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./blocks/product-grid-tabs/block.jsx");
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-controls */ "./blocks/product-grid-tabs/inspector-controls.jsx");




function Edit(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block__WEBPACK_IMPORTED_MODULE_2__.Block, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_3__.PGTInspectorControls, props));
}

/***/ }),

/***/ "./blocks/product-grid-tabs/inspector-controls.jsx":
/*!*********************************************************!*\
  !*** ./blocks/product-grid-tabs/inspector-controls.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PGTInspectorControls": () => (/* binding */ PGTInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function PGTInspectorControls(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    onSaleProducts,
    featuredProducts,
    newProducts
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Enable On Sale Tab",
    checked: onSaleProducts,
    onChange: value => setAttributes({
      onSaleProducts: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Enable Featured Products Tab",
    checked: featuredProducts,
    onChange: value => setAttributes({
      featuredProducts: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Enable New Products Tab",
    checked: newProducts,
    onChange: value => setAttributes({
      newProducts
    })
  }))));
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./blocks/product-grid-tabs/block.json":
/*!*********************************************!*\
  !*** ./blocks/product-grid-tabs/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"zm/product-grid-tabs","title":"Products Grid Tabs","category":"theme","parent":[],"icon":"grid-view","description":"","keywords":[],"version":"1.0.0","textdomain":"hlwp","attributes":{"onSaleProducts":{"type":"boolean","default":true},"featuredProducts":{"type":"boolean","default":true},"newProducts":{"type":"boolean","default":true}},"supports":{"html":false},"editorScript":"file:./index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./blocks/product-grid-tabs/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./blocks/product-grid-tabs/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/product-grid-tabs/edit.jsx");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  title: _block_json__WEBPACK_IMPORTED_MODULE_1__.title,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.Edit,

  save() {
    return null;
  }

});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map