const addsuffix = num => {
    return String(num).padStart(2, "0")
}

const formatDate = date => {
    date = new Date(date)
    const hours = addsuffix(date.getHours())
    const minutes = addsuffix(date.getMinutes())
    const day = addsuffix(date.getDate())
    const month = addsuffix(date.getMonth() + 1)
    const year = addsuffix(date.getFullYear())
    return ({ hours, minutes, day, month, year })

}

export { formatDate }