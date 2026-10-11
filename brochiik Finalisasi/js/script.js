/* =========================================================
   Brochiik — script.js
   Handles: mobile nav, menu data render + filter,
   stat counters, testimonial slider, newsletter form,
   back-to-top button.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nav.classList.remove("is-open");
  });

  /* ---------- Active nav link (multi-page) ---------- */
  (function highlightActiveNav() {
    let page = window.location.pathname.split("/").pop();
    if (!page) page = "index.html";
    document.querySelectorAll(".nav__links a[data-page]").forEach((a) => {
      if (a.dataset.page === page) a.classList.add("is-active");
    });
  })();

  /* ---------- Menu data ---------- */
  const MENU = [
    { name: "Hemat 1", cat: "hemat", price: "Rp 16.000", desc: "Ayam geprek paha bawah + nasi + sambal geprek + es teh", emoji: "🍗", color: "#E4231C", image: "assets/menu-food/hemat1.jpg" },
    { name: "Hemat 2", cat: "hemat", price: "Rp 20.000", desc: "Ayam geprek big cut + nasi + sambal geprek + es teh", emoji: "🍗", color: "#D6362A", image: "assets/menu-food/hemat2.jpg" },
    { name: "Hemat 3", cat: "hemat", price: "Rp 15.000", desc: "Ayam geprek paha bawah + nasi + sambal geprek", emoji: "🍗", color: "#F2A63D", image: "assets/menu-food/hemat3.jpg" },
    { name: "Hemat 4", cat: "hemat", price: "Rp 18.000", desc: "Ayam geprek big cut + nasi + sambal geprek", emoji: "🍗", color: "#B71C17", image: "assets/menu-food/hemat4.jpg" },
    { name: "Indomie Geprek 1", cat: "indomie", price: "Rp 19.000", desc: "Ayam big cut + indomie + es teh", emoji: "🍗", color: "#E4231C", image: "assets/menu-food/indomieA.jpg" },
    { name: "Indomie Geprek 2", cat: "indomie", price: "Rp 16.000", desc: "Ayam paha bawah + indomie + es teh", emoji: "🍗", color: "#D6362A", image: "assets/menu-food/indomieB.jpg" },
    { name: "Indomie Jumbo Geprek 3", cat: "indomie", price: "Rp 21.000", desc: "Ayam big cut + indomie jumbo + es teh", emoji: "🍗", color: "#F2A63D", image: "assets/menu-food/indomieC.jpg" },
    { name: "Indomie Jumbo Geprek 4", cat: "indomie", price: "Rp 19.000", desc: "Ayam paha bawah + indomie jumbo + es teh", emoji: "🍗", color: "#B71C17", image: "assets/menu-food/indomieD.jpg" },
    { name: "Indomie Geprek 5", cat: "indomie", price: "Rp 23.000", desc: "Ayam big cut + indomie + nasi + es teh", emoji: "🍗", color: "#E4231C", image: "assets/menu-food/indomieA.jpg" },
    { name: "Indomie Geprek 6", cat: "indomie", price: "Rp 25.000", desc: "Ayam big cut + indomie jumbo + nasi + es teh", emoji: "🍗", color: "#D6362A", image: "assets/menu-food/indomieB.jpg" },
    { name: "Indomie Geprek Barbeque", cat: "indomie", price: "Rp 21.000", desc: "Ayam big cut + indomie + sambal barbeque + es teh", emoji: "🍗", color: "#B71C17", image: "assets/menu-food/special_bbq.jpg" },
    { name: "Indomie Geprek Keju", cat: "indomie", price: "Rp 21.000", desc: "Ayam big cut + indomie + sambal keju + es teh", emoji: "🍗", color: "#F2A63D", image: "assets/menu-food/special_keju.jpg" },
    { name: "Crischick 1", cat: "crispy", price: "Rp 15.000", desc: "Ayam geprek paha bawah + nasi + saus saset + es teh", emoji: "🍗", color: "#E4231C", image: "assets/menu-food/cr1.jpg" },
    { name: "Crischick 2", cat: "crispy", price: "Rp 18.000", desc: "Ayam geprek big cut + nasi + saus saset + es teh", emoji: "🍗", color: "#D6362A", image: "assets/menu-food/cr2.jpg" },
    { name: "Crischick 3", cat: "crispy", price: "Rp 14.000", desc: "Ayam geprek paha bawah + nasi + saus saset", emoji: "🍗", color: "#F2A63D", image: "assets/menu-food/cr3.jpg" },
    { name: "Crischick 4", cat: "crispy", price: "Rp 17.000", desc: "Ayam geprek big cut + nasi + saus saset", emoji: "🍗", color: "#B71C17", image: "assets/menu-food/cr4.jpg" },
    { name: "Geprek 1 Big Cut", cat: "ala", price: "Rp 14.000", desc: "Paha atas / dada / sayap", emoji: "🍗", color: "#E4231C", image: "assets/menu-food/geprek_big.jpg" },
    { name: "Geprek 2", cat: "ala", price: "Rp 11.000", desc: "Paha bawah", emoji: "🍗", color: "#D6362A", image: "assets/menu-food/geprek_paha.jpg" },
    { name: "Crispy 1 Big Cut", cat: "ala", price: "Rp 14.000", desc: "Paha atas / dada / sayap", emoji: "🍗", color: "#F2A63D", image: "assets/menu-food/crispy_big.jpg" },
    { name: "Crispy 2", cat: "ala", price: "Rp 10.000", desc: "Paha bawah", emoji: "🍗", color: "#B71C17", image: "assets/menu-food/crispy_paha.jpg" },
    { name: "Single Geprek BBQ", cat: "ala", price: "Rp 16.000", desc: "Ayam dengan saus barbeque", emoji: "🍗", color: "#E4231C", image: "assets/menu-food/single_bbq.jpg" },
    { name: "Single Geprek Keju", cat: "ala", price: "Rp 16.000", desc: "Ayam dengan saus keju", emoji: "🍗", color: "#D6362A", image: "assets/menu-food/single_keju.jpg" },
    { name: "Indomie", cat: "ala", price: "Rp 6.000", desc: "Indomie", emoji: "🍜", color: "#F2A63D", image: "assets/menu-food/indomie_plain.jpg" },
    { name: "Indomie Jumbo", cat: "ala", price: "Rp 8.000", desc: "Indomie jumbo", emoji: "🍜", color: "#B71C17", image: "assets/menu-food/indomie_jumbo.jpg" },
    { name: "Nasi Putih", cat: "ala", price: "Rp 5.000", desc: "Nasi putih", emoji: "🍚", color: "#E4231C", image: "assets/menu-food/nasi_putih.jpg" },
    { name: "Es Teh", cat: "ala", price: "Rp 5.000", desc: "Es teh", emoji: "🧋", color: "#D6362A", image: "assets/menu-food/es_teh.jpg" },
    { name: "Air Botol", cat: "ala", price: "Rp 5.000", desc: "Air botol", emoji: "💧", color: "#F2A63D", image: "assets/menu-food/air_botol.jpg" },
    { name: "Geprek Spesial Keju", cat: "spesial", price: "Rp 21.000", desc: "Ayam geprek spesial keju", emoji: "🍗", color: "#F2A63D", image: "assets/menu-food/special_keju.jpg" },
    { name: "Geprek Spesial Barbeque", cat: "spesial", price: "Rp 21.000", desc: "Ayam geprek spesial barbeque", emoji: "🍗", color: "#B71C17", image: "assets/menu-food/special_bbq.jpg" }
  ];

  const menuGrid = document.getElementById("menuGrid");
  const tabs = document.querySelectorAll("#menuTabs .tab");

  function renderMenu(filter) {
    if (!menuGrid) return;
    const items = filter === "all" ? MENU : MENU.filter((m) => m.cat === filter);
    menuGrid.innerHTML = items
      .map((m) => `
      <article class="menu__card">
        <div class="menu__card__img menu__card__img--food" style="background:${m.color}1a;">
          <img src="${m.image}" alt="${m.name}" loading="lazy">
        </div>
        <div class="menu__card__body">
          <span class="tag">${labelFor(m.cat)}</span>
          <h3>${m.name}</h3>
          <p class="menu__desc">${m.desc}</p>
          <span class="menu__price">${m.price}</span>
          <button class="btn btn--primary add-cart-btn" type="button" data-name="${m.name}" data-price="${Number(m.price.replace(/[^0-9]/g, ""))}" data-desc="${m.desc}" data-image="${m.image}">+ Tambah ke Keranjang</button>
        </div>
      </article>`).join("");
  }

  function labelFor(cat) {
    const map = { hemat: "Paket Hemat", indomie: "Per Indomiean", crispy: "Paket Crispy Chicken", ala: "Ala Carte", spesial: "Geprek Spesial" };
    return map[cat] || cat;
  }

  if (menuGrid) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        renderMenu(tab.dataset.filter);
      });
    });
    renderMenu("all");
  }

  /* ---------- Keranjang: Create, Read, Update, Delete (CRUD) ---------- */
  const CART_KEY = "brochiick_cart_v1";
  function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
    catch (e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }
  function updateCartCount() {
    const count = readCart().reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll("#cartCount").forEach(el => el.textContent = count);
  }
  document.addEventListener("click", function (e) {
    const add = e.target.closest(".add-cart-btn");
    if (!add) return;
    const cart = readCart();
    const name = add.dataset.name;
    const existing = cart.find(item => item.name === name);
    if (existing) existing.qty += 1;
    else cart.push({ name, price: Number(add.dataset.price), desc: add.dataset.desc, image: add.dataset.image, qty: 1 });
    saveCart(cart);
    const oldText = add.textContent;
    add.textContent = "✓ Ditambahkan";
    setTimeout(() => { add.textContent = oldText; }, 900);
  });

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartEmpty = document.getElementById("cartEmpty");
  function formatRupiah(value) { return "Rp " + Number(value).toLocaleString("id-ID"); }
  function renderCart() {
    if (!cartItems) return;
    const cart = readCart();
    cartEmpty.hidden = cart.length > 0;
    cartItems.innerHTML = cart.map((item, index) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item__image">
        <div class="cart-item__info"><h3>${item.name}</h3><p>${item.desc || ""}</p><strong>${formatRupiah(item.price)}</strong></div>
        <div class="cart-item__actions">
          <div class="quantity-control" aria-label="Jumlah ${item.name}">
            <button type="button" data-cart-action="minus" data-index="${index}" aria-label="Kurangi ${item.name}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-cart-action="plus" data-index="${index}" aria-label="Tambah ${item.name}">+</button>
          </div>
          <button type="button" class="cart-remove" data-cart-action="remove" data-index="${index}">Hapus</button>
        </div>
      </article>`).join("");
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (cartTotal) cartTotal.textContent = formatRupiah(total);
    updateCartCount();
  }
  document.addEventListener("click", function (e) {
    const button = e.target.closest("[data-cart-action]");
    if (!button) return;
    const cart = readCart();
    const index = Number(button.dataset.index);
    const action = button.dataset.cartAction;
    if (!cart[index]) return;
    if (action === "plus") cart[index].qty += 1;
    if (action === "minus") cart[index].qty -= 1;
    if (action === "remove" || cart[index].qty <= 0) cart.splice(index, 1);
    saveCart(cart);
    renderCart();
  });
  updateCartCount();
  renderCart();

  /* ---------- Stat counters (animate once in view) ---------- */
  const statNums = document.querySelectorAll(".stat__num");
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    statNums.forEach((el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  const statsSection = document.getElementById("stats");
  if ("IntersectionObserver" in window && statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(statsSection);
  } else {
    animateStats();
  }

  /* ---------- Testimonial slider ---------- */
  const track = document.getElementById("testiTrack");
  const cards = track ? Array.from(track.children) : [];
  const dotsWrap = document.getElementById("testiDots");
  const prevBtn = document.getElementById("testiPrev");
  const nextBtn = document.getElementById("testiNext");
  let current = 0;
  let autoTimer;

  if (cards.length) {
    cards.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function goTo(index) {
      cards[current].classList.remove("is-active");
      dotsWrap.children[current].classList.remove("is-active");
      current = (index + cards.length) % cards.length;
      cards[current].classList.add("is-active");
      dotsWrap.children[current].classList.add("is-active");
    }

    function startAuto() {
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }
    function stopAuto() {
      clearInterval(autoTimer);
    }

    prevBtn.addEventListener("click", () => {
      goTo(current - 1);
      stopAuto();
      startAuto();
    });
    nextBtn.addEventListener("click", () => {
      goTo(current + 1);
      stopAuto();
      startAuto();
    });

    startAuto();
  }

  /* ---------- Newsletter form (front-end only) ---------- */
  const form = document.getElementById("newsletterForm");
  const formNote = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formNote.textContent = "Terima kasih! Kamu akan menerima kabar promo terbaru.";
      form.reset();
    });
  }

  /* ---------- Lokasi: outlet list <-> Google Maps embed ---------- */
  const lokasiCards = document.querySelectorAll(".lokasi__card");
  const lokasiMapFrame = document.getElementById("lokasiMapFrame");

  if (lokasiCards.length && lokasiMapFrame) {
    lokasiCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // let "buka di maps" link work normally
        lokasiCards.forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
        const query = card.dataset.mapQuery;
        if (query) {
          lokasiMapFrame.src = "https://www.google.com/maps?q=" + query + "&output=embed";
        }
        card.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  /* ---------- Back to top ---------- */
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("is-visible", window.scrollY > 500);
  });
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
