import {login} from "../api/index";
import router from '@/router';
export default{
    login:async function (state:any,data:any){
        let loginResult = login(data);
        console.log(loginResult)
       let res= await loginResult;
        console.log(res);
        state.loginResult = res;
        localStorage.setItem("loginResult",JSON.stringify(res));
        router.push("/home")
    }
}