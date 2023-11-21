const formatDate = (date) => {

    const parsedDate = new Date(date);

    const options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        parsedDate.toLocaleDateString('pl-PL', options)
    )
}

export default formatDate;