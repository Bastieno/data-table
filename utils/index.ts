export function randomInt(start: number, before: number) {
  return start + Math.floor(Math.random() * (before - start))
}

export const getGuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })

export const fetchData = (startIndex = 0) => {
  const names = ['Mittens', 'Mons', 'Luna', 'Bella', 'Oliver']
  const colors = ['black', 'white', 'grey', 'orange', 'silver']
  const genders = ['male', 'female']
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        startIndex >= 500
          ? []
          : Array.from({ length: 50 }).map((_, i) => {
              const index = startIndex + i
              return {
                id: getGuid(),
                name: names[randomInt(0, 5)],
                age: index,
                color: colors[randomInt(0, 5)],
                gender: genders[randomInt(0, 2)],
              }
            })
      )
    }, randomInt(1, 3) * 1000)
  })
  return promise
}

export const fetchRemoteData = async (url) => {
  return fetch(url).then((response) => response.json())
}
