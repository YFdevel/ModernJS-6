Vue.component('error-comp', {

    template: `<h1 v-if="$parent.error" style="color: red">Ошибка. Нет связи с сервером</h1>`

});
