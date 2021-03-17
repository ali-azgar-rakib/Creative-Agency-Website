const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

const multiEvent = [toggle, navigation];

multiEvent.forEach(item => {
    item.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navigation.classList.toggle('active')
    })
})
