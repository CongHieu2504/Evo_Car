// Sample product data (replace with data.js if available)
const products = [
    {
        id: 1,
        name: 'Demo Cart Vios 1.5E 5MT',
        price: 531000000,
        year: 2019,
        seats: 5,
        transmission: 'Số sàn',
        brand: 'Toyota',
        type: 'Sedan',
        img: 'assets/img/xe-toyota-vios-2018-khuyen-mai-1.webp'
    },
    {
        id: 2,
        name: 'Vios 1.5E 5MT',
        price: 531000000,
        year: 2019,
        seats: 5,
        transmission: 'Số sàn',
        brand: 'Toyota',
        type: 'Sedan',
        img: 'assets/img/toyota-avanza.webp'
    },
    {
        id: 3,
        name: 'Mitsubishi Triton',
        price: 555500000,
        year: 2019,
        seats: 7,
        transmission: 'Tự động',
        brand: 'Mitsubishi',
        type: 'Pick Up',
        img: 'assets/img/mitsubishi-triton-4x2-at-mivec-10l-2019.webp'
    },
    {
        id: 4,
        name: 'Xpander',
        price: 555000000,
        year: 2019,
        seats: 7,
        transmission: 'Tự động',
        brand: 'Mitsubishi',
        type: 'MPV',
        img: 'assets/img/corolla.webp'
    },
    {
        id: 5,
        name: 'CX-5',
        price: 650000000,
        year: 2019,
        seats: 5,
        transmission: 'Tự động',
        brand: 'Mazda',
        type: 'SUV',
        img: 'assets/img/nguoi-dua-tin-toyota-rush-2018-ra-mat-thai-lan-1-jpeg.webp'
    }
];

const PRODUCTS_PER_PAGE = 6;
let currentPage = 1;
let filteredProducts = [...products];

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + '₫';
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const pageProducts = filteredProducts.slice(start, end);
    if (pageProducts.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center">Không có sản phẩm nào.</div>';
        return;
    }
    pageProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <div class="product-card-body">
          <div class="product-card-title">${product.name}</div>
          <div class="product-card-price">${formatPrice(product.price)}</div>
          <div class="product-card-meta">
            <span><i class="bi bi-calendar"></i> ${product.year}</span>
            <span><i class="bi bi-people"></i> ${product.seats} chỗ</span>
            <span><i class="bi bi-gear"></i> ${product.transmission}</span>
          </div>
        </div>
      </div>
    `;
        grid.appendChild(col);
    });
}

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    if (totalPages <= 1) return;
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === currentPage ? ' active' : '');
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage !== i) {
                currentPage = i;
                renderProducts();
                renderPagination();
            }
        });
        pagination.appendChild(li);
    }
}

function handleSort() {
    const sortAZ = document.getElementById('sort-az');
    const sortZA = document.getElementById('sort-za');
    const sortNew = document.getElementById('sort-new');
    const sortPriceAsc = document.getElementById('sort-price-asc');
    const sortPriceDesc = document.getElementById('sort-price-desc');
    if (sortAZ.checked) {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortZA.checked) {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortNew.checked) {
        filteredProducts.sort((a, b) => b.year - a.year);
    } else if (sortPriceAsc.checked) {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortPriceDesc.checked) {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    currentPage = 1;
    renderProducts();
    renderPagination();
}

document.querySelectorAll('input[name="sort"]').forEach(input => {
    input.addEventListener('change', handleSort);
});

// Filter by brand/type
function handleFilter() {
    const brandEls = [
        document.getElementById('brand-mitsubishi'),
        document.getElementById('brand-mazda'),
        document.getElementById('brand-toyota')
    ];
    const typeEls = [
        document.getElementById('type-suv'),
        document.getElementById('type-sedan'),
        document.getElementById('type-mpv'),
        document.getElementById('type-hatchback')
    ];
    const selectedBrands = brandEls.filter(el => el.checked).map(el => el.nextElementSibling.textContent.trim());
    const selectedTypes = typeEls.filter(el => el.checked).map(el => el.nextElementSibling.textContent.trim());
    filteredProducts = products.filter(p => {
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.type);
        return brandMatch && typeMatch;
    });
    currentPage = 1;
    handleSort();
}

document.querySelectorAll('.sidebar-box .form-check-input').forEach(input => {
    input.addEventListener('change', handleFilter);
});

// Initial render
handleSort();

// Sidebar submenu toggle (đa cấp, chỉ mở 1 mục cùng cấp)
document.querySelectorAll('.sidebar-menu .has-submenu > a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        // Đóng các submenu cùng cấp
        parentLi.parentElement.querySelectorAll('.has-submenu').forEach(li => {
            if (li !== parentLi) {
                li.classList.remove('active');
                const submenu = li.querySelector('.submenu');
                if (submenu) submenu.style.display = 'none';
                const icon = li.querySelector('.toggle-icon');
                if (icon) icon.textContent = '+';
            }
        });
        // Toggle submenu hiện tại
        parentLi.classList.toggle('active');
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.style.display = parentLi.classList.contains('active') ? 'block' : 'none';
        }
        const icon = this.querySelector('.toggle-icon');
        if (icon) icon.textContent = parentLi.classList.contains('active') ? '-' : '+';
    });
});

// Đảm bảo các submenu con ẩn mặc định
window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sidebar-menu .has-submenu .submenu').forEach(sub => {
        if (!sub.parentElement.classList.contains('active')) {
            sub.style.display = 'none';
        }
    });
}); 