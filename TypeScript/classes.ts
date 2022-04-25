// ====================================================================
//             Классы
// ====================================================================

class Typescrypt {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return name + 'typescrypt' + this.version
    }
}

class Car {

    // хорошая практика определять сначала поля, потом конструктор, потом методы
    readonly model: string
    readonly numberOfwheels: number = 4

    constructor(theModel: string) {
        // учитывая что модел ридонли, мы все равно можем ее поменять, но только в конструкторе, в других методах, этого сделать нельзя
        this.model = theModel
    }
}

class Car_2 {
    // Данная запись полностью идентична верхней (короткая версия)
    readonly numberOfwheels: number = 4

    constructor(readonly model: string) { }
}


// ====================================================================
//             модификаторы
// ====================================================================

class Animal {
    // Существует три вида модификаторов, протект, паблик и прайвэт
    // Если не пишется никакого модификатора, по умолчанию они все будут пабликами

    protected voice: string = '' // недоступна для других классов так как протектед 
    public color: string = 'black'// Доступна для всех классов, которые наследуются от класса энимал 

    private go() {
        console.log('go')
    } // недоступна для других классов так как приватна

}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
console.log(cat.color)

// ====================================================================
//             Абстрактные классы и методы \\  ни во что не компилируются но нужны на этапе разработки для того что бы от них наследоваться 
// ====================================================================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponen extends Component {
    render(): void {
        console.log('hello world')
    }

    info(): string {
        return 'info'
    }
}