// main.js - وظائف الصفحة الرئيسية

// قائمة الصور للمعاينة
const imageList = [
  "p1.jpg.jpg", "p2.jpg.jpg", "p3.jpg.jpg", "p5.jpg.jpg", "p6.jpg.jpg", "p7.jpg.jpg",
  "p8.jpg.jpg", "p9.jpg.jpg", "p10.jpg.jpg", "p11.jpg.jpg", "p12.jpg.jpg", "p13.jpg.jpg",
  "p14.jpg.jpg", "p15.jpg.jpg", "p16.jpg.jpg", "p17.jpg.jpg", "p18.jpg.jpg", "p19.jpg.jpg",
  "p20.jpg.jpg", "p21.jpg.jpg", "p22.jpg.jpg", "p23.jpg.jpg", "p24.jpg.jpg", "p25.jpg.jpg",
  "p26.jpg.jpg", "p27.jpg.jpg", "p28.jpg.jpg", "p29.jpg.jpg", "p30.jpg.jpg"
];

// عرض معاينة الصور (أول 6 صور)
const previewContainer = document.getElementById('previewGrid');
if (previewContainer) {
  const previewImages = imageList.slice(0, 6);
  previewContainer.innerHTML = previewImages.map(imgSrc => `
    <div class="preview-item">
      <img src="images/${imgSrc}" alt="مشروع مميز" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=صورة+قريبا'">
    </div>
  `).join('');
}

// قائمة الجوال
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('nav-active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    const icon = menuToggle?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// تأثير تمرير سلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== "#" && href !== "") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
