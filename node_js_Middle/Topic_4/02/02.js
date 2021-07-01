function _02() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.text())
        .then((result) => {
            const users = JSON.parse(result)
            console.log(users.length);
            for (let x of users) {
                console.log(x.name);
            }
        })
}

function _04() {
    fetch('https://learn.codeit.kr/api/topics')
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
        })

// 일단 이 코드를 주석 해제하고, 아래 코드를 주석 처리해서 어떤 JSON 데이터가 오는지 확인하세요.


    fetch('https://learn.codeit.kr/api/topics')
        .then((response) => response.text())
        .then((result) => {
            const topics = result// 여기에 코드를 작성하세요.
            const beginnerLevelTopics = topics.filter((topic) => topic.difficulty === '초급');
            console.log(beginnerLevelTopics);
        });
}

function _08_POST() {
    const newMember = {
        name: 'Jerry',
        email: 'jerry@gmail.com',
        department: "engineering",
    };

    fetch('https://learn.codeit.kr/api/members', {
        method: "POST",
        body: JSON.stringify(newMember),
    })
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
        })
}

function _10_PUT() {
    const member = {
        name: 'Alice',
        email: 'alice@gmail.com',
        department: "marketing",
    };
    ``

    fetch('https://learn.codeit.kr/api/members/2', {
        method: "PUT",
        body: JSON.stringify(member),
    })
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
        })
}

function _10_DELTE() {
// Delete에는 BODY가 필요하지 않다.
    fetch('https://learn.codeit.kr/api/members/2', {
        method: "DELETE",
    })
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
        })
}

function _12() {
    const newMember = {
        name: "kim",
        email: "kim@gmail.com",
        department: "ryori",
    };


    fetch('https://learn.codeit.kr/api/members', {
        method: 'POST',
        body: JSON.stringify(newMember)
    })
        .then(() => {
            fetch('https://learn.codeit.kr/api/members')
                .then((response) => response.text())
                .then((result) => {
                    // console.log(result)
                    const members = JSON.parse(result)
                    console.log(members[members.length - 1]);
                });
        });
}


