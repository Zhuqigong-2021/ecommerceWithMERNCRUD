import{s as f,b,r as S,a as n,j as i,F as w,y,A as x}from"./index.69fccaa7.js";import{F as _}from"./index.esm.1f6bf08e.js";import{B as c,c as v}from"./iconBase.8a0b8599.js";const F=f.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  height: 100vh;
  .signin__form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
    background-color: rgba(10, 200, 25, 0.1);
    padding: 2rem;
    row-gap: 2rem;
    align-items: flex-start;
    margin-bottom: 5rem;
    input {
      border: none;
      outline: none;
      width: 100%;
      border-bottom: 1px solid black;
      &:focus {
        border: none;
        border-bottom: 1px solid black;
      }
    }
    .signin__group {
      display: flex;
      column-gap: 1rem;
      @media (max-width: 500px) {
        flex-direction: column;
        row-gap: 1rem;
        justify-items: stretch;
        width: 100%;
      }
    }
  }
`,d={email:"",password:""},T=()=>{const s=b(),[o,r]=S.exports.useState(d),{email:t,password:a}=o,l=e=>{const{name:u,value:h}=e.target;r({...o,[u]:h})},m=()=>{r(d)},g=async e=>{e.preventDefault(),s(y())},p=async()=>{if(!t||!a){alert("email or password can not be empty");return}try{s(x({email:t,password:a}))}catch(e){switch(e.code){case"auth/wrong-password":alert("please input the right password");break;case"auth/user-not-found":alert("no user asscoiated with this email");break;default:console.log(e.message)}}};return n(F,{children:i("form",{className:"signin__form",onSubmit:async e=>{e.preventDefault(),p(),m()},children:[n("input",{type:"email",placeholder:"Email ..",name:"email",value:t,onChange:l}),n("input",{type:"password",placeholder:"Password ..",name:"password",value:a,onChange:l}),i("div",{className:"signin__group",children:[n(c,{type:"submit",children:"Sign in"}),n(c,{type:"button",buttonType:v.google,onClick:e=>g(e),children:i(w,{children:[n(_,{})," Sign in with Google"]})})]})]})})};export{T as default};
