const productsData = [
    // Sản phẩm nổi bật
    {
        section: "featured",
        name: "Vios 1.5E SMT",
        price: "531.000.000đ",
        image: "assets/img/corolla.webp",
        year: 2019,
        seats: 5,
        transmission: "Số sàn",
        details: "Mẫu xe sedan phổ biến, tiết kiệm nhiên liệu, phù hợp cho gia đình."
    },
    {
        section: "featured",
        name: "Mitsubishi Triton",
        price: "555.000.000đ",
        image: "assets/img/mitsubishi-triton-4x2-at-mivec-10l-2019.webp",
        year: 2019,
        seats: 7,
        transmission: "Tự động",
        details: "Xe bán tải mạnh mẽ, phù hợp cho địa hình gồ ghề."
    },
    {
        section: "featured",
        name: "Mitsubishi Xpander",
        price: "550.000.000đ",
        image: "assets/img/nguoi-dua-tin-toyota-rush-2018-ra-mat-thai-lan-1-jpeg.webp",
        year: 2019,
        seats: 6,
        transmission: "Tự động",
        details: "MPV đa dụng với thiết kế hiện đại và không gian rộng rãi."
    },
    {
        section: "featured",
        name: "Rush S 1.5AT",
        price: "668.000.000đ",
        image: "assets/img/toyota-avanza.webp",
        year: 2018,
        seats: 7,
        transmission: "Số sàn",
        details: "SUV nhỏ gọn, phù hợp cho cả thành phố và ngoại ô."
    },
    {
        section: "featured",
        name: "Corolla Altis",
        price: "600.000.000đ",
        image: "assets/img/toyota-wifo.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động",
        details: "Sedan cao cấp với công nghệ tiên tiến."
    },
    {
        section: "featured",
        name: "Toyota Avanza",
        price: "450.000.000đ",
        image: "assets/img/xe-toyota-vios-2018-khuyen-mai-1.webp",
        year: 2018,
        seats: 7,
        transmission: "Số sàn",
        details: "MPV gia đình với không gian rộng rãi."
    },
    {
        section: "featured",
        name: "Toyota Wigo",
        price: "350.000.000đ",
        image: "assets/img/toyota-avanza.webp",
        year: 2020,
        seats: 5,
        transmission: "Số sàn",
        details: "Hatchback tiết kiệm, phù hợp cho đô thị."
    },
    {
        section: "featured",
        name: "Toyota Yaris",
        price: "500.000.000đ",
        image: "assets/img/toyota-wifo.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động",
        details: "Hatchback thể thao, thiết kế trẻ trung."
    },
    // Banner ở giữa
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sedan đẳng cấp từ Toyota",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_1.webp",
            "assets/img/corolla_altis_2.webp",
            "assets/img/corolla_altis_3.webp",
            "assets/img/corolla_altis_4.webp"
        ],
        additionalDescriptions: [
            "Ngoại thất hiện đại với lưới tản nhiệt mới.",
            "Nội thất sang trọng, không gian rộng rãi.",
            "Hệ thống an toàn tiên tiến.",
            "Tiết kiệm nhiên liệu vượt trội."
        ]
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2019: Thiết kế hiện đại, tiết kiệm nhiên liệu",
        image: "assets/img/toyota-wifo.webp",
        additionalImages: [
            "assets/img/corolla_altis_2019_1.webp",
            "assets/img/corolla_altis_2019_2.webp",
            "assets/img/corolla_altis_2019_3.webp",
            "assets/img/corolla_altis_2019_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế ngoại thất sắc nét.",
            "Hệ thống giải trí tiên tiến.",
            "Động cơ mạnh mẽ, bền bỉ.",
            "Tiện nghi cao cấp cho gia đình."
        ]
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2021: Tích hợp công nghệ tiên tiến",
        image: "assets/img/toyota-avanza.webp",
        additionalImages: [
            "assets/img/corolla_altis_2019_1.webp",
            "assets/img/corolla_altis_2019_2.webp",
            "assets/img/corolla_altis_2019_3.webp",
            "assets/img/corolla_altis_2019_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế ngoại thất sắc nét.",
            "Hệ thống giải trí tiên tiến.",
            "Động cơ mạnh mẽ, bền bỉ.",
            "Tiện nghi cao cấp cho gia đình."
        ]
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sự lựa chọn hoàn hảo cho gia đình",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_2019_1.webp",
            "assets/img/corolla_altis_2019_2.webp",
            "assets/img/corolla_altis_2019_3.webp",
            "assets/img/corolla_altis_2019_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế ngoại thất sắc nét.",
            "Hệ thống giải trí tiên tiến.",
            "Động cơ mạnh mẽ, bền bỉ.",
            "Tiện nghi cao cấp cho gia đình."
        ]
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sự lựa chọn hoàn hảo cho gia đình",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_2019_1.webp",
            "assets/img/corolla_altis_2019_2.webp",
            "assets/img/corolla_altis_2019_3.webp",
            "assets/img/corolla_altis_2019_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế ngoại thất sắc nét.",
            "Hệ thống giải trí tiên tiến.",
            "Động cơ mạnh mẽ, bền bỉ.",
            "Tiện nghi cao cấp cho gia đình."
        ]
    },
    {
        section: "banner",
        name: "Corolla Altis",
        description: "Corolla Altis 2020: Sự lựa chọn hoàn hảo cho gia đình",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_2019_1.webp",
            "assets/img/corolla_altis_2019_2.webp",
            "assets/img/corolla_altis_2019_3.webp",
            "assets/img/corolla_altis_2019_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế ngoại thất sắc nét.",
            "Hệ thống giải trí tiên tiến.",
            "Động cơ mạnh mẽ, bền bỉ.",
            "Tiện nghi cao cấp cho gia đình."
        ]
    },
    // Toyota
    {
        section: "toyota",
        name: "Vios 1.5E SMT",
        price: "531.000.000đ",
        image: "assets/img/corolla.webp",
        year: 2019,
        seats: 5,
        transmission: "Số sàn",
        details: "Mẫu xe sedan phổ biến, tiết kiệm nhiên liệu, phù hợp cho gia đình."
    },
    {
        section: "toyota",
        name: "Corolla Altis",
        price: "600.000.000đ",
        image: "assets/img/mitsubishi-triton-4x2-at-mivec-10l-2019.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động",
        details: "Sedan cao cấp với công nghệ tiên tiến."
    },
    {
        section: "toyota",
        name: "Toyota Avanza",
        price: "450.000.000đ",
        image: "assets/img/nguoi-dua-tin-toyota-rush-2018-ra-mat-thai-lan-1-jpeg.webp",
        year: 2018,
        seats: 7,
        transmission: "Số sàn",
        details: "MPV gia đình với không gian rộng rãi."
    },
    {
        section: "toyota",
        name: "Toyota Wigo",
        price: "350.000.000đ",
        image: "assets/img/toyota-avanza.webp",
        year: 2020,
        seats: 5,
        transmission: "Số sàn",
        details: "Hatchback tiết kiệm, phù hợp cho đô thị."
    },
    {
        section: "toyota",
        name: "Toyota Yaris",
        price: "500.000.000đ",
        image: "assets/img/toyota-wifo.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động",
        details: "Hatchback thể thao, thiết kế trẻ trung."
    },
    {
        section: "toyota",
        name: "Toyota Yaris",
        price: "500.000.000đ",
        image: "assets/img/xe-toyota-vios-2018-khuyen-mai-1.webp",
        year: 2019,
        seats: 5,
        transmission: "Tự động",
        details: "Hatchback thể thao, thiết kế trẻ trung."
    },
    // Banner Title
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Mẫu xe sedan đẳng cấp, tiết kiệm nhiên liệu.",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_title_1.webp",
            "assets/img/corolla_altis_title_2.webp",
            "assets/img/corolla_altis_title_3.webp",
            "assets/img/corolla_altis_title_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế khí động học tối ưu.",
            "Hệ thống lái mượt mà.",
            "Công nghệ hỗ trợ lái xe thông minh.",
            "Bảo hành dài hạn."
        ]
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Thiết kế hiện đại, tích hợp công nghệ tiên tiến.",
        image: "assets/img/toyota-wifo.webp",
        additionalImages: [
            "assets/img/corolla_altis_title_1.webp",
            "assets/img/corolla_altis_title_2.webp",
            "assets/img/corolla_altis_title_3.webp",
            "assets/img/corolla_altis_title_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế khí động học tối ưu.",
            "Hệ thống lái mượt mà.",
            "Công nghệ hỗ trợ lái xe thông minh.",
            "Bảo hành dài hạn."
        ]
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Sự lựa chọn hoàn hảo cho gia đình.",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_title_1.webp",
            "assets/img/corolla_altis_title_2.webp",
            "assets/img/corolla_altis_title_3.webp",
            "assets/img/corolla_altis_title_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế khí động học tối ưu.",
            "Hệ thống lái mượt mà.",
            "Công nghệ hỗ trợ lái xe thông minh.",
            "Bảo hành dài hạn."
        ]
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Sự lựa chọn hoàn hảo cho gia đình.",
        image: "assets/img/toyota-avanza.webp",
        additionalImages: [
            "assets/img/corolla_altis_title_1.webp",
            "assets/img/corolla_altis_title_2.webp",
            "assets/img/corolla_altis_title_3.webp",
            "assets/img/corolla_altis_title_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế khí động học tối ưu.",
            "Hệ thống lái mượt mà.",
            "Công nghệ hỗ trợ lái xe thông minh.",
            "Bảo hành dài hạn."
        ]
    },
    {
        section: "banner-title",
        name: "COROLLA ALTIS",
        description: "Sự lựa chọn hoàn hảo cho gia đình.",
        image: "assets/img/corolla.webp",
        additionalImages: [
            "assets/img/corolla_altis_title_1.webp",
            "assets/img/corolla_altis_title_2.webp",
            "assets/img/corolla_altis_title_3.webp",
            "assets/img/corolla_altis_title_4.webp"
        ],
        additionalDescriptions: [
            "Thiết kế khí động học tối ưu.",
            "Hệ thống lái mượt mà.",
            "Công nghệ hỗ trợ lái xe thông minh.",
            "Bảo hành dài hạn."
        ]
    }
];

// Hàm render sản phẩm cho Sản phẩm nổi bật với icon và toggle
function renderFeaturedProducts() {
    if (document.getElementById('featured-products-container')) {
        const container = document.getElementById('featured-products-container');
        const featuredProducts = productsData.filter(product => product.section === 'featured');
        container.innerHTML = '';
        featuredProducts.forEach((product, index) => {
            const productHtml = `
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="product-card" data-product-id="${index}">
                        <div class="product-front">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <h5 class="text-black mt-2">${product.name}</h5>
                            <p class="text-muted">${product.price}</p>
                            <div class="product-icons">
                                <i class="bi bi-calendar"></i> ${product.year}
                                <i class="bi bi-people"></i> ${product.seats} chỗ
                                <i class="bi bi-gear"></i> ${product.transmission}
                            </div>
                            <div class="product-icon">
                                <i class="bi bi-blockquote-left"></i>
                            </div>
                        </div>
                        <div class="product-back" style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: none;">
                            <div class="product-details">
                                <h5 style="color: #2c3e50;">${product.name}</h5>
                                <p style="color: #34495e;">${product.details}</p>
                                <p style="color: #e74c3c; font-weight: bold;">Giá: ${product.price}</p>
                                <p style="color: #34495e;">Năm: ${product.year} | Số chỗ: ${product.seats} | Hộp số: ${product.transmission}</p>
                                <div class="product-icon">
                                    <i class="bi bi-blockquote-left"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', productHtml);
        });

        // Thêm sự kiện click cho icon toggle
        container.addEventListener('click', (e) => {
            const icon = e.target.closest('.product-icon i');
            if (icon) {
                const card = icon.closest('.product-card');
                const front = card.querySelector('.product-front');
                const back = card.querySelector('.product-back');
                card.classList.toggle('show-details');
                if (card.classList.contains('show-details')) {
                    front.style.display = 'none';
                    back.style.display = 'block';
                } else {
                    front.style.display = 'block';
                    back.style.display = 'none';
                }
                e.stopPropagation();
            }
        });

        // Thêm sự kiện click để chuyển hướng với ID
        container.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card && !e.target.closest('.product-icon')) {
                const productId = card.getAttribute('data-product-id');
                const product = productsData[parseInt(productId)];
                console.log('Product saved to localStorage:', product);
                if (product) {
                    localStorage.setItem('selectedProduct', JSON.stringify(product));
                    window.location.href = `product-detail.html?id=${productId}`;
                } else {
                    console.error('Product not found for id:', productId);
                }
            }
        });

        // Thêm sự kiện hover
        document.querySelectorAll('.featured-products .product-card').forEach(card => {
            const icon = card.querySelector('.product-icon i');
            card.addEventListener('mouseover', () => {
                if (!card.classList.contains('show-details')) {
                    icon.style.opacity = '1';
                }
            });
            card.addEventListener('mouseout', () => {
                if (!card.classList.contains('show-details')) {
                    icon.style.opacity = '0';
                }
            });
        });
    }
}

// Hàm render banner ở giữa với điều hướng
function renderBanner() {
    if (document.getElementById('banner-container')) {
        const container = document.getElementById('banner-container');
        const bannerItems = productsData.filter(product => product.section === 'banner');
        container.innerHTML = '';
        bannerItems.forEach((item, index) => {
            const bannerHtml = `
                <div class="swiper-slide">
                    <div class="banner-card" data-product-id="${index}">
                        <img src="${item.image}" alt="${item.name}" class="banner-image">
                        <p class="text-white mt-2">${item.description}</p>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', bannerHtml);
        });

        // Thêm sự kiện click để chuyển hướng với ID
        container.addEventListener('click', (e) => {
            const card = e.target.closest('.banner-card');
            if (card) {
                const productId = card.getAttribute('data-product-id');
                const product = productsData[parseInt(productId)];
                console.log('Banner product saved to localStorage:', product);
                if (product) {
                    localStorage.setItem('selectedProduct', JSON.stringify(product));
                    window.location.href = `product-title.html?id=${productId}`;
                } else {
                    console.error('Banner product not found for id:', productId);
                }
            }
        });
    }
}

function renderToyotaProducts() {
    if (document.getElementById('toyota-container')) {
        const container = document.getElementById('toyota-container');
        const toyotaProducts = productsData.filter(product => product.section === 'toyota');
        container.innerHTML = '';
        toyotaProducts.forEach((product, index) => {
            const productHtml = `
                <div class="swiper-slide">
                    <div class="product-card" data-product-id="${index}">
                        <div class="product-front">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                            <h5 class="text-black mt-2">${product.name}</h5>
                            <p class="text-muted">${product.price}</p>
                            <div class="toyota-product-icons">
                                <i class="bi bi-calendar"></i> ${product.year}
                                <i class="bi bi-people"></i> ${product.seats} chỗ
                                <i class="bi bi-gear"></i> ${product.transmission}
                            </div>
                            <div class="product-icon">
                                <i class="bi bi-blockquote-left"></i>
                            </div>
                        </div>
                        <div class="product-back" style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: none;">
                            <div class="product-details">
                                <h5 style="color: #2c3e50;">${product.name}</h5>
                                <p style="color: #34495e;">${product.details}</p>
                                <p style="color: #e74c3c; font-weight: bold;">Giá: ${product.price}</p>
                                <p style="color: #34495e;">Năm: ${product.year} | Số chỗ: ${product.seats} | Hộp số: ${product.transmission}</p>
                                <div class="product-icon">
                                    <i class="bi bi-blockquote-left"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', productHtml);
        });

        // Thêm sự kiện click cho icon toggle
        container.addEventListener('click', (e) => {
            const icon = e.target.closest('.product-icon i');
            if (icon) {
                const card = icon.closest('.product-card');
                const front = card.querySelector('.product-front');
                const back = card.querySelector('.product-back');
                card.classList.toggle('show-details');
                if (card.classList.contains('show-details')) {
                    front.style.display = 'none';
                    back.style.display = 'block';
                } else {
                    front.style.display = 'block';
                    back.style.display = 'none';
                }
                e.stopPropagation();
            }
        });

        // Thêm sự kiện click để chuyển hướng với ID
        container.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card && !e.target.closest('.product-icon')) {
                const productId = card.getAttribute('data-product-id');
                const product = productsData[parseInt(productId)];
                console.log('Product saved to localStorage:', product);
                if (product) {
                    localStorage.setItem('selectedProduct', JSON.stringify(product));
                    window.location.href = `product-detail.html?id=${productId}`;
                } else {
                    console.error('Product not found for id:', productId);
                }
            }
        });

        // Thêm sự kiện hover
        document.querySelectorAll('.toyota-swiper .product-card').forEach(card => {
            const icon = card.querySelector('.product-icon i');
            card.addEventListener('mouseover', () => {
                if (!card.classList.contains('show-details')) {
                    icon.style.opacity = '1';
                }
            });
            card.addEventListener('mouseout', () => {
                if (!card.classList.contains('show-details')) {
                    icon.style.opacity = '0';
                }
            });
        });
    }
}

// Hàm render banner title với điều hướng
function renderBannerTitle() {
    if (document.getElementById('banner-title-container')) {
        const container = document.getElementById('banner-title-container');
        const bannerTitleItems = productsData.filter(product => product.section === 'banner-title');
        container.innerHTML = '';
        bannerTitleItems.forEach((item, index) => {
            const bannerTitleHtml = `
                <div class="swiper-slide">
                    <div class="banner-title-card" data-product-id="${index}">
                        <img src="${item.image}" alt="${item.name}" class="banner-title-image">
                        <h5 class="text-black mt-2">${item.name}</h5>
                        <p class="text-black mt-2">${item.description}</p>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', bannerTitleHtml);
        });

        // Thêm sự kiện click để chuyển hướng với ID
        container.addEventListener('click', (e) => {
            const card = e.target.closest('.banner-title-card');
            if (card) {
                const productId = card.getAttribute('data-product-id');
                const product = productsData[parseInt(productId)];
                console.log('Banner title product saved to localStorage:', product);
                if (product) {
                    localStorage.setItem('selectedProduct', JSON.stringify(product));
                    window.location.href = `product-title.html?id=${productId}`;
                } else {
                    console.error('Banner title product not found for id:', productId);
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    renderFeaturedProducts();
    renderBanner();
    renderToyotaProducts();
    renderBannerTitle();
    // Lưu productsData vào localStorage
    localStorage.setItem('productsData', JSON.stringify(productsData));
});