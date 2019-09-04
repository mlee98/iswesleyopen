function changeBG(){
    let date = new Date();
    if(date.getHours() >= 9){
        let elements = document.getElementsByClassName('tochange');
        for(let x=0;x<elements.length;x++){
            elements[x].className="bg-success"
        }
    } else {
        document.getElementById('body').className="bg-danger";
    }
}