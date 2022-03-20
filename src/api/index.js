const baseurl = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT'

export const getPosts = async () => {
    try{
    const url = `${baseurl}/posts`;
    const response = await fetch(url,{
        method:"GET",
        headers:makeHeaders()
    });
    const json = await response.json();
    console.log(json);
    return json;
    }
    catch(error){
        console.error(error)
    }
};

export const testAuthentication = async () => {

    // URL that we're gonna reach out to
    const url = `${baseurl}/test/me`;
    try{    
    const token = localStorage.getItem("token")
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    //console.log(json)
    return json;
}
catch(error){
    console.error(error);
}
};

export const registerUser = async (user) => {
    const url = `${baseurl}/users/register`;
    const response = await fetch(url,{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
    }
        );
    const json = await response.json();
    const token = json.data.token;
    localStorage.setItem("token", token);
    //console.log(token)
    return json;
};

export const loginUser = async (user) => {
    try{
    const url = `${baseurl}/users/login`;

    const response = await fetch(url,{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
    }
        );
    const json = await response.json();
    const token = json.data.token;
    localStorage.setItem("token", token);
    return json;
}
catch(error){
    console.error(error);
}};

export const makeHeaders = () => {
    const token = localStorage.getItem("token", token);
    if (token !== 'undefined' && token !== null){
        const headersObject = 
                    {'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`}  
        
        return headersObject;
    }
        else {const headersObject = {
            headers: {'Content-Type': 'application/json'}
        }
            return headersObject;
    }

};

export const addPost = async (postObject) => {
    const url = `${baseurl}/posts`;
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: makeHeaders(),
            body: JSON.stringify({
                post:postObject
            })
        });
        const json = await response.json();
        console.log(json);
        return json;
    }
    catch(error){
        console.error(error);
    }
};

export const deletePost = async (id) => {
    const url = `${baseurl}/posts/${id}`;
    try{
        const response = await fetch (url,{
            method: "DELETE",
            headers:makeHeaders()
        })
        const json = await response.json();
        console.log(json)
        return json;
    }
    catch(error){
        console.error(error);
    }
};

export const createMessage = async (id, message) => {
    const url = `${baseurl}/posts/${id}/messages`
    try{
        const response = await fetch(url, {
            method: "POST",
            headers:makeHeaders(),
        body: JSON.stringify({
            message: {
                content:message
            }
        })

        })
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error);
    }
};

export const seeMe = async () => {
    const url = `${baseurl}/users/me`;
    try{
        const response = await fetch(url, {
            method:"GET",
         headers:makeHeaders()   
        })
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error);
    }
};

export const editPost = async (postObject, id) =>{
    const url = `${baseurl}/posts/${id}`;
    try{
        const response = await fetch(url, {
           method: "PATCH" ,
           headers:makeHeaders(),
           body: JSON.stringify({
            post:postObject
           })
        });
        const json = await response.json();
        return json
    }
    catch(error){
        console.error(error)
    }
}
//2112-ftb-et-web-pt

