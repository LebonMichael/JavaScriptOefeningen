/** regula expression, regex **/

const answer = prompt("Enter the date","dd-mm-yyyy or dd.mm.yyyy");
const re = new RegExp("^[0-3]?[0-9][/\.\-][01]?[0-9][/\.\-][0-9]{4}$");
let result = re.test(answer);

if (result){
    true
}else{
    console.log("invalid date");
}
