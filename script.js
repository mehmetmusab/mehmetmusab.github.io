// Mocky.io'dan verileri almak
window.onload = function() {
    fetch('https://run.mocky.io/v3/b018dcd4-e0b9-46fd-8f07-312401e6733f') // Mocky.io linki
        .then(response => response.json())
        .then(data => {
            populateCities(data.cities);  // Şehir verisini dropdown'a ekle
            populateCourses(data.courses);  // Kurs verisini dropdown'a ekle
        })
        .catch(error => console.error('Veri çekme hatası:', error));  // Hata mesajı
};

// Şehirler dropdown'ını doldurma
function populateCities(cities) {
    let citySelect = document.getElementById('city');
    cities.forEach(city => {
        let option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

// Kurs türleri dropdown'ını doldurma
function populateCourses(courses) {
    let courseSelect = document.getElementById('course');
    courses.forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.textContent = course;
        courseSelect.appendChild(option);
    });
}

// Reklamı kapatma fonksiyonu
function closeAd() {
    document.getElementById('stickyAd').style.display = 'none'; // Reklamı gizler
    window.open('https://www.example.com', '_blank'); // Yeni sekme açar
}
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const course = document.getElementById('course').value;

    if (!name || !email || !phone || !city || !course) {
        alert('All fields are required!');
        return false; // Form gönderilmez
    }

    // Email doğrulama
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    // Telefon numarası doğrulama
    if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid Turkish phone number!');
        return false;
    }

    // Formu gönder ve yeni sayfaya yönlendir
    window.location.href = 'form-submitted.html';  // 'form-submitted.html' yeni sayfanın adresidir
    return true; // Form gönderilir
}
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const course = document.getElementById('course').value;

    // Tüm alanların dolu olup olmadığını kontrol et
    if (!name || !email || !phone || !city || !course) {
        alert('All fields are required!');
        return false; // Form gönderilmez
    }

    // Email doğrulama
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    // Telefon numarası doğrulama (Türk telefon numarası)
    const phoneRegex = /^(?:\+90|0)?5\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid Turkish phone number!');
        return false;
    }

    // Eğer tüm doğrulamalar başarılıysa, kullanıcıyı yönlendir
    window.location.href = "form-submitted.html"; // Başarılı yönlendirme
    return false; // Formun sayfada gönderilmesini engeller
}
// Formu başarıyla gönderdikten sonra yeni sayfayı açan fonksiyon
function openSubmittedPage() {
    const newWindow = window.open(); // Yeni sekme açılır
    newWindow.document.write("<h1>Form is submitted</h1>"); // Yeni sekmede mesajı yazdırır
    newWindow.document.close(); // Yeni sekmeyi tamamlar
}
