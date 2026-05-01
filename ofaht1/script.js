// ===========================
//   VitaCore – script.js
// ===========================

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 400) scrollTop.classList.add('visible');
  else scrollTop.classList.remove('visible');
});

// ===== HAMBURGER =====
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// ===== STAT COUNTER =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count += step;
      if (count >= target) { el.textContent = target; clearInterval(timer); }
      else el.textContent = Math.floor(count);
    }, 25);
  });
}
window.addEventListener('load', () => setTimeout(animateCounters, 500));

// ===== FOOD DATA =====
const foods = [
  { emoji: '🥦', name: 'Broccoli', desc: 'Rich in Vitamin C & fiber', tags: ['Immunity', 'Detox'] },
  { emoji: '🍎', name: 'Apple', desc: 'Antioxidants & heart health', tags: ['Heart', 'Fiber'] },
  { emoji: '🐟', name: 'Salmon', desc: 'Omega-3 & high protein', tags: ['Brain', 'Protein'] },
  { emoji: '🥑', name: 'Avocado', desc: 'Healthy fats & potassium', tags: ['Heart', 'Keto'] },
  { emoji: '🥕', name: 'Carrot', desc: 'Beta-carotene for eyes', tags: ['Eye Health', 'Skin'] },
  { emoji: '🍳', name: 'Eggs', desc: 'Complete protein source', tags: ['Muscle', 'Protein'] },
  { emoji: '🫐', name: 'Blueberries', desc: 'Antioxidants & brain food', tags: ['Brain', 'Anti-aging'] },
  { emoji: '🌰', name: 'Almonds', desc: 'Vitamin E & healthy fats', tags: ['Skin', 'Energy'] },
  { emoji: '🍋', name: 'Lemon', desc: 'Vitamin C & digestion', tags: ['Immunity', 'Digestion'] },
  { emoji: '🥬', name: 'Spinach', desc: 'Iron & calcium powerhouse', tags: ['Bones', 'Iron'] },
  { emoji: '🧄', name: 'Garlic', desc: 'Natural antibiotic & immunity', tags: ['Immunity', 'Heart'] },
  { emoji: '🫘', name: 'Lentils', desc: 'Protein & fiber for energy', tags: ['Protein', 'Fiber'] },
];

function renderFoodGrid() {
  const grid = document.getElementById('foodGrid');
  grid.innerHTML = foods.map(f => `
    <div class="food-card">
      <div class="food-card-img-placeholder">${f.emoji}</div>
      <div class="food-card-body">
        <h4>${f.name}</h4>
        <p>${f.desc}</p>
        <div class="food-card-tags">
          ${f.tags.map(t => `<span class="food-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
renderFoodGrid();

// ===== DIET PLAN DATA =====
const dietPlans = {
  baby: {
    icon: '👶', title: 'Newborn & Baby (0–12 months)',
    desc: 'Essential nutrition for healthy growth, brain development, and strong immunity.',
    meals: [
      { time: '🌅 6:00 AM', items: ['Breast milk / Formula', 'Vitamin D drops'] },
      { time: '🌞 9:00 AM', items: ['Breast milk / Formula', 'Pureed fruit (after 6 months)'] },
      { time: '🍽️ 12:00 PM', items: ['Pureed vegetables', 'Rice cereal (after 6 months)'] },
      { time: '🌆 3:00 PM', items: ['Breast milk / Formula', 'Pureed banana'] },
      { time: '🌙 6:00 PM', items: ['Pureed lentils (after 6 months)', 'Breast milk'] },
    ],
    tips: ['Always introduce one food at a time', 'Avoid honey before 1 year', 'Never add salt or sugar', 'Watch for allergic reactions']
  },
  toddler: {
    icon: '🧒', title: 'Toddler (1–5 years)',
    desc: 'Balanced meals to support rapid physical growth and cognitive development.',
    meals: [
      { time: '🌅 Breakfast', items: ['Oatmeal with banana', 'Whole milk', 'Boiled egg'] },
      { time: '🍎 Mid-Morning', items: ['Apple slices', 'Peanut butter (if no allergy)'] },
      { time: '🍽️ Lunch', items: ['Rice & dal', 'Mashed vegetables', 'Curd'] },
      { time: '🍪 Evening Snack', items: ['Whole grain crackers', 'Cheese cubes'] },
      { time: '🌙 Dinner', items: ['Chapati with vegetable curry', 'Warm milk before bed'] },
    ],
    tips: ['Offer variety in colors and textures', 'Avoid processed snacks', 'Include dairy for calcium', 'Small portions, more frequently']
  },
  teen: {
    icon: '🧑‍🎓', title: 'Teenagers (13–19 years)',
    desc: 'High-energy nutrition for growing bodies, active lifestyles, and hormonal balance.',
    meals: [
      { time: '🌅 Breakfast', items: ['Eggs & whole wheat toast', 'Fresh juice or smoothie', 'Fruit'] },
      { time: '🍎 Mid-Morning', items: ['Mixed nuts & seeds', 'Banana or apple'] },
      { time: '🍽️ Lunch', items: ['Brown rice', 'Chicken / Paneer curry', 'Salad & curd'] },
      { time: '🏃 Post-School Snack', items: ['Protein shake or milkshake', 'Peanut butter sandwich'] },
      { time: '🌙 Dinner', items: ['Chapati & mixed vegetable', 'Lentil soup', 'Warm milk'] },
    ],
    tips: ['Avoid junk food & sugary drinks', 'Stay hydrated (2.5L water/day)', 'Include iron-rich foods for girls', 'Eat breakfast — never skip it']
  },
  adult: {
    icon: '👨‍💼', title: 'Adults (20–55 years)',
    desc: 'Balanced macros and micronutrients for sustained energy, metabolism, and disease prevention.',
    meals: [
      { time: '🌅 Breakfast', items: ['Oats with berries', 'Boiled eggs (2)', 'Black coffee / Green tea'] },
      { time: '🍎 Mid-Morning', items: ['Handful of almonds', 'Greek yogurt'] },
      { time: '🍽️ Lunch', items: ['Quinoa / Brown rice', 'Grilled chicken or tofu', 'Salad with olive oil dressing'] },
      { time: '🌆 Evening', items: ['Fruit (apple/banana)', 'Protein bar or nuts'] },
      { time: '🌙 Dinner', items: ['Grilled fish / Lentil curry', 'Steamed vegetables', 'Whole grain chapati'] },
    ],
    tips: ['Eat every 3-4 hours', 'Limit processed and fried foods', 'Track calorie intake', 'Include 30 min exercise daily']
  },
  pregnant: {
    icon: '🤰', title: 'Pregnant Women',
    desc: 'Nutrient-dense meals to support mother and baby — rich in folate, iron, calcium, and DHA.',
    meals: [
      { time: '🌅 Breakfast', items: ['Folate-rich spinach smoothie', 'Whole grain toast', 'Boiled egg'] },
      { time: '🍎 Mid-Morning', items: ['Orange or kiwi (Vitamin C)', 'Nuts & seeds mix'] },
      { time: '🍽️ Lunch', items: ['Brown rice with dal', 'Paneer / Chicken (well-cooked)', 'Curd & salad'] },
      { time: '🌆 Evening', items: ['Milk with turmeric', 'Whole grain crackers with cheese'] },
      { time: '🌙 Dinner', items: ['Lentil soup', 'Steamed vegetables', 'Chapati with ghee'] },
    ],
    tips: ['Take prenatal vitamins daily', 'Avoid raw fish and unpasteurized dairy', 'Stay well-hydrated (3L/day)', 'Eat small, frequent meals to reduce nausea']
  },
  elder: {
    icon: '👴', title: 'Elderly & Grandparents (60+ years)',
    desc: 'Easily digestible, nutrient-rich foods to maintain strength, bone health, and cognitive function.',
    meals: [
      { time: '🌅 Breakfast', items: ['Warm porridge / Idli', 'Warm milk', 'Soaked almonds (5-6)'] },
      { time: '🍎 Mid-Morning', items: ['Seasonal fruit', 'Coconut water'] },
      { time: '🍽️ Lunch', items: ['Soft rice & dal', 'Steamed vegetables', 'Curd'] },
      { time: '🌆 Evening', items: ['Herbal tea / Green tea', 'Whole grain biscuits or fruits'] },
      { time: '🌙 Dinner', items: ['Light khichdi or soup', 'Soft chapati with ghee', 'Warm milk before bed'] },
    ],
    tips: ['Increase calcium & Vitamin D intake', 'Avoid hard, difficult-to-chew foods', 'Stay hydrated', 'Include anti-inflammatory spices like turmeric']
  },
  patient: {
    icon: '🏥', title: 'Health Condition Patients',
    desc: 'Therapeutic diet plans tailored for diabetes, hypertension, heart disease, and other conditions.',
    meals: [
      { time: '🫀 Diabetes', items: ['Low-GI foods: oats, lentils', 'Avoid white rice & sugar', 'Bitter gourd juice'] },
      { time: '💊 Hypertension', items: ['Low sodium meals', 'Bananas & potassium-rich foods', 'DASH diet recommended'] },
      { time: '❤️ Heart Disease', items: ['Omega-3 rich: salmon, walnuts', 'Avoid saturated fats', 'Oats, berries & olive oil'] },
      { time: '🦴 Thyroid', items: ['Selenium-rich foods: eggs, tuna', 'Avoid raw cruciferous veggies', 'Iodized salt in moderation'] },
      { time: '⚖️ Obesity', items: ['High fiber, low calorie meals', 'Avoid processed foods', 'Drink water before meals'] },
    ],
    tips: ['Always consult your doctor or dietitian', 'Track all meals in a food diary', 'Avoid self-medicating through food', 'Regular health check-ups are essential']
  }
};

function showDietPlan(type, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const plan = dietPlans[type];
  const el = document.getElementById('dietPlanContent');
  el.innerHTML = `
    <div class="plan-header">
      <div class="plan-icon">${plan.icon}</div>
      <div class="plan-info">
        <h3>${plan.title}</h3>
        <p>${plan.desc}</p>
      </div>
    </div>
    <div class="meal-grid">
      ${plan.meals.map(m => `
        <div class="meal-card">
          <h4><i class="fas fa-clock"></i> ${m.time}</h4>
          <ul>${m.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
    <div class="plan-tips">
      <h4><i class="fas fa-lightbulb"></i> Health Tips</h4>
      <ul>${plan.tips.map(t => `<li><i class="fas fa-check-circle"></i>${t}</li>`).join('')}</ul>
    </div>
  `;
}
showDietPlan('baby', null);

// ===== BMI CALCULATOR =====
function calculateAndSuggest() {
  const name = document.getElementById('userName').value;
  const age = parseInt(document.getElementById('userAge').value);
  const gender = document.getElementById('userGender').value;
  const height = parseFloat(document.getElementById('userHeight').value);
  const weight = parseFloat(document.getElementById('userWeight').value);
  const activity = document.getElementById('userActivity').value;
  const condition = document.getElementById('userCondition').value;

  if (!height || !weight) {
    alert('Please enter at least your height and weight!');
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category, badgeClass, foodSuggestions, advice;

  if (bmi < 18.5) {
    category = 'Underweight';
    badgeClass = 'underweight';
    foodSuggestions = [
      { e: '🍌', n: 'Banana' }, { e: '🥜', n: 'Peanut Butter' }, { e: '🧀', n: 'Cheese' },
      { e: '🥚', n: 'Eggs' }, { e: '🍚', n: 'Brown Rice' }, { e: '🥛', n: 'Full-fat Milk' }
    ];
    advice = 'Focus on calorie-dense, nutritious foods. Add healthy fats and protein.';
  } else if (bmi < 25) {
    category = 'Normal Weight ✓';
    badgeClass = 'normal';
    foodSuggestions = [
      { e: '🥦', n: 'Broccoli' }, { e: '🐟', n: 'Salmon' }, { e: '🫐', n: 'Blueberries' },
      { e: '🥑', n: 'Avocado' }, { e: '🌰', n: 'Almonds' }, { e: '🍎', n: 'Apple' }
    ];
    advice = 'Great job! Maintain your weight with balanced meals and regular exercise.';
  } else if (bmi < 30) {
    category = 'Overweight';
    badgeClass = 'overweight';
    foodSuggestions = [
      { e: '🥗', n: 'Salads' }, { e: '🫘', n: 'Lentils' }, { e: '🥒', n: 'Cucumber' },
      { e: '🍋', n: 'Lemon Water' }, { e: '🥬', n: 'Spinach' }, { e: '🍵', n: 'Green Tea' }
    ];
    advice = 'Reduce processed foods and sugar. Increase fiber and water intake.';
  } else {
    category = 'Obese';
    badgeClass = 'obese';
    foodSuggestions = [
      { e: '🥒', n: 'Cucumber' }, { e: '🥬', n: 'Leafy Greens' }, { e: '🫘', n: 'Beans' },
      { e: '🍵', n: 'Green Tea' }, { e: '🐟', n: 'Lean Fish' }, { e: '🫐', n: 'Berries' }
    ];
    advice = 'Consult a dietitian. Focus on low-calorie, high-fiber foods and regular exercise.';
  }

  // Condition-specific additions
  if (condition === 'diabetes') {
    foodSuggestions = [
      { e: '🌿', n: 'Bitter Gourd' }, { e: '🫘', n: 'Lentils' }, { e: '🥒', n: 'Cucumber' },
      { e: '🫐', n: 'Blueberries' }, { e: '🌰', n: 'Almonds' }, { e: '🍵', n: 'Green Tea' }
    ];
    advice = 'Diabetic Plan: Focus on low-GI foods. Avoid sugar and refined carbs.';
  } else if (condition === 'hypertension') {
    foodSuggestions = [
      { e: '🍌', n: 'Banana' }, { e: '🥬', n: 'Spinach' }, { e: '🐟', n: 'Salmon' },
      { e: '🍠', n: 'Sweet Potato' }, { e: '🫘', n: 'Beans' }, { e: '🧄', n: 'Garlic' }
    ];
    advice = 'Hypertension Plan: Low sodium diet. Include potassium & magnesium rich foods.';
  } else if (condition === 'pregnant') {
    foodSuggestions = [
      { e: '🥦', n: 'Broccoli (Folate)' }, { e: '🥚', n: 'Eggs (DHA)' }, { e: '🥛', n: 'Milk (Calcium)' },
      { e: '🍊', n: 'Orange (Vit C)' }, { e: '🐟', n: 'Salmon (Omega-3)' }, { e: '🫘', n: 'Lentils (Iron)' }
    ];
    advice = 'Pregnancy Plan: High folate, iron, calcium & DHA. Avoid raw/undercooked food.';
  }

  // BMI indicator position
  const bmiFloat = parseFloat(bmi);
  const minBMI = 15, maxBMI = 40;
  const pct = Math.min(100, Math.max(0, ((bmiFloat - minBMI) / (maxBMI - minBMI)) * 100));

  // Calories (Mifflin-St Jeor)
  let bmr;
  if (gender === 'female') bmr = 10 * weight + 6.25 * height - 5 * (age || 25) - 161;
  else bmr = 10 * weight + 6.25 * height - 5 * (age || 25) + 5;
  const actMap = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725 };
  const tdee = Math.round(bmr * (actMap[activity] || 1.375));

  const result = document.getElementById('trackerResult');
  result.innerHTML = `
    <div class="result-box">
      <div class="result-header">
        <h3>Hi, ${name || 'Health Warrior'}! 👋</h3>
        <span class="bmi-badge ${badgeClass}">${category}</span>
      </div>
      <div class="bmi-meter">
        <div class="bmi-value">${bmi}</div>
        <div class="bmi-label">Your BMI Score</div>
        <div class="bmi-bar-wrap">
          <div class="bmi-indicator" style="left:${pct}%"></div>
        </div>
        <div class="bmi-labels"><span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span></div>
      </div>
      <div class="result-stats">
        <div class="rs-item"><label>Daily Calories</label><span>${tdee} kcal</span></div>
        <div class="rs-item"><label>Ideal Weight</label><span>${Math.round(22 * heightM * heightM)}–${Math.round(24.9 * heightM * heightM)} kg</span></div>
        <div class="rs-item"><label>Height</label><span>${height} cm</span></div>
        <div class="rs-item"><label>Weight</label><span>${weight} kg</span></div>
      </div>
      <div class="result-foods">
        <h4><i class="fas fa-utensils"></i> Recommended Foods</h4>
        <p style="font-size:0.85rem;color:#5a6a5e;margin-bottom:12px">${advice}</p>
        <div class="food-chips">
          ${foodSuggestions.map(f => `<div class="food-chip"><span>${f.e}</span>${f.n}</div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ===== MODAL =====
function openModal(type) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  if (type === 'signup') {
    content.innerHTML = `
      <h2>Join VitaCore 🌿</h2>
      <p>Create your free account and start your health journey today.</p>
      <div class="modal-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="number" placeholder="Age" />
        <button class="modal-submit" onclick="showSuccess()">Create My Account</button>
      </div>
      <p class="modal-switch">Already have an account? <a onclick="openModal('signin')">Sign In</a></p>
    `;
  } else {
    content.innerHTML = `
      <h2>Welcome Back 👋</h2>
      <p>Sign in to continue your health journey with VitaCore.</p>
      <div class="modal-form">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button class="modal-submit" onclick="showSuccess()">Sign In</button>
      </div>
      <p class="modal-switch">New to VitaCore? <a onclick="openModal('signup')">Sign Up Free</a></p>
    `;
  }
  overlay.classList.add('active');
}

function showSuccess() {
  document.getElementById('modalContent').innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:4rem;margin-bottom:16px">🎉</div>
      <h2 style="font-family:'Playfair Display',serif;margin-bottom:8px">Welcome to VitaCore!</h2>
      <p style="color:#5a6a5e;margin-bottom:24px">Your health journey starts now. You're amazing!</p>
      <button class="modal-submit" style="max-width:220px;margin:0 auto;display:block" onclick="closeModal()">Let's Go! 🚀</button>
    </div>
  `;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// Close modal on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== INTERSECTION OBSERVER (scroll reveal) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fitness-card, .health-card, .testimonial-card, .food-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});