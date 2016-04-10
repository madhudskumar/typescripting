//var foo = function(x = 10): string {
//    if (x === 10) {
//        return "x is equal to 10";
//    } else if (x > 10) {
//        return "x is > 10";
//    } else {
//        return "12";
//    }
//};


////
////var foomer = function (x: number) {
////
////};

//var boo = (x: number) => x + 10;

//function baz(fn: (x:number) => string){
//    var faz = fn(12);
//}

//baz(foo);


//function sum(x: number, y: number): number;
//function sum(x: string, y: number): number;
//function sum(x: number, y: string): number;
//function sum(x: string, y: string): number;
//function sum(x: any, y: any) {
//    if (typeof x === "string") {
//        x = parseInt(x,10);
//    }
//    if (typeof y === "string") {
//        y = parseInt(y, 10);
//    }

//    return x + y;
//};

//sum("1", "2");
//sum(1, 2);
//sum(1, "2");
//sum("1", 2);
////sum({}, {});

//var messaanger = {
//    message: 'hello world',
//    start: function () {
//        setTimeout(() => {
//            alert(this.message);
//        }, 3000);
//    }
//}

//interface IPerson {
//    firstName: string;
//    lastName: string;
//    //sayHi?:() => void; OR
//    sayHi?(): void;
//}

//var mkds: IPerson = {
//    firstName: "mkds",
//    lastName: "!",
//    sayHi: function () {
//        alert("HI");
//    }
//}

//function doSomething(person:IPerson, fn?: () => void) {
//    return person.firstName + " " + person.lastName;
//    //please toolbar check last name if optional
//};

////doSomething(x); its an error 
//doSomething(mkds);

///////////////////////////////////////////////////////////////

class Person {

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(value:string) {
        this.firstName = value;  
    }

    constructor(public firstName: string, public lastName: string) {
    }

    sayHi(): string;
    sayHi(name: string): string;
    sayHi(person: Person): string;
    sayHi(obj?: any) {
        var predicate ="hi!" + obj.fullName;
        if (typeof obj === 'string') {
            return predicate;
        } else if (obj instanceof Person) {
            return (<Person>obj).fullName + " "  + " obj is a class"
        }

        return "hi" + predicate;
    }

    //sayHi() {
    //    return "hi!" + this.fullName;
    //}
}

var mkds = new Person("mkds", "kumar");


//alert(mkds.fullName);

/////////////////////////////////////////////////////////////////

class Employee extends Person {
    constructor(firstName: string, lastName: string, public position: string) {
        super(firstName, lastName);
    }

    get fullName() {
        return this.firstName + ", " + this.position;
    }
    
    sayHi(employee: Employee): string;
    sayHi(obj?: any):string {
        if (obj instanceof Employee) {
            return "employee" + (<Employee>obj).fullName; 
        }
        return super.sayHi(obj);
    }   
}

var employee = new Employee("m", "k", "m");

alert(employee.sayHi(employee));

