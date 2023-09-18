// Ambil elemen-elemen yang diperlukan
const navItems = document.querySelectorAll('nav ul li.dropdown');
const dropdowns = document.querySelectorAll('.dropdown-content');

// Tambahkan event listener untuk setiap elemen menu
navItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        // Sembunyikan semua dropdown
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });

        // Tampilkan dropdown yang sesuai
        dropdowns[index].style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        // Sembunyikan dropdown saat kursor meninggalkan elemen menu
        dropdowns[index].style.display = 'none';
    });
});
