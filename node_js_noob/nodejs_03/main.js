function _03() {
//http 코어 모듈
    const http = require('http');

//서버역할을 하는 객체 하나 생성
    let server = http.createServer(function (request, response) {
//    request 클라이언트 요청
//    response : 서버가 처리할 데이터 유형
        response.end(`<h1>Hello world!</h1>`)
    });

// 서버객체에 3000번 포트를 열고, 클라이언트의 요청을 받을 준비한다.
    server.listen(3000);


}

function _08() {

    let url = new URL('http://example.com/business/mart/item?category=14&id=2965')


    console.log(url.protocol);
    console.log(url.host);
    console.log(url.pathname);
    console.log(url.search);

}

function _11() {
    const http = require('http');

    users = ['Tome', 'Andy', 'Jessica', 'Paul'];


    let server = http.createServer((request, response) => {
        if (request.url === '/') {
            response.end('<h1>Welcome!</h1>')
        } else if (request.url === '/users') {
            response.end(`<h1>${users}</h1>`)
        } else if (request.url.split('/')[1] === 'users') {
            let userIdx = request.url.split('/')[2];
            // 배열의 시작은 0이므로
            let userName = users[userIdx - 1];

            response.end(`<h1>${userName}</h1>`)
            //    ex) http://localhost:3000/users/2
        } else {
            response.end(`<h1>Page Not Available</h1>`)
        }
    });

// 서버객체에 3000번 포트를 열고, 클라이언트의 요청을 받을 준비한다.
    server.listen(3000);

}


const express = require('express')
const app = express();

users = ['Tome', 'Andy', 'Jessica', 'Paul'];

app.get('/', (request, response) => {
    response.end('<h1>Welcome!</h1>')
})
app.get('/users', (request, response) => {
    response.end(`<h1>${users}</h1>`)
})
//유저부터 시작하고, 다른값이 붙은 것을 설명함
app.get('/users/:id', (request, response) => {
    // console.log(request.params);
    const userName = users[request.params.id - 1];
    response.end(`<h1>${userName}</h1>`)
})
app.get('*', (request, response) => {
    response.end('<h1>Page Not Available</h1>')
})

app.listen(3000);