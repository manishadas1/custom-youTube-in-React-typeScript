const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
})

const formatDuration = (duration: number) => {
    const hour = Math.floor(duration / 60 / 60)
    const minutes = Math.floor((duration - hour * 60 * 60) / 60)
    const Seconds = duration % 60

    if (hour > 0) {
  return `${hour}:${LEADING_ZERO_FORMATTER.format(
    minutes
  )}:${LEADING_ZERO_FORMATTER.format(Seconds)}`
}

return `${minutes}:${LEADING_ZERO_FORMATTER.format(Seconds)}`

}
export default formatDuration;



