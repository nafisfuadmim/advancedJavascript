const student =[
    {id:453, name:"Omor Sunny"},
    {id:833, name:"Manna"},
    {id:757, name:"Dipjol"},
    {id:335, name:"Shakib"},

    
]
const names =student.map(s => s.name);
const ids = student.filter(s => s.id < 453);
const biggerId = student.find(s => s.id<757);



console.log(biggerId);