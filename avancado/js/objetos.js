const user = new Object();
user.id = 1
user.nome = "Mateus"
user.idade = 19
user.sobrenome = "Silva"
user.email = "blablabla@gmail.com"
user.senha = "12345678"

Object.defineProperty(user, "id", {
    enumerable: false,
    writable:false
})


// console.log(Object.keys(user))
// console.log(Object.entries(user))

user.idade += 1

// console.log(Object.keys(user))
// console.log(Object.entries(user))


console.log(user.id)