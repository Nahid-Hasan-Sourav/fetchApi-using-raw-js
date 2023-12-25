fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => display(data));


  function display(users) {
    console.log(users);
    console.log(users.length);

//    const users = data.map(user=>{
//        const row =document.getElementById("row");
//        row.innerHTML =
//        `
//         <h1>${user.id}</h1>
//        `
//     })

    function elemment(title,id){
        const row= document.getElementById("row");
        const div=document.createElement("div")
        div.classList.add("col");

        div.innerHTML = `
        <div class="card">
            <div class="card-body text-center">
            <p>${id}</p>
                <h6 class="card-title">${title}</h6>
            </div>
        </div>
     `
        row.appendChild(div);
      console.log(title);
    }
   

    for(let i = 0; i<users.length; i++){    
        const userTitle=users[i].title;
        const userId=users[i].id;
       
        elemment(userTitle,userId);
      
    }
  
  }