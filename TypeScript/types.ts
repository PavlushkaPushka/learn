//////////////////////////https://www.youtube.com/watch?v=nyIpDs2DJ_c&t=2208s//////////////////////////////////////




// Тайпскрипт, это язык, которые используется только на этапе разработки приложения, как я понимаю, он активно используется при разработке реакт приложений


//ПЕРЕМЕННЫЕ//
//ПЕРЕМЕННЫЕ//
//ПЕРЕМЕННЫЕ//
const str: string = 'good'

const bool_1: boolean = true
const bool_2: boolean = true

let int: number = 12
const float: number = 4.2
const num: number = 3e10

const message: string = 'hello typescript'


const numberArray_1: number[] = [1, 2, 3, 4, 5]
const numberArray_2: Array<number> = [1, 2, 3, 4, 5] // generic types

const words_1: string[] = ['hello', 'typescript', 'Pavel']
const words_2: Array<string> = ['hello', 'typescript', 'Pavel']

//Tuple
const contact: [string, number] = ['Pavel', 12345]

//any
let variable: any = 44
variable = 'New String'
variable = []






//ФУНКЦИИ//
//ФУНКЦИИ//
//ФУНКЦИИ//

// Явное указание на то, что функция ни чего нам не вернет
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Richard')

//Never - функция которая никогда не завершится
// эта штука нужна тогда, когда функция возвращает ошибку, либо постоянно что то делает (отслеживает что то постоянно, например)
function throwMessage(message: string): never {
    throw new Error(message)
}
function infinite(): never {
    let a = true

    while (true) {

    }
}



//СВОИ ТИПЫ (ЭЛИАСЫ)//
//СВОИ ТИПЫ (ЭЛИАСЫ)//
//СВОИ ТИПЫ (ЭЛИАСЫ)//

type Login = string
const login: Login = 'admin'

// еще можно указывать потенциально различные типы данных

type ID = string | number
const id_1: ID = 1234
const id_2: ID = "1234"

type SomeType = string | null | undefined