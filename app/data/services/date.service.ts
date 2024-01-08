export function formattedDateForDays(date: any): number {
    const dateDB: any = new Date(date);
    const currentDate: any = new Date();
    const dateInMilliseconds = Math.abs(currentDate - dateDB);
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const days = Math.floor(dateInMilliseconds / dayInMilliseconds);
    return days
}

export function formattedDateForBirthday(dateDB: any): string {
    const date = new Date(dateDB);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate
}

export function formattedDateForBirthday2(dateDB: any): string {
    const date = new Date(dateDB);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate
}

export function calculateAgeFromDateOfBirth(dateDB: any) {
    const birthDate = new Date(dateDB);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
   
  
  