
const a = " 4 January 2024 12:00 ";

const input = document.querySelectorAll('input');
document.getElementById('date').innerText = a ;

const clock = ()=> {
    const endDate = new Date(a);
    const currentDate = new Date()
    const diffDate = (endDate - currentDate)/1000;  //milliseconds in seconds
    input[0].value =Math.floor(diffDate/3600/24); //for days
    input[1].value = Math.floor((diffDate / 3600) % 24) ; //for hours
    input[2].value = Math.floor((diffDate / 60 ) % 60) ; //for minutes
    input[3].value = Math.floor((diffDate) % 60 ); //for seconds
}


clock();


setInterval(
    () => {
        clock()
    },
    1000
)

function ig(){

   window.open('https://www.instagram.com/','_blank');

}

function facebk(){
    window.open('https://www.facebook.com/','_blank');
}
