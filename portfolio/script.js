(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const ICON = (n) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`;
  // Devicon icons that are black-on-transparent need to be inverted on dark bg
  const NEEDS_LIGHT = ["nextjs", "github"];

  /* ---------- Placeholder for empty/broken images ---------- */
  function placeholder(label) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#2a2f7a'/><stop offset='1' stop-color='#14183c'/></linearGradient></defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <text x='50%' y='50%' fill='#9aa0c8' font-family='sans-serif' font-size='26' text-anchor='middle'>${label}</text>
    </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  /* ---------- Image store (config default + browser override) ---------- */
  const KEY = "portfolio_images_v1";
  let overrides = {};
  try { overrides = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(overrides)); }
    catch (e) { alert("Image is too large to save in the browser. Use a smaller image, or put it in assets/ and set the path in config.js."); }
  };

  function defaultFor(key) {
    if (key === "hero") return S.images.hero;
    if (key === "testimonialAvatar") return S.images.testimonialAvatar;
    if (key.startsWith("project")) return S.projects[+key.replace("project", "")].image;
    return "";
  }
  function labelFor(key) {
    if (key === "hero") return "Your photo";
    if (key === "testimonialAvatar") return "Avatar";
    return "Project image";
  }
  function setImg(img, key) {
    const src = overrides[key] || defaultFor(key);
    img.onerror = () => { img.onerror = null; img.src = placeholder(labelFor(key)); };
    img.src = src || placeholder(labelFor(key));
  }

  /* ---------- Render content ---------- */
  document.title = `${S.name} — Software Developer`;
  $("brand").textContent = S.brand;
  $("badge").textContent = S.badge;
  $("name").textContent = S.name;
  $("headline").textContent = S.headline;
  $("intro").textContent = S.intro;
  $("cvBtn").href = S.cvFile;
  $("aboutTitle").textContent = S.about.title;
  $("aboutText").textContent = S.about.text;
  $("ctaTitle").textContent = S.cta.title;
  $("ctaText").textContent = S.cta.text;
  $("mailBtn").href = "mailto:" + S.email;
  $("tQuote").textContent = S.testimonial.quote;
  $("tAuthor").textContent = S.testimonial.author;
  $("tRole").textContent = S.testimonial.role;
  $("emailTxt").textContent = S.email;
  $("phoneTxt").textContent = S.phone;
  $("year").textContent = new Date().getFullYear();
  $("footName").textContent = S.name;
  $("footName2").textContent = S.name;

  $("codeBlock").innerHTML =
    `<span class="k">const</span> developer = {\n  name: <span class="s">"${S.name}"</span>,\n  skills: [<span class="s">"HTML"</span>, <span class="s">"CSS"</span>,\n    <span class="s">"JavaScript"</span>, <span class="s">"React"</span>],\n  passion: <span class="s">"Building things\n    for the web"</span>\n};`;

  $("techRow").innerHTML = S.tech
    .map((t) => `<img src="${ICON(t)}" alt="${t}" title="${t}" />`).join("");

  const ICONS = {
    calendar: "📅", code: "&lt;/&gt;", smile: "☺", trophy: "🏆"
  };
  $("stats").innerHTML = S.about.stats
    .map((s) => `<div class="stat"><div class="stat-ic">${ICONS[s.icon] || "★"}</div>
      <div><strong>${s.value}</strong><span>${s.label}</span></div></div>`).join("");

  $("skillGrid").innerHTML = S.skills
    .map((k) => `<div><div class="skill-top">
        <img src="${ICON(k.icon)}" alt="" ${NEEDS_LIGHT.includes(k.icon) ? 'style="filter:invert(1)"' : ""}/>
        <span>${k.name}</span><span class="pct">${k.level}%</span></div>
      <div class="bar"><i data-w="${k.level}"></i></div></div>`).join("");

  $("cards").innerHTML = S.projects
    .map((p, i) => `<article class="card">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <div class="editable" data-key="project${i}"><img alt="${p.title}" /></div>
        <div class="card-body"><h5>${p.title}</h5><p>${p.desc}</p>
        <a class="view" href="${p.link}" target="_blank" rel="noopener">View Project ↗</a></div>
      </article>`).join("");
  $("pager").innerHTML = S.projects.map(() => "<i></i>").join("");

  const social = {
    github: ["#fff", "M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.200-1.2 3.200-1.2.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 23.500 12 11.500 11.500 0 0 0 12 .5z"],
    linkedin: ["#3b82f6", "M20.4 20.5h-3.6v-5.6c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.300V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.500H3.500V9h3.600v11.500z"],
    twitter: ["#38a6f5", "M23 4.600a9 9 0 0 1-2.600.7 4.500 4.500 0 0 0 2-2.500 9 9 0 0 1-2.900 1.100 4.500 4.500 0 0 0-7.700 4.100A12.800 12.800 0 0 1 2.500 3.300a4.500 4.500 0 0 0 1.400 6 4.500 4.500 0 0 1-2-.6v.1a4.500 4.500 0 0 0 3.600 4.400 4.500 4.500 0 0 1-2 .1 4.500 4.500 0 0 0 4.200 3.100A9 9 0 0 1 1 18.300a12.800 12.800 0 0 0 6.900 2c8.300 0 12.800-6.900 12.800-12.800v-.6A9 9 0 0 0 23 4.600z"],
    instagram: ["#e1306c", "M12 2.200c3.200 0 3.600 0 4.800.1 3.300.1 4.800 1.700 4.900 4.900.1 1.300.1 1.600.1 4.800s0 3.600-.1 4.800c-.1 3.200-1.700 4.800-4.900 4.900-1.300.1-1.600.1-4.800.1s-3.600 0-4.800-.1c-3.300-.1-4.800-1.700-4.900-4.900C2.200 15.600 2.200 15.200 2.200 12s0-3.600.1-4.800C2.400 3.900 4 2.400 7.200 2.300 8.400 2.200 8.800 2.200 12 2.200zM12 0C8.700 0 8.300 0 7.100.1 2.700.3.300 2.700.1 7.100 0 8.300 0 8.700 0 12s0 3.700.1 4.900c.2 4.400 2.600 6.800 7 7C8.300 24 8.700 24 12 24s3.700 0 4.900-.1c4.400-.2 6.800-2.600 7-7 .1-1.200.1-1.600.1-4.900s0-3.700-.1-4.900c-.2-4.400-2.600-6.800-7-7C15.700 0 15.300 0 12 0zm0 5.800a6.200 6.200 0 1 0 0 12.400 6.200 6.200 0 0 0 0-12.400zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.400-11.800a1.400 1.400 0 1 0 0 2.900 1.400 1.400 0 0 0 0-2.900z"]
  };
  $("socials").innerHTML = Object.keys(social)
    .filter((k) => S.social[k])
    .map((k) => `<a href="${S.social[k]}" target="_blank" rel="noopener" aria-label="${k}">
      <svg viewBox="0 0 24 24" fill="${social[k][0]}"><path d="${social[k][1]}"/></svg></a>`).join("");

  document.querySelector(".hero-visual").classList.add("shape-" + (S.heroShape || "circle"));

  /* ---------- Images ---------- */
  document.querySelectorAll(".editable").forEach((el) => setImg(el.querySelector("img"), el.dataset.key));

  /* ---------- Nav behaviour ---------- */
  $("burger").onclick = () => $("navLinks").classList.toggle("open");
  document.querySelectorAll("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => $("navLinks").classList.remove("open")));
  const links = [...document.querySelectorAll("#navLinks a")];
  const secs = links.map((a) => document.querySelector(a.getAttribute("href")));
  window.addEventListener("scroll", () => {
    const y = window.scrollY + 120;
    let cur = 0;
    secs.forEach((s, i) => { if (s && s.offsetTop <= y) cur = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === cur));
  });

  /* ---------- Skill bars animate on view ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll("i[data-w]").forEach((b) => (b.style.width = b.dataset.w + "%"));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  io.observe($("skillGrid"));

  /* ---------- In-browser image editor ---------- */
  let editing = false, activeKey = null;
  $("editToggle").onclick = () => {
    editing = !editing;
    document.body.classList.toggle("editing", editing);
    $("editToggle").textContent = editing ? "✓ Done editing" : "✎ Edit images";
  };
  document.querySelectorAll(".editable").forEach((el) =>
    el.addEventListener("click", (e) => {
      if (!editing) return;
      e.preventDefault();
      activeKey = el.dataset.key;
      $("urlInput").value = "";
      $("fileInput").value = "";
      $("modal").hidden = false;
    }));

  const apply = (src) => {
    overrides[activeKey] = src;
    save();
    document.querySelectorAll(`.editable[data-key="${activeKey}"] img`).forEach((i) => setImg(i, activeKey));
    $("modal").hidden = true;
  };

  // Downscale uploads so they fit in localStorage
  $("fileInput").onchange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 1400, r = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = img.width * r; c.height = img.height * r;
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        const type = f.type === "image/png" ? "image/png" : "image/jpeg";
        apply(c.toDataURL(type, 0.88));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(f);
  };
  $("applyUrl").onclick = () => { const u = $("urlInput").value.trim(); if (u) apply(u); };
  $("resetImg").onclick = () => { delete overrides[activeKey]; save(); apply(""); delete overrides[activeKey]; save(); };
  $("closeModal").onclick = () => ($("modal").hidden = true);
  $("modal").onclick = (e) => { if (e.target === $("modal")) $("modal").hidden = true; };
})();