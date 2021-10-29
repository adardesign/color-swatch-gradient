const generateColorGradient = colors => {
    const incrementBy = Math.round(100 / colors.length)
    return `-45deg, ${colors
        .map((color, index) => {
            const first = incrementBy * index
            let second = incrementBy * (index + 1)
            if(second === 99) second = 100
            return `${color} ${first}%, ${color} ${second}% `
        })
        .join(',')
        .replace(/,+$/, '')}`
}

export default generateColorGradient
