let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
// let word="delicate";

let input=document.querySelector("input");
let btn=document.querySelector("button");
let p=document.querySelector("p");
btn.addEventListener("click", async ()=>{
    let word=input.value;
   let data= await getMeaning(word);
//    console.log(data);
    p.innerText=data;
})
async function getMeaning(word){
    try{
        let res=await axios.get(url+word);
        let outData=(res.data)[0].meanings;
        let result='';
        for(data of outData){
            let meanings=data.definitions;
            for(means of meanings){
                result=means.definition;
            }
        }
        return result;
    }catch(e){
        console.log(`error: ${e}`);
    }
}