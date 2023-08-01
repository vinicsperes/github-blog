import moment from 'moment'

export const formatRelativeTime = (isoDate: string): string => {
  moment.locale('pt-br')
  const currentDate = moment()
  const date = moment(isoDate, moment.ISO_8601)
  const diffInDays = currentDate.diff(date, 'days')

  if (diffInDays === 0) {
    return 'Hoje'
  } else if (diffInDays === 1) {
    return 'Há 1 dia'
  } else if (diffInDays > 7) {
    return `Há ${Math.floor(diffInDays / 7)} semanas`
  } else if (diffInDays > 1) {
    return `Há ${diffInDays} dias`
  } else {
    return date.fromNow()
  }
}
