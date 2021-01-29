var userCRUD = /** @class */ (function () {
    function userCRUD(id, name, add, contact) {
        this.id = id;
        this.username = name;
        this.useradd = add;
        this.contact = contact;
    }
    return userCRUD;
}());
//array of object
var arrayOfObj = [];
//function to create new user
function createuser(id, name, add, contact) {
    var usr = new userCRUD(id, name, add, contact);
    arrayOfObj.push(usr);
}
createuser(1, 'Tommy Vercetti', 'ViceCity,FL', 8182838485);
//find user by id
function findbyId(id) {
    var record = arrayOfObj.filter(function (i) { return i.id === id; });
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
function edituser(id) {
    var item = { "id": id, "username": "Varad", "useradd": "", "contact": 822567 };
    arrayOfObj = arrayOfObj.map(function (item) {
        if (item.id === id) {
            item.username = "varad";
            item.useradd = "ViceCity,FL";
            item.contact = 234567;
            console.log("User Updated Successfully");
        }
        else {
            console.log("not found!");
        }
        return item;
    });
    console.log(arrayOfObj);
}
edituser(2);
function userbysamecity() {
    var cityobj = [];
    arrayOfObj.forEach(function (it) {
        for (var i = 0; i < arrayOfObj.length; i++) {
            for (var j = 1; j < arrayOfObj.length; i++) {
                console.log(it[i]);
                if (it[i].useradd == it[j].useradd) {
                    console.log(it[i]);
                    console.log(it[j]);
                    cityobj.push(it[i]);
                    cityobj.push(it[j]);
                }
            }
        }
    });
    console.log(cityobj);
}
userbysamecity();
