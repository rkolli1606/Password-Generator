const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randomCharacter()
{
  let i = Math.floor(Math.random()*characters.length);
  return characters[i];  
}


function generateRandomPassword()
{
    let index1 = Math.floor(Math.random()*3)+13
    let index2 = Math.floor(Math.random()*3)+13
    let index3 = Math.floor(Math.random()*3)+13
    let index4 = Math.floor(Math.random()*3)+13
    let string1 = ""
    let string2 = ""
    let string3 = ""
    let string4 = ""

    for(let i=0;i<index1;i++)
    {
        string1+=randomCharacter()
    }
    for(let j=0;j<index2;j++)
    {
        string2+=randomCharacter()
    }
    for(let j=0;j<index3;j++)
    {
        string3+=randomCharacter()
    }
    for(let j=0;j<index4;j++)
    {
        string4+=randomCharacter()
    }
    // console.log(string1)
    // console.log(string2)
    let inputBox1 = document.querySelector(".input-box1")
    let inputBox2 = document.querySelector(".input-box2")
    let inputBox3 = document.querySelector(".input-box3")
    let inputBox4 = document.querySelector(".input-box4")
    // console.log(inputBox1)
    // console.log(inputBox2)
    inputBox1.value = string1
    inputBox2.value = string2
    inputBox3.value = string3
    inputBox4.value = string4
}