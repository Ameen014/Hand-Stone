import axios from "axios";


const token = () =>{
    if(localStorage.hasOwnProperty("user")){
        return `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
    }
    return ""
}
export const Helper = {
    Get : async ({url, hasToken, data=null}) => {
       
        try{
            const response = await axios.get(url,hasToken?{
                headers:{
                    Authorization: token() ,
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                },
                params : data ? data : {}
                
            }:{
                headers:{
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                },
                params : data ? data : {}
            }
            )
            if(response.success && response.status === 200){
                
                return {message:response.data.message,
                    response:response.data}  
            }else{
                return {message:response.data.message,
                    response:response.data}
            }
            
            
        }catch(err){
            console.log(err);
            const err_response = err.response.data
            if(err_response.success !== undefined && err_response.data !== undefined){
                
                if(err_response.data.length>0){
                    return { message:err_response.data}
                }else{
                    return { message:err_response.message}
                }
                
            }else{
                return { message:err.message}
            }
           
    
        
        }
    
    },
    Get_Abort : async ({url, hasToken, data=null,signal}) => {
       
        try{
            const response = await axios.get(url,hasToken?{
                headers:{
                    Authorization: token(),
                   // ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                },
                params : data ? data : {},
                signal : signal
                
            }:{params : data ? data : {},
                signal : signal,
                headers:{
                 //   ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                }
            }
            )
            if(response.success && response.status === 200){
                return {message:response.data.message,
                    response:response.data}  
            }else{
                return {message:response.data.message,
                    response:response.data}
            }
            
            
        }catch(err){
            console.log(err);
            if(!err.response?.data){
                return { message:err.message}
            }else{
                const err_response = err.response.data
            if(err_response.success !== undefined && err_response.data !== undefined){
                
                if(err_response.data.length>0){
                    return { message:err_response.data}
                }else{
                    return { message:err_response.message}
                }
                
            }else{
                return { message:err.message}
            }
            }
            
           
    
        
        }
    
    },
    Post: async ({url, hasToken, data=null}) => {
       
        try{
            const response = await axios.post(url,data,hasToken?{
                headers:{
                    Authorization: token(),
                //     "Access-Control-Allow-Origin" : "*",
                //   "Access-Control-Allow-Headers" : 'Content-Type, X-Auth-Token, Origin, Authorization',
                //   "Access-Control-Allow-Methods" : 'POST, GET, OPTIONS, PUT, DELETE'
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                }
            }:{
                headers:{
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                  "Access-Control-Allow-Origin" : "*",
                //   "Access-Control-Allow-Headers" : 'Content-Type, X-Auth-Token, Origin, Authorization',
                //   "Access-Control-Allow-Methods" : 'POST, GET, OPTIONS, PUT, DELETE'
                },
         
            }
            )
            
            
            if(response.success && response.status === 200){
                return {message:response.data.message,
                    response:response.data
                }  
            }else{
                return {message:response.data.message,
                    response:response.data,
                }
            }
            
            
        }catch(err){

            console.log(err);
            const err_response = err.response.data
            if(err_response.success !== undefined && err_response.data !== undefined){
                
                if(err_response.data.length>0){
                    return { message:err_response.data}
                }else{
                    return { message:err_response.message}
                }
                
            }else{
                return { message:err.message}
            }
    
        
        }
    
    },
    Put: async({url, hasToken, data=null}) => {
        try{
            const response = await axios.put(url,data,hasToken?{
                headers:{
                    Authorization: token(),
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                }
            }:{
                headers:{
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                }
            }
            )   
            if(response.success && response.status === 200){
                return {message:response.data.message,
                    response:response.data,
                }  
            }else{
                return {message:response.data.message,
                    response:response.data,
                }
            }
            
        }catch(err){
            console.log(err);
            const err_response = err.response.data
            if(err_response.success !== undefined && err_response.data !== undefined){
                
                if(err_response.data.length>0){
                    return { message:err_response.data}
                }else{
                    return { message:err_response.message}
                }
                
            }else{
                return { message:err.message}
            }
        }

    },
    Delete: async({url, hasToken, data=null}) => {
        try{
            const response = await axios.delete(url,hasToken?{
                headers:{
                    Authorization: token(),
                //    ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                },
                // params : data ? data : {}
            }:{
                headers:{
                  //  ApiKey: "acO+4JTx8lmZmOo4qZemnKS7JufhcyviuvUaz5VL7faQo60isZFx/sf7FbtNs1FlkLG03/HsIs+6odEwY/30HrST7JZaDsAmTMrvB0qm25LqxoZquKThjgW9S6NCX8lWWLhp6mUOCBfe86B0dcgEhe9SXgmFVqA8UvzZ+G+YC8Y="
                }
            }
           ,data )
            
            
            if(response.success && response.status === 200){
                return {message:response.data.message,
                    response:response.data,
                }  
            }else{
                return {message:response.data.message,
                    response:response.data,
                }
            }
        }catch(err){
            console.log(err);
            const err_response = err.response.data
            if(err_response.success !== undefined && err_response.data !== undefined){
                
                if(err_response.data.length>0){
                    return { message:err_response.data}
                }else{
                    return { message:err_response.message}
                }
                
            }else{
                return { message:err.message}
            }
        }

    }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined; // Let Redux use initial state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};