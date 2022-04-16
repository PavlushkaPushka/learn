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

// Явное указание на то, что функция ни чего нам не вернет
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Richard')

//Never