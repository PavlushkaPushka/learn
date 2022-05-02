interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // name | age
let key: PersonKeys = 'name'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}
type UserKeysNoMeta_1 = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta_2 = Pick<User, 'name' | 'email'>

let user_1: UserKeysNoMeta_1 = 'name'
// user_1 = 'efw'