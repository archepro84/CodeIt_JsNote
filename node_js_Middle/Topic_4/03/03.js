function _01() {
    console.log("Start!");
    fetch('https://jsonplaceholder.typicode.com/users')
        // Callback을 등록 1) / URL에서 데이터가 수신되었을 때에 실행된다.
        .then((response) => response.text())
        // Callback을 등록 1)에서 넘긴 값을 받는다.
        .then((result) => {
            console.log(result);
        })
    console.log("End");
}


function _05() {
// Promise의 객체를 리턴,
    fetch('https://jsonplaceholder.typicode.com/users')
        //해당 프로미스가 fulfilled상태가 됐을때 reponse 변수에 들어온다.
        .then((response) => response.text())

        .then((result) => {
            console.log(result)
        })
}

function _08() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.text())
        .then((result) => {
            const users = JSON.parse(result);
            //사용자의 아이디를 구함
            const {id} = users[0];
            //Request로 보냄, 방금전에 구한 id 값을 삽입
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then((response) => response.text())
                .then((posts) => {
                    console.log(posts);
                });
        });

    console.log("End");

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.text())
        .then((result) => {
            const users = JSON.parse(result);
            //사용자의 아이디를 구함
            const {id} = users[0];
            //Request로 보냄, 방금전에 구한 id 값을 삽입
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        })
        .then((response) => response.text())
        .then((posts) => {
            console.log(posts);
        });

    console.log("End");
}

function _09() {
    fetch('https://learn.codeit.kr/api/interviews/summer')
        .then((response) => response.json())
        .then((interviewResult) => {
            const {interviewees} = interviewResult;
            const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
            return JSON.stringify(newMembers)
        })
        .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
            method: 'POST',
            body: newMembers
        }))
        .then((response) => {

            if (response.status === 200) {
                return response
            } else {
                throw new Error('New members not added');
            }
        })
        .then((response) => response.json())
        .then((members) => {
            console.log(`총 직원 수: ${members.length}`);
            console.log(members);
        });
}

function _15() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.text(), (error) => {
            console.log(error);
        })
        .then((result) => {
            console.log(result);
        });

    // Internet Disconnected ☆
    fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
        .then((response) => response.text()) // Promise-B
        .then(undefined, (error) => {
            console.log(error);
        }) // Promise-C
        .then((result) => {
            console.log(`Quiz: ${result}`);
        }); // Promise-D
}
