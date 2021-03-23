const TIMEZONE = 2;

const returnActualDate = (value) => {
    const date = new Date();
    switch (value[1]) {
        case 'days':
            return new Date((date.setDate(date.getDate() + Number(value[0])))).getTime();
        case 'hours':
            return new Date(date.setHours(date.getHours() + TIMEZONE + Number(value[0]))).getTime();
    }

}

export default returnActualDate
