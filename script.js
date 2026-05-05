// ==================== 
// Mock News Data with Full Article Content
// ====================
const mockNewsData = [
    {
        id: 1,
        title: "香港經濟迎來新增長機遇",
        summary: "香港特區政府公布最新經濟數據，第一季度GDP增長達3.2%，超出預期。分析認為，與國內市場的協同發展是主要驅動力。",
        fullContent: "根據最新發佈的經濟數據顯示，香港在第一季度的國內生產總值（GDP）錄得3.2%的增長率，這一表現超越了多數經濟學家的預期。\n\n香港特區政府經濟司司長表示，這一增長主要得益於以下幾個因素：首先，與內地市場的深度協同發展為香港帶來了新的商業機遇；其次，本地服務業的復甦，特別是金融、旅遊和零售業的表現有所改善；再次，出口貿易環境的改善也為經濟增長注入了動力。\n\n業內人士預測，隨著更多促進經濟發展的政策措施逐步落實，香港經濟在下半年有望保持穩定增長的勢頭。同時，特區政府宣佈將進一步推進創新科技產業的發展，預計將為香港創造更多高質素的就業機會。",
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
        fullContent: "國際頂尖研究機構近日聯合發佈了一項重大科研成果，成功開發出新一代人工智能模型，在醫學影像識別領域取得突破性進展。\n\n該AI模型在腫瘤檢測、心臟病診斷等多項醫學影像識別任務中的準確度達到了99.8%，相比傳統的人工診斷方法提升了顯著的精確度。更重要的是，該模型的運算速度極快，可以在幾秒鐘內完成原本需要醫生花費數十分鐘才能完成的診斷工作。\n\n參與研究的醫療專家指出，這項技術的應用將帶來多方面的益處：一方面可以大幅減輕醫護人員的工作負擔；另一方面可以降低醫療成本，使更多患者能夠獲得及時準確的診斷。預期該技術將在未來一年內逐步應用於全球主要醫療機構。",
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
        fullContent: "一年一度的香港文化節於昨日盛大開幕，本年度的文化節以「東方光芒」為主題，旨在展現香港傳統文化與現代藝術的完美結合。\n\n開幕式現場呈現了一場視覺盛宴，集中展示了粵劇、舞獅、茶藝等多項傳統文化元素。同時，國際知名藝術家也帶來了融合東西方文化特色的現代藝術表演。根據組委會統計，開幕式當天就吸引了超過10萬名觀眾現場觀看。\n\n整個文化節期間，將舉辦超過100場文化活動，涵蓋音樂、舞蹈、美術、文學等多個領域。預計整個文化節將吸引超過50萬人次參與，創造新的參與記錄。此外，文化節還將通過線上直播平台向全球觀眾播放部分精彩演出，展現香港的文化魅力。",
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
        fullContent: "受中東地區地緣政治局勢變化的影響，國際原油價格近日出現明顯上漲，布倫特原油價格上漲5%，創下近三個月來的新高。\n\n能源分析師指出，目前國際油價上升主要受以下因素驅動：首先，中東地區的政治局勢存在不確定性，引發了市場對供應中斷的擔憂；其次，全球經濟復甦帶動了能源需求的增加；再次，美元兌多種貨幣升值也推高了以美元計價的油價。\n\n多位分析師預測，在未來一至兩個月內，國際油價可能將保持在較高位置，這將對全球能源成本和運輸成本產生連鎖影響。各國政府已開始採取措施來緩衝高油價帶來的衝擊，包括加大國家儲備釋放等措施。",
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
        fullContent: "根據全球創投數據統計平台最新發佈的數據，本月全球AI相關創業企業的融資總額已超過50億美元，創下自去年以來的最高記錄。\n\n這一融資熱潮主要集中在生成式AI、大語言模型、及其在各行業應用等領域。投資方中既包括傳統風險投資基金，也包括科技巨頭企業和產業基金。業內人士認為，這反映了投資者對AI技術前景的強烈看好。\n\n值得注意的是，從融資分佈來看，亞洲地區的AI企業融資佔比有所提升，反映了該地區在AI創新中的地位不斷上升。多位投資專家表示，預期在未來12個月內，全球對AI領域的投資將持續保持高溫，新一波的AI應用創新浪潮即將到來。",
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
        fullContent: "根據香港房屋署最新發佈的房地產市場數據，香港住宅平均價格本月環比下跌2.3%，這是過去12個月來最大的單月跌幅。\n\n分析師認為，房價調整主要受以下因素影響：首先，利率環境的變化影響了購房者的購買力；其次，部分投資者選擇套現離場，增加了市場供應；再次，市場對經濟前景的預期有所調整。不過，業內人士普遍認為這是市場的正常調整，而非崩潰跡象。\n\n房屋署官員表示，儘管出現價格調整，但香港房產市場基本面仍然穩健，長期看漲前景未變。同時，政府將繼續推進公營房屋建設計劃，以緩解房屋供應緊張局面。",
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
        fullContent: "美國總統與歐盟主席近日在聯合聲明中宣佈，雙方經過半年來的密集談判，終於達成了一份全面的貿易框架協議。\n\n該協議涵蓋了貨物貿易、服務貿易、知識產權保護等多個領域，並設立了爭端解決機制。雙方承諾將逐步降低關稅壁壘，並在環保、勞動力保護等領域建立統一標準。根據協議相關機構的預測，該協議將促進歐美雙邊貿易額增長15%以上。\n\n此外，協議還特別強調了在新興技術領域的合作，包括人工智能、清潔能源等。經濟學家普遍認為，這一協議有助於穩定全球經濟，降低貿易摩擦，將對全球經濟增長產生積極推動作用。該協議將在獲得各方議會批准後於年底正式生效。",
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
        fullContent: "香港特區政府日前宣佈啟動「青年就業扶持計劃2.0」，這是一項旨在幫助青年人進入職場的重要民生項目。\n\n該計劃將投入數億港元，為香港青年提供超過5000個就業機會。其中，科技和創意產業將是重點扶持領域，預計將創造超過2000個相關職位。此外，計劃還包括職業培訓、導師輔導等多項配套措施，幫助青年人快速融入職場。\n\n計劃的特點是校企合作模式，既能為企業輸送適合的人才，也能為青年人提供實踐機會。政府還將提供一定比例的薪資補貼，減輕企業負擔。預計該計劃將惠及數千名香港青年，為社會注入新的活力和創意。",
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
        fullContent: "全球領先的科技公司近日在國際科技大會上展示了新一代量子計算機原型，引起了業界的廣泛關注。\n\n根據公司披露的技術指標，新一代量子計算機相比前代產品的運算能力提升了100倍，這標誌著量子計算向實用化邁出了重要一步。新機器包含超過1000個量子比特，錯誤率也大幅降低，解決了困擾業界多年的技術問題。\n\n業內專家認為，量子計算的商用化時代已經到來。預計在未來2-3年內，量子計算將在金融風險分析、藥物開發、材料科學等領域實現實際應用。多個國家已表示將加大對量子計算研究的投資，搶佔這一新興產業的制高點。",
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
        fullContent: "亞洲股市在經歷了一周的波動後，本周實現強勁反彈。香港恆生指數上漲3.2%，創下近期新高；其他亞洲主要股指也錄得類似漲幅。\n\n分析師認為，股市反彈主要得益於以下因素：首先，全球經濟數據好於預期，提振了投資者信心；其次，央行釋放了寬鬆信號，減輕了市場對利率上升的擔憂；再次，企業盈利表現良好，為股市上升提供了基本面支撐。\n\n隨著股市的反彈，投資者情緒明顯改善。市場普遍預計，在經濟基本面穩健的支撐下，亞洲股市有望在未來幾個月內保持穩定上升的趨勢。基金經理們開始增加對亞洲股票的配置比重。",
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
        fullContent: "聯合國秘書長日前宣佈，全球最重要的氣候變化會議將於下月在瑞士召開。本屆大會的主題是「全球行動，共同應對」，旨在推動全球在應對氣候變化上達成更加雄心勃勃的目標。\n\n預計將有來自200多個國家和地區的代表與會，包括多位國家領導人。大會的主要議程包括討論新一輪全球減排承諾、建立氣候融資機制、推動清潔能源轉型等關鍵議題。\n\n環保組織對本屆大會寄予厚望，認為這是推動全球應對氣候變化的關鍵機會。各國政府正在做最後準備，有望在新能源、碳中立等方面提出更具體的行動計劃。聯合國表示，本屆大會有望成為氣候行動領域的里程碑事件。",
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
        fullContent: "香港教育部門近日發佈了新一年的教育藍皮書，這份綱領性文件規劃了未來教育發展的方向和重點。\n\n根據藍皮書，未來教育改革將著重於以下幾個方面：首先，強化學生的創新思維和問題解決能力的培養；其次，大力發展STEM教育（科學、技術、工程、數學），以應對未來經濟發展需求；再次，推進教育信息化，充分利用現代技術手段提升教學效率。\n\n特別值得注意的是，特區政府將顯著增加對教育的投資，提撥更多資源用於STEM教育和教師培訓。同時，教育部門計劃推動校企合作，使學生能夠更好地了解實際工作環境。教育界人士普遍認為，這些改革措施將有助於提升香港教育的國際競爭力。",
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
let currentArticle = null;

// ==================== 
// DOM Elements
// ====================
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const newsContainer = document.getElementById('newsContainer');
const noResults = document.getElementById('noResults');
const darkModeToggle = document.getElementById('darkModeToggle');

// Modal elements
const articleModal = document.getElementById('articleModal');
const modalOverlay = articleModal.querySelector('.modal-overlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalSource = document.getElementById('modalSource');
const modalTime = document.getElementById('modalTime');
const modalReliability = document.getElementById('modalReliability');
const modalSummary = document.getElementById('modalSummary');
const modalArticle = document.getElementById('modalArticle');

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
    
    // Modal close button
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', closeModal);
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !articleModal.hasAttribute('hidden')) {
            closeModal();
        }
    });
    
    // Prevent closing when clicking inside modal content
    articleModal.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
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
            <span class="news-card-category">${escapeHtml(news.category)}</span>
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
    
    // Add click event to open modal
    card.addEventListener('click', () => {
        openArticleModal(news);
    });
    
    // Add keyboard support
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openArticleModal(news);
        }
    });
    
    return card;
}

// ==================== 
// Modal Functions
// ====================
function openArticleModal(article) {
    currentArticle = article;
    
    // Populate modal with article data
    modalTitle.textContent = escapeHtml(article.title);
    modalCategory.textContent = escapeHtml(article.category);
    modalSource.textContent = escapeHtml(article.source);
    modalTime.textContent = article.time;
    modalReliability.innerHTML = `<span class="reliability-badge reliability-${article.reliability}">${getReliabilityLabel(article.reliability)}</span>`;
    modalSummary.textContent = escapeHtml(article.summary);
    
    // Format article content with paragraphs
    const paragraphs = article.fullContent.split('\n').filter(p => p.trim());
    modalArticle.innerHTML = paragraphs
        .map(para => `<p>${escapeHtml(para)}</p>`)
        .join('');
    
    // Show modal
    articleModal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    
    // Focus on close button for accessibility
    setTimeout(() => {
        modalCloseBtn.focus();
    }, 100);
    
    // Track view
    trackNewsView(article.id);
}

function closeModal() {
    articleModal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    currentArticle = null;
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
        toggleDarkMode,
        openArticleModal,
        closeModal
    };
}
