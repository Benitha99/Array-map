let data=[
   
    {
        name:'peter',
        age:34
    },
    {
        name:'lil',
        age:25
    },
    {
        name:'kim',
        age:35
    },
    {
        name:'jean',
        age:27
    },
    {
        name:'bella',
        age:26
    },
    {
        name:'matt',
        age:36
    },
];
const info=document.querySelector('#info');
let details=data.map(function(item){
    return '<div>' + item.name + ' ' + 'is '+ item.age + ' years old'+ '</div>';
});
info.innerHTML=details.join('\n');