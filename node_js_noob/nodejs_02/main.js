function _07() {


    const fs = require('fs');
    let fileList = fs.readdirSync('.');
    console.log(fileList);

    fs.writeFileSync('new', 'Hello Node.js!');


    const os = require('os');

    console.log(os.cpus());
}

function _10() {
    const cowsay = require('cowsay')
    console.log(cowsay.say({
        text: "I love javascript"
    }));


}

function _12() {
    const mathTool = require('./math-tools');

    console.log(mathTool.getFactorial(5));
}

function _15() {

//// 동기 실행
// const fs = require('fs');
// console.log('Start');
//
// let content = fs.readFileSync('./new', 'utf-8');
//
// console.log(content);
// console.log('Finish');


//비동기 실행
    const fs = require('fs');
    console.log('Start');

    fs.readFile('./new', 'utf-8', (error, data) => {
        console.log(data);
    });
    console.log('Finish');

}

function _18() {
    const fs = require('fs');
    fs.readFile('./test.js', 'utf8', (err, content) => {
        // console.log(content);
    });
}

function _22() {
// 이벤트 전파기
    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();
    const myEmitter2 = new EventEmitter();

// 테스트 Emitter가 발생하였을때 실행하는 함수
    myEmitter.on('test', () => {
        console.log("1");
    })

    myEmitter.on('test', () => {
        console.log("2");
    })

    myEmitter2.on('test', () => {
        console.log("3");
    })

// test라는 emit을 실행한다.
    myEmitter.emit('test')

}

function _24() {
    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();


    myEmitter.on('test', (arg1, arg2) => {
        console.log(arg1);
        console.log(arg2);
    })

//인자의 갯수가 달라도 실행가능
    myEmitter.emit("test", "apple", "banana", "pear")

    const myEmitter2 = new EventEmitter();

    myEmitter2.on('test', (arg1, arg2, arg3, arg4) => {
        console.log(arg1);
        console.log(arg2);
        console.log(arg3);
        console.log(arg4);
    })
    myEmitter2.emit("test", "apple", "banana", "pear")

    const obj = {type: "text", data: "Hello CodeIt", date: "2020-09-01"}
    const myEmitter3 = new EventEmitter();

    myEmitter3.on('test', (info) => {
        console.log(info);
    })
    myEmitter3.emit("test", obj)
}

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.once('codeit',() => {
    console.log(`I love Programming!`);
})
emitter.emit('codeit');
