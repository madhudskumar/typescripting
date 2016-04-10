//var foo = function(x = 10): string {
//    if (x === 10) {
//        return "x is equal to 10";
//    } else if (x > 10) {
//        return "x is > 10";
//    } else {
//        return "12";
//    }
//};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.sayHi = function (obj) {
        var predicate = "hi!" + obj.fullName;
        if (typeof obj === 'string') {
            return predicate;
        }
        else if (obj instanceof Person) {
            return obj.fullName + " " + " obj is a class";
        }
        return "hi" + predicate;
    };
    return Person;
}());
var mkds = new Person("mkds", "kumar");
//alert(mkds.fullName);
/////////////////////////////////////////////////////////////////
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, position) {
        _super.call(this, firstName, lastName);
        this.position = position;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this.firstName + ", " + this.position;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.sayHi = function (obj) {
        if (obj instanceof Employee) {
            return "employee" + obj.fullName;
        }
        return _super.prototype.sayHi.call(this, obj);
    };
    return Employee;
}(Person));
var employee = new Employee("m", "k", "m");
alert(employee.sayHi(employee));
//# sourceMappingURL=app.js.map