const obj = {
    name : 'omar',
    age : 23,
    myDetails : function(){
        console.log(`these are my details name : ${this.name} and my age : ${this.age}`)
    },

    "some-data" : "Cairo",
    "boolean": "true"
}

console.log(obj.boolean)
console.log(obj["some-data"])
console.log(obj.boolean)
console.log(obj["boolean"])

console.log(Object.values(obj))
//console.log(obj.entries)

