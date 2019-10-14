
Vue.component('hola',{
    template:  
    '     <h1>{{hola}}</h1>  ',
    data() {
        return {
            hola: 'Que Tal !!'
        }
    } 
});

new Vue({
    el: '#APP'
});
