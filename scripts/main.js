const tools = [
    {
      name: { en: "ChatGPT", ko: "챗GPT" },
      description: { 
        en: "Conversational AI model for natural language interactions", 
        ko: "자연어 상호작용을 위한 대화형 AI 모델" 
      },
      category: { en: "Conversational AI", ko: "대화형 AI" },
      link: "https://chat.openai.com/"
    },
    {
      name: { en: "Gemini", ko: "제미나이" },
      description: {
        en: "AI model that understands and connects text, images, audio, and video",
        ko: "텍스트, 이미지, 음성, 영상을 이해하고 연결하는 AI 모델"
      },
      category: { en: "Multimodal AI", ko: "멀티모달 AI" },
      link: "https://gemini.google.com/"
    },
    {
      name: { en: "Copilot", ko: "코파일럿" },
      description: {
        en: "AI-powered assistant integrated with Microsoft services",
        ko: "Microsoft 서비스와 통합된 AI 기반 어시스턴트"
      },
      category: { en: "AI Assistant", ko: "AI 어시스턴트" },
      link: "https://www.microsoft.com/en-us/copilot"
    },
    {
      name: { en: "DALL-E", ko: "달리" },
      description: {
        en: "AI system that creates images from text descriptions",
        ko: "텍스트 설명으로 이미지를 생성하는 AI 시스템"
      },
      category: { en: "Image Generation", ko: "이미지 생성" },
      link: "https://openai.com/dall-e-2"
    },
    {
      name: { en: "Midjourney", ko: "미드저니" },
      description: {
        en: "AI-powered image generation tool",
        ko: "AI 기반 이미지 생성 도구"
      },
      category: { en: "Image Generation", ko: "이미지 생성" },
      link: "https://www.midjourney.com/"
    },
    {
      name: { en: "Stable Diffusion", ko: "스테이블 디퓨전" },
      description: {
        en: "Open-source image generation model",
        ko: "오픈소스 이미지 생성 모델"
      },
      category: { en: "Image Generation", ko: "이미지 생성" },
      link: "https://stablediffusionweb.com/"
    },
    {
      name: { en: "Rytr", ko: "라이터" },
      description: {
        en: "AI writing assistant for content creation",
        ko: "콘텐츠 제작을 위한 AI 글쓰기 도우미"
      },
      category: { en: "Writing Assistant", ko: "글쓰기 도우미" },
      link: "https://rytr.me/"
    },
    {
      name: { en: "Wrtn", ko: "뤼튼" },
      description: {
        en: "AI content generation platform for marketing",
        ko: "마케팅을 위한 AI 콘텐츠 생성 플랫폼"
      },
      category: { en: "Content Generation", ko: "콘텐츠 생성" },
      link: "https://wrtn.ai/"
    },
    {
      name: { en: "Looka", ko: "루카" },
      description: {
        en: "AI-powered logo and brand design service",
        ko: "AI 기반 로고 및 브랜드 디자인 서비스"
      },
      category: { en: "Brand Design", ko: "브랜드 디자인" },
      link: "https://looka.com/"
    },
    {
      name: { en: "Slid", ko: "슬리드" },
      description: {
        en: "AI-powered note-taking service for online lectures",
        ko: "온라인 강의를 위한 AI 기반 노트 작성 서비스"
      },
      category: { en: "Education", ko: "교육" },
      link: "https://slid.cc/"
    },
    {
      name: { en: "Brancher.ai", ko: "브랜처.ai" },
      description: {
        en: "No-code platform for building AI applications",
        ko: "AI 애플리케이션 제작을 위한 노코드 플랫폼"
      },
      category: { en: "AI Development", ko: "AI 개발" },
      link: "https://www.brancher.ai/"
    },
    {
      name: { en: "Viodio", ko: "비오디오" },
      description: {
        en: "AI background music generation service",
        ko: "AI 배경음악 생성 서비스"
      },
      category: { en: "Music Generation", ko: "음악 생성" },
      link: "https://www.viodio.io/"
    },
    {
      name: { en: "VREW", ko: "브루" },
      description: {
        en: "AI-powered video editing with automatic subtitles",
        ko: "자동 자막 기능이 있는 AI 기반 동영상 편집 서비스"
      },
      category: { en: "Video Editing", ko: "동영상 편집" },
      link: "https://vrew.voyagerx.com/"
    },
    {
      name: { en: "OnAir Studio", ko: "온에어스튜디오" },
      description: {
        en: "AI-powered voice and virtual human generation service",
        ko: "AI 기반 음성 및 가상 인간 생성 서비스"
      },
      category: { en: "Virtual Human", ko: "가상 인간" },
      link: "https://onairstudio.ai/"
    },
    {
      name: { en: "Typecast", ko: "타입캐스트" },
      description: {
        en: "AI-based TTS and virtual human video production tool",
        ko: "AI 기반 TTS 및 가상 인간 영상 제작 도구"
      },
      category: { en: "Virtual Human", ko: "가상 인간" },
      link: "https://typecast.ai/"
    },
    {
      name: { en: "Webtoon AI Painter", ko: "웹툰 AI 페인터" },
      description: {
        en: "AI-powered coloring tool for webtoons",
        ko: "웹툰을 위한 AI 채색 도구"
      },
      category: { en: "Digital Art", ko: "디지털 아트" },
      link: "https://ai.webtoons.com/ko/painter"
    },
    {
      name: { en: "Clova Note", ko: "클로바 노트" },
      description: {
        en: "AI-powered note-taking and transcription service",
        ko: "AI 기반 노트 작성 및 텍스트 변환 서비스"
      },
      category: { en: "Productivity", ko: "생산성" },
      link: "https://clovanote.naver.com/"
    },
    {
      name: { en: "Clova Dubbing", ko: "클로바 더빙" },
      description: {
        en: "AI voice dubbing service for videos",
        ko: "동영상을 위한 AI 음성 더빙 서비스"
      },
      category: { en: "Audio Production", ko: "오디오 제작" },
      link: "https://clovadubbing.naver.com/"
    },
    {
      name: { en: "Notion AI", ko: "노션 AI" },
      description: {
        en: "AI-powered writing assistant integrated with Notion",
        ko: "노션과 통합된 AI 글쓰기 도우미"
      },
      category: { en: "Productivity", ko: "생산성" },
      link: "https://www.notion.so/product/ai"
    },
    {
      name: { en: "vFlat", ko: "브이플랫" },
      description: {
        en: "AI-powered document scanning and text conversion app",
        ko: "AI 기반 문서 스캔 및 텍스트 변환 앱"
      },
      category: { en: "Document Processing", ko: "문서 처리" },
      link: "https://www.vflat.com/"
    },
    {
      name: { en: "SNOW", ko: "스노우" },
      description: {
        en: "AI-powered photo and video editing app",
        ko: "AI 기반 사진 및 동영상 편집 앱"
      },
      category: { en: "Photo Editing", ko: "사진 편집" },
      link: "https://snow.me/"
    },
    {
      name: { en: "Lensa", ko: "렌사" },
      description: {
        en: "AI-powered photo editing and avatar creation app",
        ko: "AI 기반 사진 편집 및 아바타 생성 앱"
      },
      category: { en: "Photo Editing", ko: "사진 편집" },
      link: "https://prisma-ai.com/lensa"
    },
    {
      name: { en: "Meitu", ko: "메이투" },
      description: {
        en: "AI-powered photo and video editing app",
        ko: "AI 기반 사진 및 동영상 편집 앱"
      },
      category: { en: "Photo Editing", ko: "사진 편집" },
      link: "https://www.meitu.com/"
    },
    {
      name: { en: "Nutty", ko: "너티" },
      description: {
        en: "AI chatbot messenger service",
        ko: "AI 챗봇 메신저 서비스"
      },
      category: { en: "Conversational AI", ko: "대화형 AI" },
      link: "https://nuttymessenger.com/"
    },
    {
      name: { en: "DiffusionBee", ko: "디퓨전비" },
      description: {
        en: "Stable Diffusion desktop app for AI art generation",
        ko: "AI 아트 생성을 위한 Stable Diffusion 데스크톱 앱"
      },
      category: { en: "Image Generation", ko: "이미지 생성" },
      link: "https://diffusionbee.com/"
    },
    {
      name: { en: "NovelAI", ko: "노벨AI" },
      description: {
        en: "AI-powered storytelling and novel writing platform",
        ko: "AI 기반 스토리텔링 및 소설 작성 플랫폼"
      },
      category: { en: "Writing", ko: "글쓰기" },
      link: "https://novelai.net/"
    },
    {
      name: { en: "1hour", ko: "원아워" },
      description: {
        en: "AI-powered English question generation service",
        ko: "AI 기반 영어 문제 생성 서비스"
      },
      category: { en: "Education", ko: "교육" },
      link: "https://1hour.ai/"
    },
    {
      name: { en: "Sparta Coding Club", ko: "스파르타코딩클럽" },
      description: {
        en: "AI-powered coding error correction service",
        ko: "AI 기반 코딩 오류 수정 서비스"
      },
      category: { en: "Programming", ko: "프로그래밍" },
      link: "https://spartacodingclub.kr/"
    },
    {
      name: { en: "Runway ML", ko: "런웨이 ML" },
      description: {
        en: "AI-powered creative tools for video editing and generation",
        ko: "동영상 편집 및 생성을 위한 AI 기반 창의적 도구"
      },
      category: { en: "Video Production", ko: "영상 제작" },
      link: "https://runwayml.com/"
    },
    {
      name: { en: "COLLERY", ko: "콜레리" },
      description: {
        en: "AI-powered image and web novel creation service",
        ko: "AI 기반 이미지 및 웹소설 창작 서비스"
      },
      category: { en: "Content Creation", ko: "콘텐츠 제작" },
      link: "https://collery.io/"
    },
    {
      name: { en: "Yummy", ko: "여미" },
      description: {
        en: "AI-powered personalized recipe generation service",
        ko: "AI 기반 개인 맞춤형 레시피 생성 서비스"
      },
      category: { en: "Food Tech", ko: "푸드테크" },
      link: "https://yummyai.com/"
    },
    {
      name: { en: "D-ID", ko: "D-ID" },
      description: {
        en: "AI-powered video creation platform with virtual humans",
        ko: "가상 인간을 활용한 AI 기반 비디오 제작 플랫폼"
      },
      category: { en: "Video Production", ko: "영상 제작" },
      link: "https://www.d-id.com/"
    },
    {
      name: { en: "Google Imagen", ko: "구글 이마젠" },
      description: {
        en: "Google's text-to-image diffusion model",
        ko: "구글의 텍스트-이미지 변환 AI 모델"
      },
      category: { en: "Image Generation", ko: "이미지 생성" },
      link: "https://imagen.research.google/"
    },
    {
      name: { en: "Scroobly", ko: "스크루블리" },
      description: {
        en: "AI-powered tool for bringing doodles to life",
        ko: "낙서를 생동감 있게 만드는 AI 도구"
      },
      category: { en: "Animation", ko: "애니메이션" },
      link: "https://www.scroobly.com/"
    },
    {
        name: { en: "Soundraw", ko: "사운드로" },
        description: {
          en: "AI-powered music composition tool",
          ko: "AI 기반 음악 작곡 도구"
        },
        category: { en: "Music Creation", ko: "음악 창작" },
        link: "https://soundraw.io/"
      },
      {
        name: { en: "Figma", ko: "피그마" },
        description: {
          en: "Collaborative interface design tool with AI features",
          ko: "AI 기능이 포함된 협업 인터페이스 디자인 도구"
        },
        category: { en: "Design", ko: "디자인" },
        link: "https://www.figma.com/"
      },
      {
        name: { en: "DeepL", ko: "딥엘" },
        description: {
          en: "AI-powered language translation tool",
          ko: "AI 기반 언어 번역 도구"
        },
        category: { en: "Language Translation", ko: "언어 번역" },
        link: "https://www.deepl.com/"
      },
      {
        name: { en: "Feathery", ko: "페더리" },
        description: {
          en: "AI-powered survey creation and automation tool",
          ko: "AI 기반 설문조사 제작 및 자동화 도구"
        },
        category: { en: "Survey Tools", ko: "설문조사 도구" },
        link: "https://feathery.io/"
      },
      {
        name: { en: "Vimcal", ko: "빔칼" },
        description: {
          en: "AI-powered calendar management and scheduling tool",
          ko: "AI 기반 일정 관리 및 스케줄링 도구"
        },
        category: { en: "Productivity", ko: "생산성" },
        link: "https://www.vimcal.com/"
      },
      {
        name: { en: "Gamma", ko: "감마" },
        description: {
          en: "AI-powered presentation creation tool",
          ko: "AI 기반 프레젠테이션 제작 도구"
        },
        category: { en: "Presentation", ko: "프레젠테이션" },
        link: "https://gamma.app/"
      },
      {
        name: { en: "Pika", ko: "피카" },
        description: {
          en: "AI-powered video creation and editing tool",
          ko: "AI 기반 비디오 제작 및 편집 도구"
        },
        category: { en: "Video Production", ko: "영상 제작" },
        link: "https://pika.art/"
      },
      {
        name: { en: "HeyGen", ko: "헤이젠" },
        description: {
          en: "AI-powered video creation platform with virtual avatars",
          ko: "가상 아바타를 활용한 AI 기반 비디오 제작 플랫폼"
        },
        category: { en: "Video Production", ko: "영상 제작" },
        link: "https://www.heygen.com/"
      },
      {
        name: { en: "Jasper", ko: "재스퍼" },
        description: {
          en: "AI-powered content creation platform",
          ko: "AI 기반 콘텐츠 제작 플랫폼"
        },
        category: { en: "Content Creation", ko: "콘텐츠 제작" },
        link: "https://www.jasper.ai/"
      },
      {
        name: { en: "Copy.ai", ko: "카피.ai" },
        description: {
          en: "AI-powered copywriting and content generation tool",
          ko: "AI 기반 카피라이팅 및 콘텐츠 생성 도구"
        },
        category: { en: "Copywriting", ko: "카피라이팅" },
        link: "https://www.copy.ai/"
      },
      {
        name: { en: "Perplexity", ko: "퍼플렉시티" },
        description: {
          en: "AI-powered search engine with detailed answers",
          ko: "상세한 답변을 제공하는 AI 기반 검색 엔진"
        },
        category: { en: "Search Engine", ko: "검색 엔진" },
        link: "https://www.perplexity.ai/"
      },
      {
        name: { en: "Whimsical", ko: "위미시컬" },
        description: {
          en: "AI-enhanced visual collaboration platform",
          ko: "AI 기능이 강화된 시각적 협업 플랫폼"
        },
        category: { en: "Collaboration", ko: "협업" },
        link: "https://whimsical.com/"
      },
      {
        name: { en: "AiSAC", ko: "아이삭" },
        description: {
          en: "AI-powered advertising copy and storyboard generation tool",
          ko: "AI 기반 광고 카피 및 스토리보드 생성 도구"
        },
        category: { en: "Advertising", ko: "광고" },
        link: "https://aisac.kr/"
      },
      {
        name: { en: "Firefly", ko: "파이어플라이" },
        description: {
          en: "Adobe's AI-powered creative tool suite",
          ko: "어도비의 AI 기반 창의적 도구 모음"
        },
        category: { en: "Creative Tools", ko: "창작 도구" },
        link: "https://www.adobe.com/products/firefly.html"
      },
      {
        name: { en: "Luma Labs Genie", ko: "루마 랩스 지니" },
        description: {
          en: "AI-powered 3D model generation tool",
          ko: "AI 기반 3D 모델 생성 도구"
        },
        category: { en: "3D Modeling", ko: "3D 모델링" },
        link: "https://lumalabs.ai/"
      },
      {
        name: { en: "Sora", ko: "소라" },
        description: {
          en: "OpenAI's text-to-video AI model",
          ko: "OpenAI의 텍스트-비디오 변환 AI 모델"
        },
        category: { en: "Video Generation", ko: "비디오 생성" },
        link: "https://openai.com/sora"
      }
    ];
    
let filteredTools = [...tools];
let currentLanguage = 'en';

const translations = {
    en: {
        title: "AI Tools Explorer",
        searchPlaceholder: "Search AI tools...",
        allCategories: "All Categories",
        learnMore: "Learn More"
    },
    ko: {
        title: "AI 도구 탐색기",
        searchPlaceholder: "AI 도구 검색...",
        allCategories: "모든 카테고리",
        learnMore: "자세히 보기"
    }
};

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('main-title').textContent = translations[lang].title;
    document.getElementById('searchInput').placeholder = translations[lang].searchPlaceholder;
    document.querySelector('#categorySelect option[value=""]').textContent = translations[lang].allCategories;
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('ko-btn').classList.toggle('active', lang === 'ko');
    renderTools();
    updateCategoryFilter();
}

function renderTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';
    filteredTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'ai-tool-card';
        toolCard.innerHTML = `
            <h3>${tool.name[currentLanguage]}</h3>
            <p class="category">${tool.category[currentLanguage]}</p>
            <p class="description">${tool.description[currentLanguage]}</p>
            <a href="${tool.link}" target="_blank" rel="noopener noreferrer">${translations[currentLanguage].learnMore}</a>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

function updateCategoryFilter() {
    const categorySelect = document.getElementById('categorySelect');
    const categories = [...new Set(tools.map(tool => tool.category[currentLanguage]))].sort();
    categorySelect.innerHTML = `<option value="">${translations[currentLanguage].allCategories}</option>`;
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function initializeCategoryFilter() {
    const categorySelect = document.getElementById('categorySelect');
    categorySelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        filteredTools = selectedCategory
            ? tools.filter(tool => tool.category[currentLanguage] === selectedCategory)
            : [...tools];
        renderTools();
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filteredTools = tools.filter(tool => 
            tool.name[currentLanguage].toLowerCase().includes(searchTerm) ||
            tool.description[currentLanguage].toLowerCase().includes(searchTerm) ||
            tool.category[currentLanguage].toLowerCase().includes(searchTerm)
        );
        renderTools();
    });
}

function initializeLanguageButtons() {
    document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
    document.getElementById('ko-btn').addEventListener('click', () => setLanguage('ko'));
}

function init() {
    setLanguage('en');
    initializeCategoryFilter();
    initializeSearch();
    initializeLanguageButtons();
}

init();