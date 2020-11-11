//add default  data-color to  page
document.body.classList.add(localStorage.getItem('pageColor') || "green");

var colorList = document.querySelectorAll(".color-switcher li");

var  classesList = [];
// loop on element
for(var i = 0 ; i < colorList.length ; i++ ) {

        //get classes List
        classesList.push(colorList[i].getAttribute("data-color"));
            
        colorList[i].addEventListener('click',function (){
            //remove current classes 
            document.body.classList.remove(...classesList);
            // add classes from li data-color
            document.body.classList.add(this.getAttribute('data-color'));
            // add data to lacale storage
            localStorage.setItem('pageColor',this.getAttribute('data-color'));
        },
        false
        );
}
console.log(localStorage.getItem("pageColor"));