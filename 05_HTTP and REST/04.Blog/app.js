function attachEvents() {
    
    const URL_POSTS= 'http://localhost:3030/jsonstore/blog/posts';
    const URL_COMMENTS= 'http://localhost:3030/jsonstore/blog/comments';
    const btnLoadPosts= document.getElementById('btnLoadPosts');
    const selectPosts= document.getElementById('posts');
    const postBody= document.getElementById('post-body');
    const ulComments= document.getElementById('post-comments');
    const btnViewPost= document.getElementById('btnViewPost');
    const postTitle= document.getElementById('post-title');

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', viewPosts);

    let allObjects={};

    function loadPosts(){
        fetch(URL_POSTS)
        .then((res) => res.json())
        .then((posts) => {
            allObjects=posts;
            
            selectPosts.innerHTML='';
            for (const post in posts) {
                      
                 let {body , id, title} =posts[post];

                 let option = document.createElement('option');
                 option.value=post;
                 option.innerHTML=title;
                 selectPosts.appendChild(option);
            }
        })
    }

    function viewPosts(){

        fetch(URL_COMMENTS)
        .then((res) => res.json())
        .then((comments) => {

            ulComments.innerHTML='';
           
             let selectedPost = selectPosts.options[selectPosts.selectedIndex].value;
             let post= allObjects[selectedPost];      
             let {body,id,title} =post;
             let bodyText=body;
             let bodyTitle=title
             let p = document.createElement('p');
             p.textContent=body;
             postBody.appendChild(p);
             postTitle.textContent=title;
           
            for (const comment in comments) {
                          
            let {id, postId, text} = comments[comment];
                       
                if(postId===selectedPost){
                    let li = document.createElement('li');
                    li.textContent=text;
                    
                    ulComments.appendChild(li);                   
                }                        
            }
        })
    }
}

attachEvents();