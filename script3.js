// create 3 div elements 

// DIV ELEMENT 1 START HERE

const container = document.createElement("div")
container.id = "container"

container.innerHTML= ` <input id="inputbox" >
                       <button id="inputbox">${"Search"}
                       </button> `

document.body.appendChild(container)

// DIV ELEMENT 1 ENDS HERE



// WRITE ASYNC/AWAIT FUNCTION STARTS HERE

async function getData()
{
    try {    

        let user =inputBox.value
        inputBox.value =""
        container2.innerHTML=""
        container3.innerHTML=""

        const res  = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await res.json();

        console.log(data);  

        appendData(data);
         } 
    catch (error){console.log(error,"no data fetched")}
    
}


// getData();

//  ASYNC/AWAIT FUNCTION ENDS HERE

function appendData(data)
{

    //  CREATE 2 CONTAINER AND APPEND ELEMENTS USING TEMPLATE LITERALS


    // CONTAINER 2 STARTS HERE
    const container2 = document.createElement("div")
    container2.id="container"

    container2.innerHTML = `Total Number of repos : <h1>${data.length}</h1>`
                            // <img src=`${data[0].owner.avatar_url}` alt="">

    document.body.appendChild(container2);
    // CONTAINER 2 ENDS HERE

    

// container 3 created ouside loop
    let container3 = document.createElement("div");
    container3.id="container"
    

    // container3 STARTS WITH LOOP

    for(let i=0;i<data.length; i++){
        
        const smallbox = document.createElement("div")
        smallbox.className ="smallbox"

        smallbox.innerHTML=`
        <h3> Name:${data[i].name}</h3>
        <h4> Languaages :${data[i].language}</h4>
        <h4> Fork_counts:${data[i].forks_count}</h4>
        <h4> Star_count :${data[i].stargazers_count}</h4>
        `
        // <a href="${data[i].html_url}">${"Repo_URL"}</a>

        container3.appendChild(smallbox);
    } 

    document.body.appendChild(container3)
    // container3 ENDS HERE

}

search.addEventListener('click', getData )