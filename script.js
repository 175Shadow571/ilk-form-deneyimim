const html = document.documentElement; 
const body = document.body;
const radioSiyah = document.querySelector("#siyah")
const radioBeyaz = document.querySelector("#beyaz")

radioBeyaz.addEventListener("click", () =>{html.className= "whet"})
radioSiyah.addEventListener("click", () =>{html.className= "black"})

let ekranGenisliği = window.innerWidth;
let ekranUzunluğu = window.innerHeight;
let genislik = Math.floor(ekranGenisliği/20);
let uzunluk = Math.floor(ekranUzunluğu/20);

function divOlustur(){
    for(let i = 0; i < uzunluk; i++){
        let div = document.createElement("div");
        div.classList = `babaDiv${i}`
        div.style = `height:20px;flex:1; display:flex;`
        body.appendChild(div)

        for (let a = 0; a <genislik; a++) {
            let div = document.createElement("div");
            div.style = " flex:1;" 
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
    let x = veri.clientX
    let y = veri.clientY

})

body.addEventListener("mouseleave", (veri)=>{
    let div = veri.target;
    div.style.backgroundColor = ""
})


body.addEventListener("touchmove", (veri)=> {
    
    let x = veri.touches[0]
    let div = document.elementFromPoint(x.clientX,x.clientY)
    if(div.classList.value == "cocukDiv"){div.style.backgroundColor = dongu()}    
    
})