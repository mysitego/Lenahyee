// ----------- عمليات التحقق من المدخلات التي تدخل الى الحقول --------
    function validateAge(age) {
      return age >= 18 && age <= 80;
    }
  
    function validateBloodType(bloodType) {
      const validBloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
      return validBloodTypes.includes(bloodType.toUpperCase());
    }
  
    function validateName(name) {
      const nameRegex = /^[a-zA-Z أ-ي\s]+$/;
      return nameRegex.test(name);
    }
  
    const ageInput = document.getElementById('age');
    const bloodInput = document.getElementById('typeBlood');
    const nameInput = document.getElementById('name');
   
  
    ageInput.addEventListener('input', () => {
      const ageError = document.getElementById('ageError');
      const age = parseInt(ageInput.value);
      if (validateAge(age)) {
        ageInput.style.borderColor = 'green';
        ageError.classList.add('hidden');
   
      } else {
        ageInput.style.borderColor = 'red';
        ageError.classList.add('text-red-500');
        ageError.classList.remove('hidden');
      }
    });
  
    bloodInput.addEventListener('input', () => {
      const bloodError = document.getElementById('bloodError');
      if (validateBloodType(bloodInput.value)) {
        bloodInput.style.borderColor = 'green';
        bloodError.classList.add('hidden');
      } else {
        bloodInput.style.borderColor = 'red';
        bloodError.classList.remove('hidden');
      }
    });
  
    nameInput.addEventListener('input', () => {
      const nameError = document.getElementById('nameError');
      if (validateName(nameInput.value)) {
        nameInput.style.borderColor = 'green';
        nameError.classList.add('hidden');
      } else {
        nameInput.style.borderColor= 'red';
        nameError.classList.remove('hidden');
      }
    });

    function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhoneNumber(number) {
    const phoneNumberRegex = /^(05|5)\d{8}$/;
    return phoneNumberRegex.test(number);
  }

  const emailInput = document.getElementById('email');
  const numberInput = document.getElementById('number');

  emailInput.addEventListener('input', () => {
    const emailError = document.getElementById('emailError');
    if (validateEmail(emailInput.value)) {
      emailInput.style.borderColor = 'green';
      emailError.classList.add('hidden');
    } else {
      emailInput.style.borderColor = 'red';
      emailError.classList.remove('hidden');
    }
  });

  numberInput.addEventListener('input', () => {
    const numberError = document.getElementById('numberError');
    if (validatePhoneNumber(numberInput.value)) {
      numberInput.style.borderColor = 'green';
      numberError.classList.add('hidden');
    } else {
      numberInput.style.borderColor = 'red';
      numberError.classList.remove('hidden');
    }
  });

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  passwordInput.addEventListener('input', () => {
    const passwordError = document.getElementById('passwordError');
    if (validatePassword(passwordInput.value)) {
      passwordInput.style.borderColor = 'green';
      passwordError.classList.add('hidden');
    } else {
      passwordInput.style.borderColor = 'red';
      passwordError.classList.remove('hidden');
    }
  });

  confirmPasswordInput.addEventListener('input', () => {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (passwordInput.value === confirmPasswordInput.value) {
      confirmPasswordInput.style.borderColor = 'green';
      confirmPasswordError.classList.add('hidden');
    } else {
      confirmPasswordInput.style.borderColor = 'red';
      confirmPasswordError.classList.remove('hidden');
    }
  });

// ----------- كود عمل مصفوفة لتخزين المدن السعودية بالكامل  -----------
    const cities = ['الرياض', 'مكة المكرمة', 'جدة', 'الدمام', 'المدينة المنورة', 'الطائف']; // قم بتعريف المدن هنا
    document.addEventListener('DOMContentLoaded', function() {
      const selectElement = document.getElementById('eara');
      cities.forEach(function(city) {
        const optionElement = document.createElement('option');
        optionElement.value = city;
        optionElement.textContent = city;
        selectElement.appendChild(optionElement);
      });
    });
// ----------------- كود عملية التبديل بين الموسسة والفرد ------------------

const individualButton = document.getElementById('individualButton');
const organizationButton = document.getElementById('organizationButton');
const individualForm = document.getElementById('individualForm');
const organizationForm = document.getElementById('organizationForm');

// عند الضغط على زر الفرد
individualButton.addEventListener('click', () => {
  individualForm.classList.remove('hidden');
  organizationForm.classList.add('hidden');
});

// عند الضغط على زر المؤسسة
organizationButton.addEventListener('click', () => {
  individualForm.classList.add('hidden');
  organizationForm.classList.remove('hidden');
});


// When individual button is clicked
individualButton.addEventListener('click', () => {
  organizationForm.classList.add('animate__animated', 'animate__fadeOut');
  organizationForm.addEventListener('animationend', () => {
    organizationForm.classList.add('hidden');
    organizationForm.classList.remove('animate__fadeOut');
    individualForm.classList.remove('hidden');
    individualForm.classList.add('animate__animated', 'animate__fadeIn');
  });
});

// When organization button is clicked
organizationButton.addEventListener('click', () => {
  individualForm.classList.add('animate__animated', 'animate__fadeOut');
  individualForm.addEventListener('animationend', () => {
    individualForm.classList.add('hidden');
    individualForm.classList.remove('animate__fadeOut');
    organizationForm.classList.remove('hidden');
    organizationForm.classList.add('animate__animated', 'animate__fadeIn');
  });
});

