class userCRUD{
    private id:number;
    private username:string;
    private useradd:string;
    private contact:number;
    
    
    constructor(id,name,add,contact){
        this.id=id;
        this.username=name;
        this.useradd=add;
        this.contact=contact;
    }
}

//array of object
let arrayOfObj=[];
//function to create new user
function createuser(id,name,add,contact)
{
    var usr=new userCRUD(id,name,add,contact);
    arrayOfObj.push(usr);

}

createuser(1, 'Tommy Vercetti', 'ViceCity,FL', 8182838485);


//find user by id
function findbyId(id:number)
{
   let record=arrayOfObj.filter(i=>i.id===id);
   console.log(record);
}
findbyId(1);

console.log(arrayOfObj);
//create new user
createuser(2, 'Claude', 'Liberty City, Liberty', 7172737475);
console.log(arrayOfObj);
/*function deleteUser(id:number)
{
    let usertodelete=arrayOfObj.map((user)=>{return user.id}).indexOf(id);
    arrayOfObj.splice(usertodelete,1);
    console.log("user deleted"+usertodelete);
}
deleteUser(1);*/
function edituser(id:number)
{
  var item={"id":id,"username":"Varad","useradd":"","contact":822567};
  
 arrayOfObj=arrayOfObj.map((item)=>{if(item.id===id){
     item.username="varad";
     item.useradd="ViceCity,FL";
     item.contact=234567;
     console.log("User Updated Successfully");

 }else{
     console.log("not found!");
 }
return item;})
 console.log(arrayOfObj);
}
  edituser(2);
  
function userbysamecity(){
    let cityobj=[];
    arrayOfObj.forEach((it)=>{
        for(let i=0;i<arrayOfObj.length;i++){
            for(let j=1;j<arrayOfObj.length;i++){
              
                if(it[i].useradd==it[j].useradd){
                    console.log(it[i]);
                    console.log(it[j]);
                    cityobj.push(it[i]);
                    cityobj.push(it[j]);
                }
            }
        }
    })
    console.log(cityobj);
}
userbysamecity();
