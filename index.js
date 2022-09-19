let string=''
const btn=document.querySelectorAll(".btnhandle")

Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='CLEAR'){
            string=''
            document.querySelector("#numberinp").value=string
        }
        else if(e.target.innerHTML=="="){
            string=eval(string)
            document.querySelector("#numberinp").value=string
        }

        else{
        console.log(e.target)
        string=string+e.target.innerHTML
        document.querySelector("#numberinp").value=string
        }
        
    })
})
