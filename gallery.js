// gallery.js - وظائف صفحة المعرض

// قائمة الصور الكاملة مع تصنيفات
const galleryImages = [
  { src:"images/p1.jpg.jpg", category: "renovation", title: "أحدث التصاميم ", desc: "معمارية وفنية " },
  { src: "p2.jpg.jpg", category: "structure", title: "هيكلة إنشائية", desc: "تدعيم المنشآت القديمة" },
  { src: "p3.jpg.jpg", category: "maintenance", title: "أعمال حفر ", desc: "  البنية التحتية " },
  { src: images/"p5.jpg.jpg", category: "renovation", title: "ترميم داخلي", desc: "تشطيبات دقيقة" },
  { src: "p6.jpg.jpg", category: "structure", title: "أعمال خرسانة", desc: "جودة عالية في التنفيذ" },
  { src: "p7.jpg.jpg", category: "maintenance", title: "أعمال بناء", desc: "أنظمة حديثه" },
  { src: "p8.jpg.jpg", category: "renovation", title: "واجهات حديثه", desc: "تصاميم عصرية" },
  { src: "p9.jpg.jpg", category: "structure", title: "اصلاح الشروخ والفواصل", desc: "هندسة دقيقة" },
  { src: "p10.jpg.jpg", category: "maintenance", title: "اعمال الاسقف المسلحه", desc: "خدمات متكاملة" },
  { src: "p11.jpg.jpg", category: "renovation", title: " تجديد حمامات ومطابخ", desc: "لمسة جمالية" },
  { src: "p12.jpg.jpg", category: "structure", title: "تشطيبات خارجيه", desc:"حلول إنشائيه تدوم لإجيال" },
  { src: "p13.jpg.jpg", category: "maintenance", title: "اعمال شبكات الري", desc: "خطط صيانة سنوية" },
  { src: "p14.jpg.jpg", category: "renovation", title: "ترميم شامل", desc: "إعادة تأهيل كاملة" },
  { src: "p15.jpg.jpg", category: "structure", title: "توسعات", desc: "إضافات إنشائية" },
  { src: "p16.jpg.jpg", category: "maintenance", title: "اتقان الإعمال الخشبية", desc: "تفاصيل تعكس الخبرة والجودة" },
  { src: "p17.jpg.jpg", category: "renovation", title: "دهانات حديثة", desc: "ألوان راقية" },
  { src: "p18.jpg.jpg", category: "structure", title: "جسور خرسانية", desc: "مشاريع ضخمة" },
  { src: "p19.jpg.jpg", category: "maintenance", title: "إنشاءات وصب خرسانة ", desc: "تنفيذ الأرضيات بأعلى كفاءة" },
  { src: "p20.jpg.jpg", category: "renovation", title: "اصلاح وترميم الجدران", desc: "معالجة التصدعات بإفضل المواد" },
  { src: "p21.jpg.jpg", category: "structure", title: "هياكل معدنية", desc: "متانة وقوة" },
  { src: "p22.jpg.jpg", category: "maintenance", title: "صيانة عامة", desc: "خدمات 24/7" },
  { src: "p23.jpg.jpg", category: "renovation", title: "إعادة هيكلة المساحات", desc: "حلول مبتكرة لتوسعة وتطوير المباني" },
  { src: "p24.jpg.jpg", category: "structure", title: "إتقان التشطيبات النهائية", desc: "لمسات فنية تضفي جمالاً على مساحتك " },
  { src: "p25.jpg.jpg", category: "maintenance", title: "تأسيس احترافي لدهانات تدوم", desc: "نهتم بأدق تفاصيل معالجة الجدران " },
  { src: "p26.jpg.jpg", category: "renovation", title: "معدات وتقنيات تشطيب حديثة ", desc: "استخدام أفضل المعدات والمواد لضمان جودة وسرعة التنفيذ " },
  { src: "p27.jpg.jpg", category: "structure", title: "جمال متقن في تركيبات السيراميك والرخام ", desc: "دقة التنفيذ لضمان متانة وجمال الإرضيات،مع الإلتزام بمعايير الإستواء المثالي هندسياً" },
  { src: "p28.jpg.jpg", category: "maintenance", title: "جمال الأسقف يبدأ من التأسيس الصحيح ", desc: "نحن ندرك أن جودة الجبس بورد هي الأساس لسقف انيق ومريح" },
  { src: "p29.jpg.jpg", category: "renovation", title: "احترافية التأسيس والتنعيم ", desc: "استخدام أحدث التقنيات لضمان استواء مثالي للأسقف ومظهر نهائي فاخر" },
  { src: "p30.jpg.jpg", category: "structure", title: "ديكورات ", desc: "لمسات فنيه " }
];

let currentFilter = "all";
let visibleCount = 12; // عدد الصور الظاهرة في البداية
const galleryGrid = document.getElementById('galleryGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// دالة عرض الصور حسب الفلتر والعدد
function renderGallery() {
  let filtered = galleryImages;
  if (currentFilter !== "all") {
    filtered = galleryImages.filter(img => img.category === currentFilter);
  }
  
  const visibleImages = filtered.slice(0, visibleCount);
  
 galleryGrid.innerHTML = visibleImages.map((img) => `
    <div class="gallery-item">
        <img src="${img.src}" alt="${img.title}">
        <div class="item-info" style="text-align: center; padding: 10px; background: #fff;">
            <h3 style="color: #003366; margin: 0; font-size: 1.1rem;">${img.title}</h3>
     </div>
    </div>
  `).join('');
  
  // إخفاء زر التحميل إذا لم يتبق صور
  if (loadMoreBtn) {
    if (visibleCount >= filtered.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
    }
  }
  
  // إضافة حدث النقر لعرض الصورة بتكبير (مودال)
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      showModal(imgSrc);
    });
  });
}

// دالة عرض المودال
function showModal(imgSrc) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <span class="modal-close">&times;</span>
    <img class="modal-content" src="${imgSrc}">
  `;
  document.body.appendChild(modal);
  modal.style.display = 'flex';
  
  modal.querySelector('.modal-close').onclick = () => {
    modal.remove();
  };
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}

// فلترة الصور
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    visibleCount = 12;
    renderGallery();
  });
});

// تحميل المزيد
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    visibleCount += 12;
    renderGallery();
  });
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

// بدء التحميل
renderGallery();
