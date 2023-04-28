let msg=document.getElementById('msg')

const usuarios=[
    {nome: "Adalberto", idade:18},
    {nome: "Leuriscleia", idade:19},
    {nome: "Zezinho", idade:20},
    
];

const users =usuarios.length;

for (let i= 0; i<users;i++){

    msg.innerHTML +=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

//criando um array de imagens
var imagens=[
    'img/1.gif',
    'img/2.gif',
    'img/3.gif',
]

let Index=0;
let time = 2000;

function slideShow(){
    document.getElementById('image').src=imagens[Index];
    Index++;
    if(Index == imagens.length){Index=0}
    setTimeout("slideShow()", time);
}
slideShow();