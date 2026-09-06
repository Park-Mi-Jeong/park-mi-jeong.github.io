(() => {
  "use strict";

  const data = window.SITE_DATA;
  const by = (selector) => document.querySelector(selector);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const translations = {
    ko: {
      skip: "본문으로 바로가기", menu: "메뉴 열기", navResearch: "연구", navPublications: "논문", navProjects: "프로젝트", navExperience: "경력", navWorks: "수상·저서", navContact: "연락처",
      name: "박미정", heroRole: "가정과교육 연구자", heroLead: "가정과교육의 정체성과 실천을 연구합니다.", affiliation: "한국교원대학교 가정교육과 교수", director: "교육연구원장", explorePapers: "논문 살펴보기",
      portraitAlt: "박미정 교수 프로필 사진", introTitle: "생활의 문제를 교육의 언어로, 교실의 실천을 연구의 근거로.", introBody: "교육과정과 교과서, 교사의 전문성과 행위주체성, 지속가능한 생활과 소비자교육을 중심으로 가정과교육의 가능성을 탐구합니다. 연구 성과가 교육 현장의 변화로 이어지도록 교육 프로그램 개발과 실행 연구를 함께 수행합니다.",
      factPapers: "논문", papersUnit: "편", factYears: "연구 기간", factAffiliation: "소속", knue: "한국교원대학교",
      researchTitle: "연구 영역", researchBody: "교육과정의 구조를 읽고, 학습자의 삶과 교사의 실천을 연결합니다.", focus1Title: "가정과 교육과정", focus1Body: "교육과정·성취기준·교과서 분석과 미래 과목 설계", focus2Title: "교사 전문성", focus2Body: "교사 역량, 행위주체성, 수업 실행과 좋은 수업", focus3Title: "지속가능한 생활", focus3Body: "생태전환교육, 지속가능한 소비와 시민성", focus4Title: "수업과 평가", focus4Body: "실천적 문제해결, 프로그램 개발과 효과 검증",
      publicationsTitle: "논문", publicationsBody: "총 80편의 논문을 연도별로 확인하고 원문 또는 DOI 페이지로 이동할 수 있습니다. 제목과 초록은 파일에 수록된 언어로 제공합니다.", searchLabel: "논문 검색", searchPlaceholder: "제목, 저자, 학술지 검색", yearLabel: "연도 선택", allYears: "전체 연도", emptyPapers: "검색 조건에 맞는 논문이 없습니다.", morePapers: "목록 더 보기",
      thesesTitle: "학위논문", thesesBody: "석사 및 박사 학위논문은 학술지 논문과 구분하여 제공합니다.", riss: "RISS 원문",
      projectsTitle: "연구 프로젝트", projectsBody: "교과서와 교육 콘텐츠 개발, 교원 역량 강화, 교육과정 운영을 연구 현장과 연결해 왔습니다.", experienceTitle: "학력과 경력", careerTab: "경력", educationTab: "학력", worksTitle: "수상과 저서", worksBody: "교육과 연구의 성과를 학술 공동체와 교육 현장에 확장해 왔습니다.", awardsTitle: "주요 수상", booksTitle: "저서·교과서",
      contactTitle: "연구와 교육에 관한 대화를 기다립니다.", contactAddress: "한국교원대학교 가정교육과\n충청북도 청주시 흥덕구 강내면 태성탑연로 250", backTop: "맨 위로",
      paperCount: (n) => `${n}편`, yearOption: (year) => `${year}년`, fullText: "원문", abstractToggle: "초록과 인용 정보", abstractKo: "국문 초록", abstractEn: "ENGLISH ABSTRACT", citation: "권장 인용", showAll: (n) => `전체 ${n}건 보기 ↓`, showLess: "간략히 보기 ↑", missingYear: "연도 미표기"
    },
    en: {
      skip: "Skip to main content", menu: "Open menu", navResearch: "Research", navPublications: "Publications", navProjects: "Projects", navExperience: "Experience", navWorks: "Honors & Books", navContact: "Contact",
      name: "MI JEONG PARK", heroRole: "Home Economics Education Researcher", heroLead: "Researching the identity and practice of home economics education.", affiliation: "Professor, Department of Home Economics Education, KNUE", director: "Director, Institute for Educational Research", explorePapers: "Explore publications",
      portraitAlt: "Portrait of Professor Mi Jeong Park", introTitle: "Translating everyday life into education, and classroom practice into evidence.", introBody: "My research explores the possibilities of home economics education through curriculum and textbook studies, teacher professionalism and agency, sustainable living, and consumer education. I develop and evaluate educational programs so that research can lead to meaningful change in classrooms.",
      factPapers: "Publications", papersUnit: " papers", factYears: "Research period", factAffiliation: "Affiliation", knue: "Korea National University of Education",
      researchTitle: "Research Focus", researchBody: "Connecting curriculum structures with learners' lives and teachers' practice.", focus1Title: "Home Economics Curriculum", focus1Body: "Curriculum, achievement standards, textbook analysis, and future course design", focus2Title: "Teacher Professionalism", focus2Body: "Teacher competency, agency, classroom practice, and good teaching", focus3Title: "Sustainable Living", focus3Body: "Ecological transition education, sustainable consumption, and citizenship", focus4Title: "Teaching & Assessment", focus4Body: "Practical problem solving, program development, and effectiveness studies",
      publicationsTitle: "Publications", publicationsBody: "Browse 80 publications by year and open the available full text or DOI page. Titles and abstracts appear in every language included in the source file.", searchLabel: "Search publications", searchPlaceholder: "Search title, author, or journal", yearLabel: "Select year", allYears: "All years", emptyPapers: "No publications match your search.", morePapers: "Load more",
      thesesTitle: "Theses & Dissertations", thesesBody: "Master's and doctoral research is presented separately from journal publications.", riss: "View on RISS",
      projectsTitle: "Research Projects", projectsBody: "Connecting textbook and educational content development, teacher capacity building, and curriculum implementation with educational practice.", experienceTitle: "Education & Experience", careerTab: "Experience", educationTab: "Education", worksTitle: "Honors & Books", worksBody: "Extending the outcomes of teaching and research into academic communities and educational practice.", awardsTitle: "Selected Honors", booksTitle: "Books & Textbooks",
      contactTitle: "I welcome conversations about research and education.", contactAddress: "Department of Home Economics Education, KNUE\n250 Taeseongtabyeon-ro, Gangnae-myeon, Heungdeok-gu, Cheongju-si, Chungbuk 28173, Korea", backTop: "Back to top",
      paperCount: (n) => `${n} papers`, yearOption: (year) => String(year), fullText: "Full text", abstractToggle: "Abstracts & citation", abstractKo: "KOREAN ABSTRACT", abstractEn: "ENGLISH ABSTRACT", citation: "Preferred citation", showAll: (n) => `View all ${n} ↓`, showLess: "Show less ↑", missingYear: "Year not listed"
    }
  };

  const dynamicEn = {
    projects: [
      ["Principal investigator", "[Ministry of Food and Drug Safety] Publication of the approved high school textbook Food Safety and Health and operation of teacher training"],
      ["Co-researcher", "Revision of the high school textbook Food Safety and Health"],
      ["Principal investigator", "[Ministry of Food and Drug Safety] Development of food safety and health educational content and operation of a training course"],
      ["Principal investigator", "[Ministry of Education] Proposal for a quality-management system for locally published textbooks"],
      ["Principal investigator", "[Ministry of Food and Drug Safety] Development of a supplementary Food Safety and Health textbook and operation of a training course"],
      ["Principal investigator", "[Ministry of Food and Drug Safety] Operation of a food safety and health curriculum for adolescents"],
      ["Co-researcher", "[Ministry of Food and Drug Safety] Development of educational materials for healthy and safe eating among adolescents"],
      ["Principal investigator", "[KOFAC & Ministry of Education] Development of a teacher training program for competency in process-centered assessment (Technology and Home Economics)"],
      ["Principal investigator", "[KNUE] Exploring directions for home economics education in the era of single-person households"]
    ],
    career: [
      ["The Journal of Korean Teacher Education", "Editor-in-Chief"], ["Korean Home Economics Association", "Vice President"], ["Korean Home Economics Education Association", "Academic Committee Chair"], ["Korea National University of Education", "Associate Professor"], ["Korean Home Economics Association", "General Affairs Committee Chair"], ["Korean Home Economics Education Association", "Executive Director for General Affairs"], ["Korea National University of Education", "Assistant Professor"], ["Gyeonggi-do Icheon Office of Education", "Education Supervisor"], ["Six secondary schools in Gyeonggi-do", "Teacher (Master Teacher)"]
    ],
    education: [
      ["Korea National University of Education", "Ph.D. in Education", "Republic of Korea"], ["Korea National University of Education", "M.Ed.", "Republic of Korea"], ["Korea National University of Education", "B.Ed.", "Republic of Korea"]
    ],
    awards: [
      ["Outstanding Poster Presentation Award", "Korean Home Economics Education Association"], ["Commendation", "President, Korea Consumer Agency"], ["Outstanding Poster Presentation Award", "Korean Home Economics Association and partner organization"], ["Outstanding Master's Thesis Award", "Korean Home Economics Association"], ["Outstanding Master's Thesis Award", "Korean Home Economics Association"], ["Poster on generative AI applications and responses in an aging society", "Korean Home Economics Association"], ["Outstanding Thesis Award", "Korean Home Economics Association"], ["Meritorious Service Award", "Korean Home Economics Association"], ["Outstanding Paper Presentation Award (Poster)", "Korean Home Economics Association"], ["Silver Award, 2014 Consumer Education Content Competition", "Korean Society of Consumer Policy and Education"], ["Grand Prize, Safety Education Idea Competition", "Minister of Education"], ["Grand Prize, Multicultural Education Field Study Report Competition", "Kyonggi University"], ["Commendation for Outstanding Research by a National Subject Education Association", "Deputy Prime Minister and Minister of Education and Human Resources Development"], ["Outstanding Paper Presentation Award", "Korean Home Economics Association"], ["Outstanding Dissertation Award", "Graduate School, KNUE"], ["Commendation", "Deputy Prime Minister and Minister of Education and Human Resources Development"]
    ],
    books: [
      ["Designing Home Economics Lessons: From Planning and Demonstration to Reflection", "Kyomunsa"], ["Food Safety and Health", "Samyang Media"], ["Consumer Life and Economics", "Visang Education"], ["High School Technology and Home Economics", "Samyang Media"], ["Rewriting Home Economics Education", "Kyomunsa"], ["High School Food Safety and Health", "Samyang Media"], ["High School Technology and Home Economics", "Samyang Media"], ["Middle School Technology and Home Economics 1 & 2", "Samyang Media"], ["Home Economics Teaching Methods and Teaching Demonstrations for Joyful Learning", "Kyomunsa"], ["High School Technology and Home Economics", "Samyang Media"], ["Middle School Technology and Home Economics 1 & 2", "Samyang Media"], ["Middle School Career and Vocation", "Samyang Media"], ["Home Economics Education", "Kyomunsa"], ["Warm Parenting Preparation Education in the Classroom", "Kyomunsa"]
    ]
  };

  const savedLanguage = (() => {
    try { return localStorage.getItem("site-language"); } catch { return null; }
  })();
  let lang = savedLanguage === "en" ? "en" : "ko";
  let visibleCount = 10;
  let activeTimeline = "career";
  const t = (key, ...args) => {
    const value = translations[lang][key];
    return typeof value === "function" ? value(...args) : value;
  };

  const header = by("[data-header]");
  const nav = by("[data-nav]");
  const menuButton = by("[data-menu-button]");
  const progressBar = by("[data-scroll-progress]");
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("menu-open", !open);
    nav.classList.toggle("open", !open);
  });
  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    menuButton.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
    nav.classList.remove("open");
  });
  const sectionLinks = [...document.querySelectorAll('.site-nav > a[href^="#"]')];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach((link) => link.toggleAttribute("aria-current", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-18% 0px -68%", threshold: [0, .25, .6] });
    sectionLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) sectionObserver.observe(section);
    });
  }

  const publicationList = by("[data-publication-list]");
  const searchInput = by("[data-search]");
  const yearSelect = by("[data-year]");
  const resultCount = by("[data-result-count]");
  const moreButton = by("[data-more]");
  const emptyState = by("[data-empty]");

  const renderYearOptions = () => {
    const selected = yearSelect.value || "all";
    yearSelect.replaceChildren();
    const all = make("option", "", t("allYears"));
    all.value = "all";
    yearSelect.append(all);
    [...new Set(data.publications.map((item) => item.year))].sort((a, b) => b - a).forEach((year) => {
      const option = make("option", "", t("yearOption", year));
      option.value = String(year);
      yearSelect.append(option);
    });
    yearSelect.value = selected;
  };

  const linkFor = (href, label, variant = "secondary") => {
    const anchor = make("a", `publication-link ${variant}`, `${label} ↗`);
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    return anchor;
  };

  const abstractBlock = (heading, text) => {
    const block = make("section", "abstract-block");
    block.append(make("h4", "", heading));
    block.append(make("p", "", text));
    return block;
  };

  const publicationNode = (item) => {
    const article = make("article", "publication-item");
    article.append(make("div", "publication-year", String(item.year)));
    const body = make("div", "publication-body");
    const primaryTitle = lang === "ko" ? item.title : item.titleEn;
    const secondaryTitle = lang === "ko" ? item.titleEn : item.title;
    body.append(make("h3", "publication-title", primaryTitle));
    body.append(make("p", "publication-title-secondary", secondaryTitle));
    const issue = item.issue ? `, ${item.issue}` : "";
    const pages = item.pages ? `, ${item.pages}` : "";
    body.append(make("p", "publication-meta", `${item.authors} · ${item.journal}${issue}${pages}`));

    const details = make("details", "publication-details");
    details.append(make("summary", "", t("abstractToggle")));
    const abstractContent = make("div", "abstract-content");
    const blocks = [];
    if (lang === "en") {
      if (item.abstractEn) blocks.push(abstractBlock(t("abstractEn"), item.abstractEn));
      if (item.abstractKo) blocks.push(abstractBlock(t("abstractKo"), item.abstractKo));
    } else {
      if (item.abstractKo) blocks.push(abstractBlock(t("abstractKo"), item.abstractKo));
      if (item.abstractEn) blocks.push(abstractBlock(t("abstractEn"), item.abstractEn));
    }
    abstractContent.append(...blocks);
    if (item.citation) {
      const citation = make("section", "citation-block");
      citation.append(make("h4", "", t("citation")));
      citation.append(make("p", "", item.citation));
      abstractContent.append(citation);
    }
    details.append(abstractContent);
    body.append(details);
    article.append(body);

    const links = make("div", "publication-links");
    if (item.sourceUrl) links.append(linkFor(item.sourceUrl, t("fullText"), "primary"));
    if (item.doi) links.append(linkFor(`https://doi.org/${item.doi}`, "DOI", item.sourceUrl ? "secondary" : "primary"));
    article.append(links);
    return article;
  };

  const currentPublications = () => {
    const term = searchInput.value.trim().toLocaleLowerCase(lang === "ko" ? "ko-KR" : "en-US");
    const selectedYear = yearSelect.value;
    return data.publications.filter((item) => {
      const haystack = `${item.title} ${item.titleEn} ${item.authors} ${item.journal}`.toLocaleLowerCase();
      return (selectedYear === "all" || String(item.year) === selectedYear) && (!term || haystack.includes(term));
    });
  };

  const renderPublications = () => {
    const filtered = currentPublications();
    publicationList.replaceChildren(...filtered.slice(0, visibleCount).map(publicationNode));
    resultCount.textContent = t("paperCount", filtered.length);
    emptyState.hidden = filtered.length !== 0;
    moreButton.hidden = visibleCount >= filtered.length || filtered.length === 0;
  };
  const resetPublications = () => { visibleCount = 10; renderPublications(); };
  searchInput.addEventListener("input", resetPublications);
  yearSelect.addEventListener("change", resetPublications);
  moreButton.addEventListener("click", () => { visibleCount += 10; renderPublications(); });

  const thesisList = by("[data-thesis-list]");
  const renderTheses = () => {
    thesisList.replaceChildren(...data.theses.map((item) => {
      const article = make("article", "thesis-item");
      const label = make("div", "thesis-label");
      label.append(make("span", "", lang === "ko" ? item.degreeKo : item.degreeEn));
      label.append(make("strong", "", String(item.year)));
      article.append(label);
      const body = make("div", "thesis-body");
      body.append(make("h4", "", lang === "ko" ? item.title : item.titleEn));
      body.append(make("p", "thesis-title-secondary", lang === "ko" ? item.titleEn : item.title));
      body.append(make("p", "thesis-institution", lang === "ko" ? item.institutionKo : item.institutionEn));
      article.append(body);
      article.append(linkFor(item.url, t("riss"), "primary"));
      return article;
    }));
  };

  const projectList = by("[data-project-list]");
  const renderProjects = () => {
    projectList.replaceChildren(...data.projects.map((item, index) => {
      const article = make("article", "project-item");
      const en = dynamicEn.projects[index];
      article.append(make("div", "project-role", lang === "en" ? en[0] : item.role));
      article.append(make("h3", "", lang === "en" ? en[1] : item.title));
      article.append(make("div", "project-year", item.year === "연도 미표기" ? t("missingYear") : item.year));
      return article;
    }));
  };

  const timeline = by("[data-timeline]");
  const renderTimeline = () => {
    const items = data[activeTimeline];
    timeline.replaceChildren(...items.map((item, index) => {
      const article = make("article", "timeline-item");
      article.append(make("div", "timeline-date", lang === "en" ? item.date.replace("현재", "Present") : item.date));
      const body = make("div");
      const en = dynamicEn[activeTimeline][index];
      body.append(make("h3", "", lang === "en" ? en[0] : item.organization));
      const note = lang === "en" ? en[2] : item.note;
      if (note) body.append(make("p", "", note));
      article.append(body);
      article.append(make("div", "timeline-role", lang === "en" ? en[1] : item.role));
      return article;
    }));
  };
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTimeline = button.dataset.tab;
      document.querySelectorAll("[data-tab]").forEach((tab) => tab.setAttribute("aria-selected", String(tab === button)));
      renderTimeline();
    });
  });

  const compactTargets = { awards: "[data-award-list]", books: "[data-book-list]" };
  const renderCompactList = (collection, expanded = false) => {
    const target = by(compactTargets[collection]);
    const items = data[collection];
    const initial = 6;
    const rows = (expanded ? items : items.slice(0, initial)).map((item, index) => {
      const row = make("article", "compact-item");
      row.append(make("div", "compact-date", item.date));
      const body = make("div");
      const en = dynamicEn[collection][index];
      body.append(make("h4", "", lang === "en" ? en[0] : item.title));
      body.append(make("p", "", lang === "en" ? en[1] : item.organization));
      row.append(body);
      return row;
    });
    target.replaceChildren(...rows);
    if (items.length > initial) {
      const toggle = make("button", "list-toggle", expanded ? t("showLess") : t("showAll", items.length));
      toggle.type = "button";
      toggle.addEventListener("click", () => renderCompactList(collection, !expanded));
      target.append(toggle);
    }
  };

  const applyLanguage = () => {
    document.documentElement.lang = lang;
    document.title = lang === "ko" ? "박미정 | 가정과교육 연구자" : "Mi Jeong Park | Home Economics Education Researcher";
    document.querySelector('meta[name="description"]').content = lang === "ko" ? "박미정 한국교원대학교 가정교육과 교수의 연구, 논문, 프로젝트, 경력과 저서를 소개하는 연구 홈페이지입니다." : "Research profile of Mi Jeong Park, Professor of Home Economics Education at Korea National University of Education.";
    document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => { node.alt = t(node.dataset.i18nAlt); });
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-scholar]").forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set("hl", lang);
      link.href = url.toString();
    });
    renderYearOptions();
    renderPublications();
    renderTheses();
    renderProjects();
    renderTimeline();
    renderCompactList("awards");
    renderCompactList("books");
  };
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      lang = button.dataset.language;
      try { localStorage.setItem("site-language", lang); } catch { /* Continue without persistence. */ }
      applyLanguage();
    });
  });
  applyLanguage();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.09 });
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  }
  by("[data-year-now]").textContent = new Date().getFullYear();
})();
