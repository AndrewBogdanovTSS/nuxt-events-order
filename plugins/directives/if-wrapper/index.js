import Vue from 'vue'

Vue.directive('if-wrapper', {
    inserted: function(el, binding) {
        if(!binding.value) el.parentNode.innerHTML = el.innerHTML
    }
})