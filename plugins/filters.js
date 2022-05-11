import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

Vue.filter('currency', function (value) {
    if (!value) return ''
    return `$${value}`
 })

Vue.filter('trim', function (value, size) {
    if (!value) return '';
    value = value.toString();
  
    if (value.length <= size) {
      return value;
    }
    return value.substr(0, size) + '...';
 })
 
// Vue.filter('trim', function (value, num) {
//     const reqdString = 
//     value.split("").slice(0, num).join("");
//     return reqdString;
//  })