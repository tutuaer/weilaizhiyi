// 山海经动物数据
const animalsData = [
    {
        id: 1,
        name: "青龙",
        category: "神兽",
        description: "东方之神，四灵之一，掌管春季，象征生机与希望。",
        habitat: "东方苍天",
        features: "青色鳞片，能呼风唤雨，腾云驾雾",
        emoji: "🐉"
    },
    {
        id: 2,
        name: "白虎",
        category: "神兽",
        description: "西方之神，四灵之一，掌管秋季，象征威严与力量。",
        habitat: "西方金天",
        features: "白色皮毛，凶猛威武，能驱邪避凶",
        emoji: "🐯"
    },
    {
        id: 3,
        name: "朱雀",
        category: "神兽",
        description: "南方之神，四灵之一，掌管夏季，象征光明与温暖。",
        habitat: "南方赤天",
        features: "红色羽毛，能喷火，浴火重生",
        emoji: "🦅"
    },
    {
        id: 4,
        name: "玄武",
        category: "神兽",
        description: "北方之神，四灵之一，掌管冬季，象征智慧与长寿。",
        habitat: "北方玄天",
        features: "龟蛇合体，能预知未来，防御力极强",
        emoji: "🐢"
    },
    {
        id: 5,
        name: "麒麟",
        category: "神兽",
        description: "仁兽，象征祥瑞，只在太平盛世出现。",
        habitat: "昆仑山",
        features: "鹿身牛尾，独角，性情温和",
        emoji: "🦄"
    },
    {
        id: 6,
        name: "凤凰",
        category: "神兽",
        description: "百鸟之王，象征美好与和谐。",
        habitat: "梧桐林",
        features: "五彩羽毛，能歌善舞，浴火重生",
        emoji: "🦚"
    },
    {
        id: 7,
        name: "九尾狐",
        category: "异兽",
        description: "千年修炼的狐妖，拥有九条尾巴，能变化人形。",
        habitat: "青丘山",
        features: "九条尾巴，能幻化人形，魅惑众生",
        emoji: "🦊"
    },
    {
        id: 8,
        name: "穷奇",
        category: "异兽",
        description: "凶兽，专门吃好人，帮助恶人。",
        habitat: "邽山",
        features: "虎身牛角，性情凶残，助纣为虐",
        emoji: "🐅"
    },
    {
        id: 9,
        name: "饕餮",
        category: "异兽",
        description: "贪食之兽，象征贪婪，什么都吃。",
        habitat: "钩吾山",
        features: "羊身人面，眼在腋下，贪食无厌",
        emoji: "👹"
    },
    {
        id: 10,
        name: "混沌",
        category: "异兽",
        description: "无面目之兽，象征宇宙初开时的混沌状态。",
        habitat: "天山",
        features: "无面目，六足四翼，能歌善舞",
        emoji: "🌀"
    },
    {
        id: 11,
        name: "应龙",
        category: "神兽",
        description: "有翼之龙，能兴云布雨，助大禹治水。",
        habitat: "天界",
        features: "有翼，能飞行，掌控风雨",
        emoji: "🐲"
    },
    {
        id: 12,
        name: "夔牛",
        category: "异兽",
        description: "独脚神牛，能发出雷鸣般的声音。",
        habitat: "东海流波山",
        features: "独脚，能发出雷鸣，皮可制鼓",
        emoji: "🐂"
    },
    {
        id: 13,
        name: "鲲鹏",
        category: "飞禽",
        description: "传说中的巨鸟，由鲲鱼变化而来。",
        habitat: "北海",
        features: "巨大无比，能扶摇直上九万里",
        emoji: "🦅"
    },
    {
        id: 14,
        name: "精卫",
        category: "飞禽",
        description: "炎帝之女，死后化为精卫鸟，衔石填海。",
        habitat: "东海",
        features: "小鸟，衔石填海，意志坚定",
        emoji: "🐦"
    },
    {
        id: 15,
        name: "相柳",
        category: "水怪",
        description: "九头蛇怪，能喷毒液，被大禹所杀。",
        habitat: "共工之台",
        features: "九头蛇身，能喷毒液，所过之处寸草不生",
        emoji: "🐍"
    },
    {
        id: 16,
        name: "河伯",
        category: "水怪",
        description: "黄河之神，掌管河流，能兴风作浪。",
        habitat: "黄河",
        features: "人面鱼身，能控制水流，喜怒无常",
        emoji: "🐟"
    }
];

// DOM 元素
const animalsGrid = document.getElementById('animalsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('animalModal');
const closeModal = document.getElementById('closeModal');

// 当前筛选状态
let currentFilter = 'all';
let currentSearch = '';

// 初始化页面
function init() {
    renderAnimals(animalsData);
    setupEventListeners();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 筛选功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // 模态框
    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
}

// 渲染动物卡片
function renderAnimals(animals) {
    animalsGrid.innerHTML = '';
    
    animals.forEach(animal => {
        const card = createAnimalCard(animal);
        animalsGrid.appendChild(card);
    });
}

// 创建动物卡片
function createAnimalCard(animal) {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.innerHTML = `
        <div class="animal-image">
            <span style="font-size: 4rem;">${animal.emoji}</span>
        </div>
        <div class="animal-info">
            <h3 class="animal-name">${animal.name}</h3>
            <span class="animal-category">${animal.category}</span>
            <p class="animal-description">${animal.description}</p>
            <div class="animal-features">${animal.features}</div>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(animal));
    return card;
}

// 搜索处理
function handleSearch() {
    currentSearch = searchInput.value.trim().toLowerCase();
    filterAnimals();
}

// 筛选处理
function handleFilter(e) {
    // 更新按钮状态
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.category;
    filterAnimals();
}

// 筛选动物
function filterAnimals() {
    let filteredAnimals = animalsData;
    
    // 按分类筛选
    if (currentFilter !== 'all') {
        filteredAnimals = filteredAnimals.filter(animal => 
            animal.category === currentFilter
        );
    }
    
    // 按搜索词筛选
    if (currentSearch) {
        filteredAnimals = filteredAnimals.filter(animal =>
            animal.name.toLowerCase().includes(currentSearch) ||
            animal.description.toLowerCase().includes(currentSearch) ||
            animal.features.toLowerCase().includes(currentSearch)
        );
    }
    
    renderAnimals(filteredAnimals);
}

// 打开模态框
function openModal(animal) {
    document.getElementById('modalImage').innerHTML = `<span style="font-size: 6rem;">${animal.emoji}</span>`;
    document.getElementById('modalTitle').textContent = animal.name;
    document.getElementById('modalDescription').textContent = animal.description;
    document.getElementById('modalCategory').textContent = animal.category;
    document.getElementById('modalHabitat').textContent = animal.habitat;
    document.getElementById('modalFeatures').textContent = animal.features;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}



// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 添加一些动画效果
function addAnimationEffects() {
    // 为卡片添加进入动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // 观察所有动物卡片
    document.querySelectorAll('.animal-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 在渲染动物后添加动画
const originalRenderAnimals = renderAnimals;
renderAnimals = function(animals) {
    originalRenderAnimals(animals);
    setTimeout(addAnimationEffects, 100);
}; 