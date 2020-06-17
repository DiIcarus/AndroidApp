import axios from 'axios'


interface Header{
  headers:string
}

interface Config{
  url_schema: "http://" | "https://",
  host: string,
  port: string,
  headers: Header,
  getURL:any,
}

const config:Config = {
  url_schema:"http://",
  host: "0.0.0.0",
  port: "5001",
  headers:{headers:""},
  getURL: function a(){
    return this.url_schema+this.host+":"+this.host
  }
}
const list:string = "/list"
const user:string = "/user/"
const group:string= "/groups"
const task:string = "/tasks"
export default class fetchAPI{
  private config= Object.create(null);
  url:string;
  call:any
  path:any
  constructor(path:string){
    this.config = config;
    this.url = config.getURL();
    this.path = path
    this.call = ((config)=>{
    
    const genURL = (absolute_path:string = "",params:string = "") => {
      return config.URI_scheme+config.hostName+":"+ config.port + absolute_path + params;
    }
    const methodPOST = (absolute_path:string) => {
      return ((form_data:FormData,res:any,err:any)=> {
        axios.post(genURL(absolute_path),form_data,config.headers)
        .then(res)
        .catch(err)
      })
    }
    const methodPUT = (absolute_path:string) => {
      return ((id:string,form_data:FormData,res:any,err:any)=> {
        axios.post(genURL(absolute_path)+"/"+id,form_data,config.headers)
        .then(res)
        .catch(err)
      })
    }
    const methodDELETE = (absolute_path:string) => {
      return ((id:string,res:any,err:any)=> {
        axios({
              url:genURL(absolute_path)+"/"+id,
              method:"DELETE",
          })
        .then(res)
        .catch(err)
      })
    }
    const methodGET = (absolute_path:string = "") => {
      return ((res:any,err:any,params:string = "") => {
        axios.get(genURL(absolute_path,params),config.headers)
        .then(res)
        .catch(err)
      })
    }
    this.url = genURL();
    return {
      post: methodPOST(this.path),
      put: methodPUT(this.path),
      delete: methodDELETE(this.path),
      get: methodGET(this.path),
    }
  })(this.config);
  //   this.call = ((type_name:string)=>{
  //   const post = (path:string) =>{
  //     return (
  //       (formData:FormData,res:any,err:any) => {
  //         axios.post(path+type_name,formData)
  //         .then(res)
  //         .catch(err)
  //       }
  //     )
  //   }
     
  //   const put = (path:string) =>{
  //     return (
  //       (id:string,formData:FormData,res:any,err:any) => {
  //         axios.put(path+type_name+id,formData)
  //         .then(res)
  //         .catch(err)
  //       }
  //     )
  //   }

  //   const get = (path:string) => {
  //     return (
  //       (res:any,err:any) => {
  //         axios.get(path+type_name)
  //         .then(res)
  //         .catch(err)
  //       }
  //     )
  //   }
  //   const del =  (path:string) => {
  //     return (
  //       (id:string,res:any,err:any) =>{
  //         axios({
  //             url:path+type_name,
  //             method:"DELETE",
  //         })
  //         .then(res)
  //         .catch(err)
  //       }
  //     )
  //   }
  //   return {
  //     post:post(this.url),
  //     put:put(this.url),
  //     delete:del(this.url),
  //     get:get(this.url),
  //   }
  // })("")
  }
  
}