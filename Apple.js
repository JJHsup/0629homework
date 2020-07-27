var A =document.getElementById('all');
var B =document.getElementById('bl');
var S =document.getElementById('si');
var G =document.getElementById('go');
var M =document.getElementById('money');

function clear(){
    A.style.display='none';
    B.style.display='none';
    S.style.display='none';
    G.style.display='none';
}

function changblack(){
    clear();
    return document.getElementById('bl').style.display='block';
}

function changsilver(){
    clear();
    return document.getElementById('si').style.display='block';
}

function changgolden(){
    clear();
    return document.getElementById('go').style.display='block';
}

function Style(){
    let but = document.querySelectorAll('div.style button');
    for (let i =0 ; i<3;i++){
        but[i].disabled='disabled';
    }
}


function changdevicesmall(){
    // Style();
    M.innerText = 'NT$10,900 起';
}

function changdevicelarge(){
    M.innerText = 'NT$13,900 起';
}


function changlinkwi(){
    M.innerText = 'NT$13,900 起';
}
function changlink(){
    M.innerText = 'NT$18,400 起';
}

function changipad(){
    document.getElementById('phone').style.display ='none';
    return document.getElementById('pad').style.display ='block';

}

function changiphone(){
    document.getElementById('pad').style.display ='none';
    return document.getElementById('phone').style.display ='block';

}
