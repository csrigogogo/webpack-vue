/*
 * @Author: csrigogogo cri.sri@outlook.com
 * @Date: 2022-06-09 16:59:14
 * @LastEditors: csrigogogo cri.sri@outlook.com
 * @LastEditTime: 2022-06-09 18:48:18
 * @FilePath: \webpack-vue\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入vue
import Vue from 'vue'
import Login from './Login.vue'
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue!'
    },
    render: function (h) {
        return h(Login)
    }
});
console.log("hello world es511");

