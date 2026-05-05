// ==================== 
// Mock News Data
// ====================
const mockNewsData = [
    {
        id: 1,
        title: "香港經濟迎來新增長機遇",
        summary: "香港特區政府公布最新經濟數據，第一季度GDP增長達3.2%，超出預期。分析認為，與國內市場的協同發展是主要驅動力。",
        category: "經濟",
        source: "香港日報",
        time: "2小時前",
        emoji: "📈",
        reliability: "high"
    },
    {
        id: 2,
        title: "AI技術在醫療領域取得重大突破",
        summary: "全球頂級研究機構發佈最新AI模型，在醫學影像識別準確度達99.8%。專家表示，這將大幅提升診斷效率。",
        category: "AI科技",
        source: "科技週刊",
        time: "4小時前",
        emoji: "🤖",
        reliability: "high"
    },
    {
        id: 3,
        title: "香港文化節開幕式圓滿舉行",
        summary: "今年香港文化節以'東方光芒'為主題，吸引超過50萬人次參與。展現了香港深厚的文化底蘊和國際融合特色。",
        category: "社會",
        source: "香港新聞",
        time: "6小時前",
        emoji: "🎭",
        reliability: "high"
    },
    {
        id: 4,
        title: "國際油價因地緣政治波動上升",
        summary: "受中東局勢影響，國際原油價格上漲5%。分析師預測短期內油價可能保持高位，影響全球能源成本。",
        category: "國際",
        source: "金融時報",
        time: "5小時前",
        emoji: "⛽",
        reliability: "medium"
    },
    {
        id: 5,
        title: "新興AI企業融資創新高",
        summary: "本月全球AI創業公司融資總額超過50億美元，創下歷史紀錄。投資者對生成式AI和大模型應用前景看好。",
        category: "AI科技",
        source: "創業投資",
        time: "7小時前",
        emoji: "💰",
        reliability: "high"
    },
    {
        id: 6,
        title: "香港房市進入調整期",
        summary: "房屋署數據顯示，香港住宅價格環比下跌2.3%，為近12個月來最大跌幅。業內人士認為市場正常調整。",
        category: "經濟",
        source: "房產網",
        time: "8小時前",
        emoji: "🏠",
        reliability: "high"
    },
    {
        id: 7,
        title: "歐洲與美國達成新貿易協議",
        summary: "經過半年談判，歐美雙方宣佈達成全面貿易框架協議。預計將促進雙邊貿易額增長15%以上。",
        category: "國際",
        source: "國際新聞",
        time: "9小時前",
        emoji: "🤝",
        reliability: "high"
    },
    {
        id: 8,
        title: "社會各界推動青年就業計劃",
        summary: "香港特區政府啟動新一輪青年就業扶持計劃，提供逾5000個就業機會。計劃著重科技和創意產業。",
        category: "社會",
        source: "社會新聞",
        time: "10小時前",
        emoji: "👨‍💼",
        reliability: "high"
    },
    {
        id: 9,
        title: "量子計算技術實現新突破",
        summary: "國際科技巨頭展示新一代量子計算機原型，運算能力提升100倍。專家認為商用化指日可待。",
        category: "AI科技",
        source: "科技評論",
        time: "11小時前",
        emoji: "⚛️",
        reliability: "medium"
    },
    {
        id: 10,
        title: "亞洲股市經歷震盪後回穩",
        summary: "上周亞洲主要股市波動後實現反彈，恆生指數上漲3.2%。投資者信心逐步恢復。",
        category: "經濟",
        source: "股市資訊",
        time: "12小時前",
        emoji: "📊",
        reliability: "high"
    },
    {
        id: 11,
        title: "全球氣候變化論壇召開在即",
        summary: "聯合國氣候變化大會將於下月召開，各國將討論新的減排目標。預計將有200多個國家代表參與。",
        category: "國際",
        source: "環保新聞",
        time: "13小時前",
        emoji: "🌍",
        reliability: "high"
    },
    {
        id: 12,
        title: "香港教育改革邁向新階段",
        summary: "教育部門發佈新一年教育藍皮書，著重培養學生創新思維。提撥更多資源用於STEM教育。",
        category: "社會",
        source: "教育新聞",
        time: "14小時前",
        emoji: "📚",
        reliability: "high"
    }
];

// ==================== 
// State Management
// ====================
let currentFilter = 'all';
let currentSearchQuery = '';
let isDarkMode = false;

// ==================== 
// DOM Elements
// ====================
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const newsContainer = document.getElementById('newsContainer');
const noResults = document.getElementById('noResults');
const darkModeToggle = document.getElementById('darkModeToggle');

// ==================== 
// Initialize
// ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    setupEventListeners();
    renderNews();
});

// ==================== 
// Dark Mode
// ====================
function initializeDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    isDarkMode = savedDarkMode;
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙';
    }
}

// ==================== 
// Event Listeners
// ====================
function setupEventListeners() {
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Search
    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        renderNews();
    });
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderNews();
        });
    });
}

// ==================== 
// News Filtering & Searching
// ====================
function getFilteredNews() {
    let filtered = mockNewsData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(news => news.category === currentFilter);
    }
    
    // Apply search filter
    if (currentSearchQuery) {
        filtered = filtered.filter(news => 
            news.title.toLowerCase().includes(currentSearchQuery) ||
            news.summary.toLowerCase().includes(currentSearchQuery) ||
            news.source.toLowerCase().includes(currentSearchQuery)
        );
    }
    
    return filtered;
}

// ==================== 
// Render News Cards
// ====================
function renderNews() {
    const filteredNews = getFilteredNews();
    newsContainer.innerHTML = '';
    
    if (filteredNews.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    filteredNews.forEach(news => {
        const newsCard = createNewsCard(news);
        newsContainer.appendChild(newsCard);
    });
}

function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <div class="news-card-image">${news.emoji}</div>
        <div class="news-card-content">
            <span class="news-card-category">${news.category}</span>
            <h3 class="news-card-title">${escapeHtml(news.title)}</h3>
            <p class="news-card-summary">${escapeHtml(news.summary)}</p>
            <div class="news-card-meta">
                <div>
                    <span class="news-card-source">${escapeHtml(news.source)}</span>
                </div>
                <div class="news-card-time">
                    🕐 ${news.time}
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="reliability-badge reliability-${news.reliability}">
                    ${getReliabilityLabel(news.reliability)}
                </span>
            </div>
        </div>
    `;
    
    // Add click event for interactivity
    card.addEventListener('click', () => {
        showNewsDetail(news);
    });
    
    return card;
}

// ==================== 
// Utility Functions
// ====================
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function getReliabilityLabel(reliability) {
    const labels = {
        high: '✓ 高可信度',
        medium: '~ 中等可信度',
        low: '✗ 低可信度'
    };
    return labels[reliability] || '未知';
}

function showNewsDetail(news) {
    // Create a simple modal or toast notification
    const message = `\n標題: ${news.title}\n\n摘要: ${news.summary}\n\n來源: ${news.source}\n時間: ${news.time}\n類別: ${news.category}\n可信度: ${getReliabilityLabel(news.reliability)}`;
    
    // Using a simple alert for demo purposes
    // In a real app, you'd create a proper modal
    console.log('新聞詳情:', news);
}

// ==================== 
// Keyboard Navigation
// ====================
document.addEventListener('keydown', (e) => {
    // Focus search on Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add keyboard shortcut hint
window.addEventListener('load', () => {
    console.log('💡 提示：按 Ctrl+K (或 Cmd+K) 快速搜尋');
});

// ==================== 
// Performance: Lazy Loading
// ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cards are already visible, no lazy loading needed for static content
                observer.unobserve(entry.target);
            }
        });
    });
    
    // Observe all news cards for future optimization
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.news-card').forEach(card => {
            imageObserver.observe(card);
        });
    });
}

// ==================== 
// Additional Features
// ====================

// Add news update indicator (simulated)
function addNewsUpdateIndicator() {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    indicator.textContent = '📰 有新的新聞更新';
    
    // Show after delay
    setTimeout(() => {
        document.body.appendChild(indicator);
        indicator.style.opacity = '1';
        
        // Hide after 5 seconds or on click
        const hideIndicator = () => {
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 300);
        };
        
        indicator.addEventListener('click', hideIndicator);
        setTimeout(hideIndicator, 5000);
    }, 3000);
}

// Uncomment to see update notification
// addNewsUpdateIndicator();

// ==================== 
// Analytics (Demo)
// ====================
function trackNewsView(newsId) {
    const event = {
        action: 'view_news',
        newsId: newsId,
        timestamp: new Date().toISOString()
    };
    console.log('📊 事件追蹤:', event);
}

// ==================== 
// Export for potential use
// ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mockNewsData,
        getFilteredNews,
        toggleDarkMode
    };
}
