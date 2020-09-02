const datePretty = dateArg => {
   const month = getMonth(dateArg.getMonth());
   const date = dateArg.getDate();
   const year = dateArg.getFullYear();
   const hour = getHour(dateArg.getHours());
   const minutes = dateArg.getMinutes();

   const time = `${month} ${date}, ${year} at ${hour}:${
      minutes < 10 ? '0' + minutes : minutes
   } ${dateArg.getHours() > 12 ? 'pm' : 'am'}`;

   return time;
};

const getMonth = monthNo => {
   switch (monthNo) {
      case 1:
         return 'January';
      case 2:
         return 'February';
      case 3:
         return 'March';
      case 4:
         return 'April';
      case 5:
         return 'May';
      case 6:
         return 'June';
      case 7:
         return 'July';
      case 8:
         return 'August';
      case 9:
         return 'September';
      case 10:
         return 'October';
      case 11:
         return 'November';
      case 12:
         return 'December';
      default:
         console.log('default');
         break;
   }
};

const getHour = hour => {
   if (hour > 12) {
      return hour - 12;
   } else {
      return hour;
   }
};

export default datePretty;
