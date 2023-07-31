export const camelCaseToCapitalizedWords = (camelCaseString) => {
    const words = camelCaseString.split(/(?=[A-Z0-9])/);
    const capitalizedWords = words.map(word => {
        if (/^\d+$/.test(word)) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

export const getRandomCoordinatesInDubai = () => {
    const minLatitude = 24.75;
    const maxLatitude = 25.30;
    const minLongitude = 55.10;
    const maxLongitude = 55.50;

    const randomLatitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
    const randomLongitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;

    return {
        latitude: randomLatitude,
        longitude: randomLongitude,
    };
}

export const timeAgo = (datetimeString) => {
    const date = new Date(datetimeString);
    const now = new Date();

    const timeDifferenceInMilliseconds = now - date;
    const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);

    if (timeDifferenceInSeconds < 60) {
        return "just now";
    } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 604800) {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        // If it's been more than a week, return the full datetime string
        return datetimeString;
    }
}
