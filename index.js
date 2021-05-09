let header = document.querySelector('.header')
let headervid = document.querySelector('video')

window.addEventListener('load',function(){
    header.addEventListener('mouseover', function () {
        header.setAttribute('style', 'display:none;')
        headervid.setAttribute('style', 'position: absolute;top: 0px; width: 100%; height:100%;left: 0;')
        headervid.setAttribute('autoplay','')
        headervid.setAttribute('loop','')
        headervid.click()
    })
    
    headervid.addEventListener('mouseout', function () {
        header.setAttribute('style', `position: absolute;top: 0px; width: 100%;height:100%;left: 0;`)
        headervid.setAttribute('style', 'display:none;')
    })
})

