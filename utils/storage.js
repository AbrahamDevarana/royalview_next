export function setLocalKey(key, value, ttl){
    const now = Math.floor(Date.now() / 1000)

    const item ={
        value: value,
        expiry: now + ttl
    }
    localStorage.setItem(key, JSON.stringify(item))
}


export function checkLocalKey(key){
    const itemStr = localStorage.getItem(key)
    if(!itemStr) return false
    const item = JSON.parse(itemStr)
    const now = Math.floor(Date.now() / 1000)
    if(now > item.expiry){
        localStorage.removeItem(key)
        return false
    }
    return item.value
}
