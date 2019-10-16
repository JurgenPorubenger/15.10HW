console.log("Alive!");


document.querySelector("#log_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");
        // получаем данные формы
        let logName = document.querySelector('#log_name').value;
        let logPwd = document.querySelector('#log_pwd').value;
        // let direction = JSON.stringify({way});

        let formLogin= {
            firstName:logName,
            pwd:logPwd,
        };
        console.log(logName+'OOOO');
        console.log(logPwd+'OOOO');
        console.log(formLogin+'OOOO');

        fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formLogin),
        })
            .then((response)=> {
                if (response.status === 200) {
                    console.log("response MAIN2");
                    return  response.json()
                }
            })
            .then(result=>{
                // localStorage.setItem('result', result);
                console.log(result)
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }
);