const generateColorGradient = colors => {
    const incrementBy = Math.floor(100 / colors.length)
    return `-45deg, ${colors
        .map((color, index) => {
            return `${color} ${incrementBy * index}%, ${color} ${incrementBy * (index + 1)}%`
        })
        .join(',')
        .replace(/,+$/, '')}`
}

export default generateColorGradient
