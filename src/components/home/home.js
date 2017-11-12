var templ = require('./home.html');

module.exports = function (Vue) {
    let home = Vue.component('my-home',{
        template:templ,
        data: function () {

            return {
                name:'home'
            }
        },
        methods:{
            loadList:function () {
                require('./textList/testList.js')(Vue);
            }
        }



    })
    return home;
}