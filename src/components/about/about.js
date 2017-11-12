var templ = require('./about.html');

module.exports = function (Vue) {
    let about = Vue.component('my-about',{
        template:templ,
        data: function () {
            return {
                name:'about'
            }
        }
    })

    return about;
}