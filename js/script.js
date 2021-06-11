var input = document.getElementById("number");
var postsHtml = document.getElementById("posts");
var clickBtn = document.getElementById("click");

function getResponse() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText);
                printData(this.responseText);
            }
        }
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.send();
};

getResponse();

function submitFunc() {
    console.log("Input value:" + input.value);
    if (input.value > 10) {
        alert("Enter number between 1 and 10");
        clearFunc();
    }
    getResponse();
    clickBtn.disabled = true;
};

function clearFunc() {
    input.value = "";
    postsHtml.innerHTML = "";
    clickBtn.disabled = false;
};

function printData(response) {
    var jsResponse = JSON.parse(response);

    var result = jsResponse.filter(function(value) {
        console.log(value.userId == input.value); //returns boolean in console.log
        return value.userId == input.value;
    });

    console.log(result); //new array

    for (var i = 0; i < result.length; i++) {
        console.log(result[i].title);
        postsHtml.innerHTML +=
            `
        <div class="post">
            <div class="postTitle">
            <p class="title">Subject:</p>
            <p class="subjectText text">${result[i].title}</p>
            </div>    
            
            <div class="postMessage">
            <p class="title">Message:</p>
            <p class="bodyText text">${result[i].body}</p>
            </div>
        </div>
        `;
    }
};