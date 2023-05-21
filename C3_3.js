function myFunc(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key,obj.key)
        }
    }
}


function propertyInObject(str, obj) {
    return str in obj
}


function objectWithoutProto() {
    return Object.create(null)
}

