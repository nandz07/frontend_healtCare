function getDateOfNextDay(dayName) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const currentDayIndex = today.getDay();

    const targetDayIndex = daysOfWeek.indexOf(dayName); 
    if (targetDayIndex === -1) {
        throw new Error('Invalid day name');
    }

    let daysUntilTarget = targetDayIndex - currentDayIndex;
    if (daysUntilTarget < 0) {
        daysUntilTarget += 7; 
    }

    const nextTargetDate = new Date(today); 
    nextTargetDate.setDate(today.getDate() + daysUntilTarget); 
    return nextTargetDate;
}

export default getDateOfNextDay;