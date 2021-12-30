// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000
const checking = () => console.log('cheking!')

let interval = setInterval(checking, timeOut)
clearInterval(interval)