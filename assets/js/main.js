// Khởi tạo Swiper cho Toyota
var toyotaSwiper = new Swiper('.toyota-swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true, // Cho phép lặp lại để tạo trải nghiệm mượt mà
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

// Khởi tạo Swiper cho Banner
var bannerSwiper = new Swiper('.banner-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true, // Nếu không đủ 4 slide sẽ tự thêm slide trắng
    pagination: {
        el: '.banner-swiper .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, slidesPerGroup: 1 },
        768: { slidesPerView: 2, slidesPerGroup: 2 },
        992: { slidesPerView: 3, slidesPerGroup: 3 },
        1200: { slidesPerView: 4, slidesPerGroup: 4 },
    }
});