
/**
 * receive a timestamp and return weekday correspond to timestamp 
 */
export const getDay = (timestamp) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var d = new Date(timestamp * 1000);
    return days[d.getDay()]
}