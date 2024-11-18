import axios from 'axios';

let initState = null;

const getInformation = async () => {
    await axios.get('http://localhost:1234/api/data')
    .then(response => {
        initState = response.data
    })
    .catch (error => {
        console.log(error);
    });
}

export const getNewUser = async () => {
    await getInformation();

    const currentDate = new Date();
    const last12Months = [];

    for (let i = 11; i >= 0; i--) {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - i + 1, 0);
        last12Months.push({
            month: `${monthStart.getMonth() + 1}/${monthStart.getFullYear()}`, 
            count: 0,
            start: monthStart,
            end: monthEnd
        });
    }

    initState.forEach(user => {
        const createdAt = new Date(user.createdAt);

        last12Months.forEach(month => {
            const [monthNumber, year] = month.month.split('/'); 
            if (parseInt(monthNumber) === createdAt.getMonth() + 1 && parseInt(year) === createdAt.getFullYear()) {
                month.count++;
            }
        });
    });

    return {
        data : {
            max: Math.max(...last12Months.map(month => month.count)), 
            x: last12Months.map(month => (month.month)),
            y: last12Months.map(month => (month.count))
        }
    };
}

export const getUserAccept = async () => {
    await getInformation();

    const currentDate = new Date();
    const last12Months = [];

    for (let i = 11; i >= 0; i--) {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - i + 1, 0);
        last12Months.push({
            month: `${monthStart.getMonth() + 1}/${monthStart.getFullYear()}`, 
            count: 0,
            start: monthStart,
            end: monthEnd
        });
    }

    initState.forEach(user => {
        const updatedAt = new Date(user.updatedAt);

        last12Months.forEach(month => {
            const [monthNumber, year] = month.month.split('/'); 
            if (parseInt(monthNumber) === updatedAt.getMonth() + 1 && parseInt(year) === updatedAt.getFullYear()) {
                month.count++;
            }
        });
    });

    return {
        data : {
            max: Math.max(...last12Months.map(month => month.count)), 
            x: last12Months.map(month => (month.month)),
            y: last12Months.map(month => (month.count))
        }
    };
}

export const getUserNoAction = async () => {
    await getInformation();

    const currentDate = new Date();
    const last12Months = [];

    for (let i = 11; i >= 0; i--) {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - i + 1, 0);
        last12Months.push({
            month: `${monthStart.getMonth() + 1}/${monthStart.getFullYear()}`, 
            count: 0,
            start: monthStart,
            end: monthEnd
        });
    }
    
    initState.forEach(user => {
        const updatedAt = new Date(user.updatedAt);

        last12Months.forEach(month => {
            if (updatedAt < month.start) {
                month.count += 1;
            }
        });
    });

    return {
        data : {
            max: Math.max(...last12Months.map(month => month.count)),  
            x: last12Months.map(month => month.month),  
            y: last12Months.map(month => month.count)  
        }
    };
};

export const getUserAge = async () => {
    await getInformation();

    const ageGroups = [];
    for (let i = 0; i < 90; i += 10) {
        ageGroups.push({ range: `${i}-${i + 9}`, min: i, max: i + 9, count: 0 });
    }
    ageGroups.push({ range: '90+', min: 90, max: Infinity, count: 0 });

    const currentDate = new Date();

    initState.forEach(user => {
        const birthDate = new Date(user.date);
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        ageGroups.forEach(group => {
            if (age >= group.min && age <= group.max) {
                group.count += 1;
            }
        });
    });

    const maxCount = Math.max(...ageGroups.map(group => group.count));

    return {
        data: {
            max: maxCount,
            x: ageGroups.map(group => group.range),
            y: ageGroups.map(group => group.count)
        }
    };
};