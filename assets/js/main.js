// Header
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
});

// Toggle modal khi nhấn nút ☰ trên mobile
document.querySelector('.mobile-nav-toggle').addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        const modal = document.querySelector('#mobile-nav-modal');
        modal.classList.toggle('active');
    }
});

// Đóng modal khi nhấn nút close
document.querySelector('#modal-close').addEventListener('click', () => {
    const modal = document.querySelector('#mobile-nav-modal');
    modal.classList.remove('active');
});

// Đóng modal khi nhấn vào overlay
document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal-overlay')) {
        const modal = document.querySelector('#mobile-nav-modal');
        modal.classList.remove('active');
    }
});

// Toggle sub-menu for Sản Phẩm
document.querySelector('.modal-product-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = e.currentTarget.closest('.modal-dropdown');
    const subMenu = dropdown.querySelector('.modal-sub-menu');
    const toggleIcon = dropdown.querySelector('.toggle-icon');
    const isActive = dropdown.classList.contains('active');

    if (!isActive) {
        // Show sub-menu
        subMenu.innerHTML = `
            <li><a href="#">Hatch Back</a></li>
            <li><a href="#">Sedan</a></li>
            <li><a href="#">Pick Up</a></li>
            <li><a href="#">MPV</a></li>
            <li><a href="#">SUV</a></li>
            <li><a href="#">Crossover</a></li>
            <li><a href="#">Coupe - Xe Thế Thao</a></li>
            <li><a href="#">Convertible - Xe Mui Trần</a></li>
        `;
        dropdown.classList.add('active');
        toggleIcon.textContent = '-';
    } else {
        // Hide sub-menu
        subMenu.innerHTML = '';
        dropdown.classList.remove('active');
        toggleIcon.textContent = '+';
    }
});

// Toggle sub-menu for Tin tức
document.querySelector('.modal-news-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = e.currentTarget.closest('.modal-dropdown');
    const subMenu = dropdown.querySelector('.modal-news-sub-menu');
    const toggleIcon = dropdown.querySelector('.toggle-icon');
    const isActive = dropdown.classList.contains('active');

    if (!isActive) {
        dropdown.classList.add('active');
        toggleIcon.textContent = '-';
    } else {
        dropdown.classList.remove('active');
        toggleIcon.textContent = '+';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Khởi tạo Swiper cho Toyota
    var toyotaSwiper = new Swiper('.toyota-swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
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
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.banner-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
            }
        }
    });

    // Khởi tạo Swiper cho Banner Title
    var bannerTitleSwiper = new Swiper('.banner-title-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
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
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });
});