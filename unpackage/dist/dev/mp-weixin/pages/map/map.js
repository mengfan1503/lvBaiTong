(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/map/map"],{

/***/ 59:
/*!******************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/main.js?{"page":"pages%2Fmap%2Fmap"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _map = _interopRequireDefault(__webpack_require__(/*! ./pages/map/map.vue */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_map.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 60:
/*!***********************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=0b31f540& */ 61);
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ 63);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.vue?vue&type=style&index=0&lang=css& */ 65);
/* harmony import */ var _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 42);

var renderjs





/* normalize component */

var component = Object(_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/map/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/*!******************************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue?vue&type=template&id=0b31f540& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=template&id=0b31f540& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_0b31f540___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 62:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue?vue&type=template&id=0b31f540& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 63:
/*!************************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=script&lang=js& */ 64);
/* harmony import */ var _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      // 经纪人id
      agentId: 0,
      title: '机器人分布图', //地图标题
      latitude: 39.908649, //纬度
      longitude: 119.537778, //经度
      distance: 0,
      covers: [{
        id: 1,
        latitude: 39.908649,
        longitude: 119.537778,
        iconPath: '../../static/image/robt.png',
        callout: {
          content: "燕山大学信息馆\n地址：秦皇西大街84号",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS" } },




      {
        id: 2,
        latitude: 39.943399,
        longitude: 119.541129,
        iconPath: "../../static/robt.png",
        callout: {
          content: "你的位置",
          borderRadius: 10,
          padding: 10,
          display: "ALWAYS" } }] };




  },
  methods: {
    getLocationInfo: function getLocationInfo() {
      var that = this;
      var a = 0;
      uni.getLocation({
        type: "gcj02",
        success: function success(res) {
          // 暂时
          that.longitude = res.longitude; //118.787575;
          that.latitude = res.latitude; //32.05024;
          a = res.longitude;
          console.log("aa", a);
          console.log("获取当前的用户经度", that.longitude);
          console.log("获取当前的用户纬度", that.latitude);
          var long = 0;
          var lat = 0;
          //小数点保留六位  经度
          if (that.longitude.toString().indexOf('.') > 0) {
            var longlatsplit = that.longitude.toString().split('.');
            if (longlatsplit.length >= 2) {
              long = parseFloat(longlatsplit[0] === "" ? 0 : longlatsplit[0]) + parseFloat(
              "." + longlatsplit[1].slice(0, 6));
            }
          }
          if (that.latitude.toString().indexOf('.') > 0) {
            var longlatsplit1 = that.latitude.toString().split('.');
            if (longlatsplit1.length >= 2) {
              lat = parseFloat(longlatsplit1[0] === "" ? 0 : longlatsplit1[0]) + parseFloat(
              "." + longlatsplit1[1].slice(0, 6));
            }
          }

          console.log("纬度", lat);
          // this.distance(that.latitude,that.longitude);
          that.covers = [{
            id: "2",
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: "../../static/robt.png",
            callout: {
              content: "你的位置",
              borderRadius: 10,
              padding: 10,
              display: "ALWAYS" } },


          {
            id: 1,
            latitude: 39.908649,
            longitude: 119.537778,
            iconPath: '../../static/image/robt.png',
            callout: {
              content: "燕山大学信息馆\n地址：秦皇西大街84号",
              borderRadius: 10,
              padding: 5,
              display: "ALWAYS" } }];





        } });

      2;
      setTimeout(function () {
        that.pdistance();
      }, 1000);

    },
    pdistance: function pdistance() {

      var PI = 3.14159265358979323; //圆周率
      var R = 6371229; //地球半径

      var lon1 = this.longitude;
      var lat1 = this.latitude;

      console.log(lon1);
      console.log(lat1);
      var lon2 = 119.537778;
      var lat2 = 39.908649;

      var x, y, distance;
      var lonres = lon1 > lon2 ? lon1 - lon2 : lon2 - lon1;
      var latres = lat1 > lat2 ? lat1 - lat2 : lat2 - lat1;
      console.log(lon1 - lon2);
      x = lonres * PI * R * Math.cos((lat1 + lat2) / 2 * PI / 180) / 180;
      y = (lat2 - lat1) * PI * R / 180;
      console.log(lonres);
      console.log(y);
      distance = Math.hypot(x, y);
      distance /= 1000;
      var distance1 = parseFloat(distance).toFixed(2);
      this.distance = distance1;
      console.log(distance1);

    },
    openMapRoute: function openMapRoute(lat, lon, cityName) {
      var url = '';
      if (plus.os.name == 'Android') {
        var hasBaiduMap = plus.runtime.isApplicationExist({
          pname: 'com.baidu.BaiduMap',
          action: 'baidumap://' });

        var hasAmap = plus.runtime.isApplicationExist({
          pname: 'com.autonavi.minimap',
          action: 'androidamap://' });

        var urlBaiduMap = 'baidumap://map/marker?location=' + lat + ',' + lon + '&title=' + cityName +
        '&src=婚梯';
        var urlAmap = 'androidamap://viewMap?sourceApplication=婚梯&poiname=' + cityName + '&lat=' + lat +
        '&lon=' + lon +
        '&dev=0';
        if (hasAmap && hasBaiduMap) {
          plus.nativeUI.actionSheet({
            title: '选择地图应用',
            cancel: '取消',
            buttons: [{
              title: '百度地图' },
            {
              title: '高德地图' }] },

          function (e) {
            switch (e.index) {
              case 1:
                plus.runtime.openURL(urlBaiduMap);
                break;
              case 2:
                plus.runtime.openURL(urlAmap);
                break;}

          });
        } else if (hasAmap) {
          plus.runtime.openURL(urlAmap);
        } else if (hasBaiduMap) {
          plus.runtime.openURL(urlBaiduMap);
        } else {
          url = 'geo:' + lat + ',' + lon + '?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82';
          plus.runtime.openURL(url); //如果是国外应用，应该优先使用这个，会启动google地图。这个接口不能统一坐标系，进入百度地图时会有偏差
        }
      } else {
        // iOS上获取本机是否安装了百度高德地图，需要在manifest里配置，在manifest.json文件app-plus->distribute->apple->urlschemewhitelist节点下添加（如urlschemewhitelist:["iosamap","baidumap"]）
        plus.nativeUI.actionSheet({
          title: '选择地图应用',
          cancel: '取消',
          buttons: [{
            title: 'Apple地图' },
          {
            title: '百度地图' },
          {
            title: '高德地图' }] },

        function (e) {
          console.log('e.index: ' + e.index);
          switch (e.index) {
            case 1:
              url = 'http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=' + lat +
              ',' + lon +
              '&spn=0.008766,0.019441';
              break;
            case 2:
              url = 'baidumap://map/marker?location=' + lat + ',' + lon + '&title=' + cityName +
              '&src=婚梯';
              break;
            case 3:
              url = 'iosamap://viewMap?sourceApplication=婚梯&poiname=' + cityName + '&lat=' +
              lat + '&lon=' + lon + '&dev=0';
              break;
            default:
              break;}

          if (url != '') {
            plus.runtime.openURL(url, function (e) {
              plus.nativeUI.alert('本机未安装指定的地图应用');
            });
          }
        });
      }
    },
    daohang: function daohang() {
      this.openMapRoute(39.908649, 119.537778, "燕山大学信息馆");
      // plus.runtime.openURL('https://blog.qian-hong.com'');
    } },


  onLoad: function onLoad() {
    this.getLocationInfo();

    // uni.getLocation({
    // 	type: 'wgs84',
    // 	geocode: true, //设置该参数为true可直接获取经纬度及城市信息
    // 	success: function(res) {
    // 		console.log(res)
    // 		this.latitude = res.latitude;
    // 		this.longitude = res.longitude;

    // 	},
    // 	fail: function() {
    // 		uni.showToast({
    // 			title: '获取地址失败，将导致部分功能不可用',
    // 			icon: 'none'
    // 		});
    // 	}
    // });
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 65:
/*!********************************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/2022互联网+/2021互联网+/前端/HBuilderX.3.1.12.20210428.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=style&index=0&lang=css& */ 66);
/* harmony import */ var _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_2022_2021_HBuilderX_3_1_12_20210428_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/万青尧/Documents/HBuilderProjects/robot/pages/map/map.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[59,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/map/map.js.map