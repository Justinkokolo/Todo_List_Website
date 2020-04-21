
module.exports.getDate = getDate;

function getDate(){

  //getting date
    let today = new Date();

    let options ={
      weekday :"long",
      day:"numeric",
      month:"long"
    };
    let nameOfday = today.toLocaleDateString("en-US",options);

    return nameOfday;
}

exports.getDay = function (){

  //getting date
    let today = new Date();

    let options ={
      weekday :"long",

    };
    let nameOfday = today.toLocaleDateString("en-US",options);

    return nameOfday;
};
