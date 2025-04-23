let body = document.body;


function divOlustur(){
    
    for(let i = 0; i < 100; i++){
        let div = document.createElement("div");
        div.classList = `babaDiv${i}`
        div.style = " height:15px;  flex:1; display:flex;" 
        body.appendChild(div)

        for (let a = 0; a <100; a++) {
            let div = document.createElement("div");
            div.style = " flex:1; opacity:1" 
            let babaDiv = document.querySelector(`.babaDiv${i}`);
            div.classList = `cocukDiv`
            
            babaDiv.appendChild(div)
            
        }
    }

}
divOlustur()


const koyuRenk = ["#39007f","#7f0007","#477f00","#007f78","#3a009e","#9e0015","649e00","#009e89"]
function dongu(){
    let a = Math.random() *9;    
    return koyuRenk[Math.floor(a)];
    
}


body.addEventListener("mouseover", (veri)=> {
    let div = veri.target;
    if(div.classList.value == "cocukDiv"){div.style.backgroundColor = dongu()}    

    console.log(veri);
    
})

body.addEventListener("mouseleave", (veri)=>{
    let div = veri.target;
    div.style.backgroundColor = ""
})
