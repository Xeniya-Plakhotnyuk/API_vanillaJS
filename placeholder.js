
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.querySelector(".request").innerHTML = html
    })

document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.querySelector("#post_title").value
    const postBody = document.querySelector("#post_body").value
    const data = {
        title: 'title',
        body: 'body'
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            document.querySelector(".request").innerHTML = `
            <h3 class="blah">${post.title}</h3>
            <p>${post.body}</p>
            <hr />
            ${document.querySelector(".request").innerHTML}
        `

        })
})

