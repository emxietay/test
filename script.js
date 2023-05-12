

// Lab 16.4. Câu lệnh switch
// Sử dụng câu lệnh switch để ghi string sau cho 'language': 
// Chinese or Mandarin: 'MOST number of native speakers!'
// Spanish: '2nd place in number of native speakers'
// English: '3rd place'
// Hindi: 'Number 4'
// Arabic: '5th most spoken language'
// Tất cả các log đơn giản khác 'Great language too :D'


let language = prompt("What is your language?");
switch(language) {
  case "Chinese":
  case "Mandarin":
    console.log('MOST number of native speakers!😮');
    break;
  case "Spanish":
    console.log('2nd place in number of native speakers');
    break;
  case "English":
    console.log('3rd place');
    break;
  case "Hindi":
    console.log('Number 4');
    break;
  case "Arabic":
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
    break;
}
