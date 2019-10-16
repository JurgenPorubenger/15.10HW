console.log("Alive!");


document.querySelector("#log_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");
        // получаем данные формы
        let firstName = document.querySelector('#reg_name').value;
        let pwd = document.querySelector('#reg_pwd').value;
        // let direction = JSON.stringify({way});
        let formLogin= {
            firstName:firstName,
            pwd:pwd,
        };
        // console.log(formRegister);

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