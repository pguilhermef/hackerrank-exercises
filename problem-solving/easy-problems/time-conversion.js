// The challenge here is convert hours in 12-hour format to military format (24 hour format)

// O desafio aqui é transformar horas no formato 12 horas para 24 horas.

const hour = '07:10:50PM';

const convertHour = (time) => {
  let hour = Number(time.substring(0, 2))
  const minutesAndSeconds = time.substring(2, 8)
  
  if (time.endsWith('PM')) {
    
    if(hour !== 12){
      const converted = hour += 12;
      if (converted < 10) { hour = `0${converted}` }
      if (converted === 24) { hour = `00` }
    };
    
    const afterMiddayHour = `${hour}${minutesAndSeconds}`;
    
    return afterMiddayHour;
  }
  
  if (hour < 10) { hour = `0${hour}` }
  if (hour === 12) { hour = `00` }
  
  const beforeMiddayHour = `${hour}${minutesAndSeconds}`;

  return beforeMiddayHour;
}

console.log(convertHour(hour))