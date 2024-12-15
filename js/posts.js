function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayPosts(data))
}

function displayPosts(posts){
  const postContainer = document.getElementById('post-container')
  for(const post of posts){
    console.log(post);
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
      <h5>User- ${post.userId}</h5>
      <h4>Post: ${post.title}</h4>
      <p>Post Description: <br>
      ${post.body}
      </p>
    `
    postContainer.appendChild(postDiv)
    
  }
}


loadPosts()