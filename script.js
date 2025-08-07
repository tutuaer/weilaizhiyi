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
    },
    {
        id: 17,
        name: "白泽",
        category: "神兽",
        description: "通晓万物语言的瑞兽，能说人话，知天下事。",
        habitat: "昆仑山",
        features: "羊身独角，通晓万物，能言善辩",
        emoji: "🐐"
    },
    {
        id: 18,
        name: "獬豸",
        category: "神兽",
        description: "公正之神兽，能辨是非曲直，专吃奸邪之人。",
        habitat: "天庭",
        features: "独角羊身，能辨是非，公正无私",
        emoji: "🦄"
    },
    {
        id: 19,
        name: "重明鸟",
        category: "飞禽",
        description: "双瞳神鸟，能驱邪避凶，保护平安。",
        habitat: "昆仑山",
        features: "双瞳，能驱邪，羽毛发光",
        emoji: "🦅"
    },
    {
        id: 20,
        name: "毕方",
        category: "飞禽",
        description: "火神之鸟，能喷火，象征火灾。",
        habitat: "章莪山",
        features: "独脚，能喷火，羽毛赤红",
        emoji: "🔥"
    },
    {
        id: 21,
        name: "蛊雕",
        category: "异兽",
        description: "凶猛的雕形怪兽，能发出婴儿哭声诱人。",
        habitat: "鹿台山",
        features: "雕形，能模仿婴儿哭声，凶猛异常",
        emoji: "🦅"
    },
    {
        id: 22,
        name: "英招",
        category: "神兽",
        description: "天帝的御者，掌管天马，能飞行千里。",
        habitat: "天庭",
        features: "人面马身，有翼，能飞行",
        emoji: "🐎"
    },
    {
        id: 23,
        name: "陆吾",
        category: "神兽",
        description: "昆仑山神，掌管九部，守护神山。",
        habitat: "昆仑山",
        features: "虎身九尾，人面虎爪，威严无比",
        emoji: "🐯"
    },
    {
        id: 24,
        name: "开明兽",
        category: "神兽",
        description: "昆仑山门神，九头人面，守护天门。",
        habitat: "昆仑山",
        features: "九头人面，虎身，守护天门",
        emoji: "👹"
    },
    {
        id: 25,
        name: "梼杌",
        category: "异兽",
        description: "四凶之一，顽固不化，难以教化。",
        habitat: "西方",
        features: "虎身人面，獠牙，性情顽固",
        emoji: "🐅"
    },
    {
        id: 26,
        name: "浑沌",
        category: "异兽",
        description: "四凶之一，不分善恶，是非不明。",
        habitat: "中央",
        features: "无面目，六足四翼，混沌不明",
        emoji: "🌀"
    },
    {
        id: 27,
        name: "穷奇",
        category: "异兽",
        description: "四凶之一，专门吃好人，帮助恶人。",
        habitat: "北方",
        features: "虎身牛角，性情凶残，助纣为虐",
        emoji: "🐅"
    },
    {
        id: 28,
        name: "饕餮",
        category: "异兽",
        description: "四凶之一，贪食之兽，象征贪婪。",
        habitat: "东方",
        features: "羊身人面，眼在腋下，贪食无厌",
        emoji: "👹"
    },
    {
        id: 29,
        name: "九婴",
        category: "水怪",
        description: "九头蛇怪，能喷水火，被后羿射杀。",
        habitat: "凶水",
        features: "九头蛇身，能喷水火，凶猛异常",
        emoji: "🐍"
    },
    {
        id: 30,
        name: "封豨",
        category: "异兽",
        description: "大野猪怪，力大无穷，被后羿射杀。",
        habitat: "桑林",
        features: "巨大野猪，力大无穷，凶猛异常",
        emoji: "🐗"
    }
];

// DOM 元素
const animalsGrid = document.getElementById('animalsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
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

    // 返回全部功能
    clearSearchBtn.addEventListener('click', clearSearch);

    // 实时搜索（输入时自动搜索）
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim() === '') {
            clearSearch();
        } else {
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
    
    if (animals.length === 0) {
        // 显示空状态
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #666;">
                <div style="font-size: 4rem; margin-bottom: 20px;">🔍</div>
                <h3 style="margin-bottom: 10px; color: #333;">未找到相关动物</h3>
                <p style="margin-bottom: 20px;">试试其他关键词或分类</p>
                <button onclick="clearSearch()" style="
                    padding: 10px 20px; 
                    background: linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(70, 130, 180, 0.8) 100%);
                    color: white; 
                    border: none; 
                    border-radius: 25px; 
                    cursor: pointer;
                    font-size: 16px;
                ">返回全部动物</button>
            </div>
        `;
        animalsGrid.appendChild(emptyState);
        return;
    }
    
    // 显示搜索结果提示（只在有搜索词时显示）
    if (currentSearch) {
        const resultInfo = document.createElement('div');
        resultInfo.className = 'result-info';
        resultInfo.style.cssText = `
            grid-column: 1 / -1;
            text-align: center;
            padding: 20px;
            background: rgba(139, 69, 19, 0.1);
            border-radius: 15px;
            margin-bottom: 20px;
            color: #2c1810;
        `;
        
        let infoText = '';
        if (currentFilter !== 'all') {
            infoText = `找到 ${animals.length} 个"${currentSearch}"相关的${currentFilter}`;
        } else {
            infoText = `找到 ${animals.length} 个"${currentSearch}"相关的动物`;
        }
        
        resultInfo.innerHTML = `<strong>${infoText}</strong>`;
        animalsGrid.appendChild(resultInfo);
    }
    
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
    updateSearchUI();
}

// 清除搜索
function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    currentFilter = 'all';
    
    // 重置筛选按钮状态
    filterBtns.forEach(btn => btn.classList.remove('active'));
    filterBtns[0].classList.add('active'); // 激活"全部"按钮
    
    filterAnimals();
    updateSearchUI();
}

// 更新搜索界面状态
function updateSearchUI() {
    const hasSearch = currentSearch.trim() !== '';
    const hasFilter = currentFilter !== 'all';
    
    if (hasSearch || hasFilter) {
        clearSearchBtn.style.display = 'inline-block';
        clearSearchBtn.textContent = hasSearch ? '清除搜索' : '返回全部';
    } else {
        clearSearchBtn.style.display = 'none';
    }
}

// 筛选处理
function handleFilter(e) {
    // 更新按钮状态
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.category;
    filterAnimals();
    updateSearchUI();
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
    
    // 按搜索词筛选（在分类筛选的基础上）
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
    // 设置模态框图片（使用emoji作为图片内容）
    const modalImage = document.getElementById('modalImage');
    modalImage.innerHTML = `<span style="font-size: 6rem; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">${animal.emoji}</span>`;
    
    // 设置其他模态框内容
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
    // 为卡片添加简单的淡入效果
    document.querySelectorAll('.animal-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 在渲染动物后添加动画
const originalRenderAnimals = renderAnimals;
renderAnimals = function(animals) {
    originalRenderAnimals(animals);
    setTimeout(addAnimationEffects, 100);
}; 