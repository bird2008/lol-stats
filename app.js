const individualTransition = document.querySelectorAll('.individual__stats')
const teamTransition = document.querySelectorAll('.team__stats')
const indexTransition = document.querySelectorAll('.navigation_photos')

const indexSection = document.getElementById('index')
const individualSection = document.getElementById('individual')
const teamSection = document.getElementById('team')

individualTransition.forEach((button) => {
    button.addEventListener('click', () => {
        individualSection.style.display = 'block'
        teamSection.style.display = 'none'
        indexSection.style.display = 'none'
    })
})

teamTransition.forEach((button) => {
    button.addEventListener('click', () => {
        individualSection.style.display = 'none'
        teamSection.style.display = 'block'
        indexSection.style.display = 'none'
    })
})

indexTransition.forEach((button) => {
    button.addEventListener('click', () => {
        individualSection.style.display = 'none'
        teamSection.style.display = 'none'
        indexSection.style.display = 'block'
    })
})