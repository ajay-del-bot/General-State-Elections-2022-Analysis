

var h=$('#welcome').height()
console.log(h);
$(window).scroll(function(){

  if($(this).scrollTop() > (h+5)){
    $('.header-full').addClass('fixed');
    $('.about').addClass('about-fixed')
  }
  else{
    $('.header-full').removeClass('fixed');
    $('.about').removeClass('about-fixed')
  }
});


// function showMapData(stateName){
  
//     console.log("IN Data this ");
    

//     let rows = data.split('\n').slice(1);
//     rows.forEach(row=>{
//         const columns = row.split(',');
//         if(columns[0]!==stateName){
//           return;
//         }

//         const state = columns[0];
//         const cap = columns[1];
//         const gov = columns[2];
//         const cm = columns[3];
//         //console.log(state, cap);
//         let ele_stateName = document.getElementById('container state-name');
//               ele_stateName.innerHTML = state;
//         let ele_cap = document.getElementById('container state-capital');
//               ele_cap.innerHTML = cap;
//         let ele_gov = document.getElementById('container state-governor');
//               ele_gov.innerHTML = gov;
//         let ele_cm = document.getElementById('container state-cm');
//               ele_cm.innerHTML = cm;
//     });

  //   // console.log(data);
  // });



// }
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}
