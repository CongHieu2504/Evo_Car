const productsData = [
    // Sản phẩm nổi bật
    {
        section: "featured",
        name: "Vios 1.5E SMT",
        price: "531.000.000đ",
        image: "assets/img/corolla.webp",
        year: 2019,
        seats: 5,
        transmission: "Số sàn"
    },
    {
        section: "featured",
        name: "Mitsubishi Triton",
        price: "555.000.000đ",
        image: "assets/img/mitsubishi-triton-4x2-at-mivec-10l-2019.webp",
        year: 2019,
        seats: 7,
        transmission: "Tự động"
    },
    {
        section: "featured",
        name: "Mitsubishi Xpander",
        price: "550.000.000đ",
        image: "assets/img/nguoi-dua-tin-toyota-rush-2018-ra-mat-thai-lan-1-jpeg.webp",
        year: 2019,
        seats: 6,
        transmission: "Tự động"
    },
    {
        section: "featured",
        name: "Rush S 1.5AT",
        price: "668.000.000đ",
        image: "assets/img/toyota-avanza.webp",
        year: 2018,
        seats: 7,
        transmission: "Số sàn"
    },
    {
        section: "featured",
        name: "Corolla Altis",
        price: "600.000.000đ",
        image: "assets/img/toyota-wifo.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động"
    },
    {
        section: "featured",
        name: "Toyota Avanza",
        price: "450.000.000đ",
        image: "assets/img/xe-toyota-vios-2018-khuyen-mai-1.webp",
        year: 2018,
        seats: 7,
        transmission: "Số sàn"
    },
    {
        section: "featured",
        name: "Toyota Wigo",
        price: "350.000.000đ",
        image: "assets/img/toyota-avanza.webp",
        year: 2020,
        seats: 5,
        transmission: "Số sàn"
    },
    {
        section: "featured",
        name: "Toyota Yaris",
        price: "500.000.000đ",
        image: "assets/img/toyota-wifo.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động"
    },
    // Banner ở giữa
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sedan đẳng cấp từ Toyota",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2019: Thiết kế hiện đại, tiết kiệm nhiên liệu",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2021: Tích hợp công nghệ tiên tiến",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sự lựa chọn hoàn hảo cho gia đình",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sự lựa chọn hoàn hảo cho gia đình",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sự lựa chọn hoàn hảo cho gia đình",
        image: "assets/img/corolla.webp"
    },
    // Toyota
    {
        section: "toyota",
        name: "Vios 1.5E SMT",
        price: "531.000.000đ",
        image: "assets/img/corolla.webp",
        year: 2019,
        seats: 5,
        transmission: "Số sàn"
    },
    {
        section: "toyota",
        name: "Corolla Altis",
        price: "600.000.000đ",
        image: "assets/img/mitsubishi-triton-4x2-at-mivec-10l-2019.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động"
    },
    {
        section: "toyota",
        name: "Toyota Avanza",
        price: "450.000.000đ",
        image: "assets/img/nguoi-dua-tin-toyota-rush-2018-ra-mat-thai-lan-1-jpeg.webp",
        year: 2018,
        seats: 7,
        transmission: "Số sàn"
    },
    {
        section: "toyota",
        name: "Toyota Wigo",
        price: "350.000.000đ",
        image: "assets/img/toyota-avanza.webp",
        year: 2020,
        seats: 5,
        transmission: "Số sàn"
    },
    {
        section: "toyota",
        name: "Toyota Yaris",
        price: "500.000.000đ",
        image: "assets/img/toyota-wifo.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động"
    },
    {
        section: "toyota",
        name: "Toyota Yaris",
        price: "500.000.000đ",
        image: "assets/img/xe-toyota-vios-2018-khuyen-mai-1.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động"
    },
    // Banner Title
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Mẫu xe sedan đẳng cấp, tiết kiệm nhiên liệu.",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Thiết kế hiện đại, tích hợp công nghệ tiên tiến.",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Sự lựa chọn hoàn hảo cho gia đình.",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Sự lựa chọn hoàn hảo cho gia đình.",
        image: "assets/img/corolla.webp"
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Sự lựa chọn hoàn hảo cho gia đình.",
        image: "assets/img/corolla.webp"
    }
];

// Hàm render sản phẩm cho Sản phẩm nổi bật
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products-container');
    const featuredProducts = productsData.filter(product => product.section === 'featured');
    featuredProducts.forEach(product => {
        const productHtml = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h5 class="text-black mt-2">${product.name}</h5>
                    <p class="text-muted">${product.price}</p>
                    <div class="product-icons">
                        <i class="bi bi-calendar"></i> ${product.year}
                        <i class="bi bi-people"></i> ${product.seats} chỗ
                        <i class="bi bi-gear"></i> ${product.transmission}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHtml);
    });
}

// Hàm render banner ở giữa
function renderBanner() {
    const container = document.getElementById('banner-container');
    const bannerItems = productsData.filter(product => product.section === 'banner');
    bannerItems.forEach(item => {
        const bannerHtml = `
            <div class="swiper-slide">
                <div class="banner-card">
                    <img src="${item.image}" alt="${item.name}" class="banner-image">
                    <p class="text-white mt-2">${item.description}</p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', bannerHtml);
    });
}

// Hàm render sản phẩm Toyota
function renderToyotaProducts() {
    const container = document.getElementById('toyota-container');
    const toyotaProducts = productsData.filter(product => product.section === 'toyota');
    toyotaProducts.forEach(product => {
        const productHtml = `
            <div class="swiper-slide">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <h5 class="text-black mt-2">${product.name}</h5>
                    <p class="text-muted">${product.price}</p>
                    <div class="toyota-product-icons">
                        <i class="bi bi-calendar"></i> ${product.year}
                        <i class="bi bi-people"></i> ${product.seats} chỗ
                        <i class="bi bi-gear"></i> ${product.transmission}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHtml);
    });
}

// Hàm render Banner Title
function renderBannerTitle() {
    const container = document.getElementById('banner-title-container');
    const bannerTitleItems = productsData.filter(product => product.section === 'banner-title');
    bannerTitleItems.forEach(item => {
        const bannerTitleHtml = `
            <div class="swiper-slide">
                <div class="banner-title-card">
                    <img src="${item.image}" alt="${item.name}" class="banner-title-image">
                    <h5 class="text-black mt-2">${item.name}</h5>
                    <p class="text-black mt-2">${item.description}</p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', bannerTitleHtml);
    });
}

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
    // Render dữ liệu cho các section
    renderFeaturedProducts();
    renderBanner();
    renderToyotaProducts();
    renderBannerTitle();

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