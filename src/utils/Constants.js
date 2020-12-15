export const getDay = (timestamp) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var d = new Date(timestamp * 1000);
    console.log(days[d.getDay()])
    return days[d.getDay()]
}