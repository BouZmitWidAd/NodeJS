console.log('before'); //afficher befor
 getUser(12 ,(user) => {// la methode puisque fiha un callback il va blouquer 2seconde
     console.log(user);

     getRepos(user.id,(repos) =>{
         console.log(repos);
     })
 });
console.log('after');//apres il va afficher after

function  getUser(id, callback){
    setTimeout(() => {
        console.log('geta user from database....')//apres 2 seconde il va afficher ce  console d
        callback ( {id:id,gitHubUser: "idwidadbouzmit"})//apres il va affcter la variable user a l objet
    }, 2000);
}
function getRepos(idUser,callback) {
    setTimeout(() =>{
        console.log('get a repos...')
        callback(['repos1','repos2','repos3'])

    },2000);
    
}