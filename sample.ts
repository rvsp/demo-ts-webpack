// class A {

// }

// class B extends A {

// }

// class c extends B {

// }

// not possible
// class X{

// }

// class Y{

// }

// class Z extends X, Y{

// }

// interface X {
//     geData(): string;
// }

// interface Y {

// }

// class Z implements X, Y {
//     geData() {
//         return ``;
//     }
// }
abstract class temp {
    num: number = 10;
    getData() {

    }

    abstract getValue(): string;
}
class zzz extends temp {

    getValue() {
        return 'hi';
    }
}
