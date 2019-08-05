function  getUser(id){

    return new Promise((resolve,reject)=> {


        setTimeout(() => {
            console.log('geta user from database....')//apres 2 seconde il va afficher ce  console d
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
//consommation au facon de asyn and awiat
async function run() {
    const user=await getUser(2);
    console.log(user);
    const repos=await getRepos(user.id);
    console.log(repos);

}
run();