// Header
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        const mainLink = dropdown.querySelector('a');
        if (e.target === mainLink) {
            return;
        }
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

// Thêm sự kiện click cho các mục menu mobile
// Sản Phẩm
const mobileProduct = document.querySelector('.modal-product-toggle');
if (mobileProduct) {
    mobileProduct.addEventListener('dblclick', function (e) {
        // Nếu người dùng double click vào "Sản Phẩm" thì chuyển trang
        window.location.href = 'products.html';
    });
}
// Tin tức
const mobileNews = document.querySelector('.modal-news-toggle');
if (mobileNews) {
    mobileNews.addEventListener('dblclick', function (e) {
        window.location.href = 'news.html';
    });
}
// Liên hệ
const mobileContact = document.querySelector('.modal-menu a[href="contact.html"]');
if (mobileContact) {
    mobileContact.addEventListener('click', function (e) {
        window.location.href = 'contact.html';
    });
}

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

    // --- Floating Zalo Chat & Notification Bell ---
    if (!document.getElementById('floating-chat-btn')) {
        const chatBtn = document.createElement('div');
        chatBtn.id = 'floating-chat-btn';
        chatBtn.className = 'floating-chat-btn';
        chatBtn.innerHTML = '<i class="bi bi-chat-dots-fill"></i>';
        chatBtn.title = 'Chat Zalo';
        chatBtn.onclick = function () {
            window.open('https://zalo.me/your-zalo-id', '_blank');
        };
        document.body.appendChild(chatBtn);
    }
    if (!document.getElementById('floating-bell-btn')) {
        const bellBtn = document.createElement('div');
        bellBtn.id = 'floating-bell-btn';
        bellBtn.className = 'floating-bell-btn';
        bellBtn.innerHTML = '<i class="bi bi-bell-fill"></i>';
        bellBtn.title = 'Thông báo';
        bellBtn.onclick = function () {
            const popup = document.getElementById('bell-popup');
            popup.classList.toggle('active');
        };
        document.body.appendChild(bellBtn);
    }
    if (!document.getElementById('bell-popup')) {
        const popup = document.createElement('div');
        popup.id = 'bell-popup';
        popup.className = 'bell-popup';
        popup.innerHTML = `
            <button class="bell-popup-close" title="Đóng">&times;</button>
            <h4>Tích hợp sẵn các ứng dụng</h4>
            <ul>
                <li><i class="bi bi-chevron-double-right"></i> Đánh giá sản phẩm</li>
                <li><i class="bi bi-chevron-double-right"></i> Mua X tặng Y</li>
                <li><i class="bi bi-chevron-double-right"></i> Ứng dụng Affiliate</li>
                <li><i class="bi bi-chevron-double-right"></i> Đa ngôn ngữ</li>
                <li><i class="bi bi-chevron-double-right"></i> Chatlive Facebook</li>
            </ul>
            <div class="bell-popup-note">
                Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này trên App store Sapo để sử dụng ngay
            </div>
        `;
        document.body.appendChild(popup);
        popup.querySelector('.bell-popup-close').onclick = function () {
            popup.classList.remove('active');
        };
    }
});