


function formatedDay(duration){
  let weeks = Math.floor(duration / 7);
  let days = duration % 7;

  let result = '';

  if (weeks === 1) {
    result += weeks + ' week';
  } else if (weeks > 1) {
    result += weeks + ' weeks';
  }

  if (weeks > 0 && days > 0) {
    result += ' ';
  }

  if (days === 1) {
    result += days + ' day';
  } else if (days > 1 || result === '') {
    result += days + ' days';
  }

  return result;
}

module.exports = formatedDay