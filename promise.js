// const p = new Promise((resolve, reject)=>{
//
//     const status= true;
//     if (status){
//         resolve({id:1, name:'widadbouzmit'});
//
//     }
//     else{
//         reject(new Error ('user is not found'));
//     }
//
//
// });

function  getUser(id){

    return new Promise((resolve,reject)=> {


        setTimeout(() => {
            console.log('geta user from database....')//apres 2 seconde il va afficher ce  console 
            resolve ( {id:id,gitHubUser: "idwidadbouzmit"})//apres il va affcter la variable user a l objet
        }, 2000);
    })

}
function getRepos(idUser) {
    return new Promise((resolve,reject)=> {

            setTimeout(() =>{
            console.log('get a repos...')
            resolve(['repos1','repos2','repos3'])

        },2000);

})
}

console.log('before'); //afficher befor
getUser(12 ).then((user) =>{
    console.log(user);
    return getRepos(user.id);

})
    .then((repos) => {
        console.log(repos);
    })
//retourner promise
console.log('after')



// p.then((user)=>console.log('resolve',user))
//     .catch((err)=>console.log('reject',err.message))

