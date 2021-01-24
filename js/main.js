window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 'auto',
        itemWidth: 200,
        draggable: true,
        rewind: true,
    })
})