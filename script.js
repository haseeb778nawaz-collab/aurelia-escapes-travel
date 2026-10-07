/* Aurelia Escapes: vanilla JS */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

  /* ---------- Mock data ---------- */
  const destinations = [
    { name: 'Santorini', region: 'Greece', price: 2400, img: '1570077188670-e3a8d69ac5ff', alt: 'White-domed churches above the Aegean in Santorini', text: 'Whitewashed cliffs, caldera sunsets and slow lunches by the sea.' },
    { name: 'Maldives', region: 'Indian Ocean', price: 3800, img: '1514282401047-d79a71a590e8', alt: 'Overwater villas on a turquoise Maldivian lagoon', text: 'Private islands, house reefs and villas over glass-clear water.' },
    { name: 'Swiss Alps', region: 'Switzerland', price: 3100, img: '1506905925346-21bda4d32df4', alt: 'Snow-covered peaks of the Swiss Alps at sunrise', text: 'Chalet stays, alpine trails and quiet lakeside villages.' },
    { name: 'Bali', region: 'Indonesia', price: 1900, img: '1537996194471-e657df975ab4', alt: 'Lush rice terraces and a temple gate in Bali', text: 'Jungle villas, rice terraces and some of Asia\'s best spas.' },
    { name: 'Dubai', region: 'United Arab Emirates', price: 2700, img: '1512453979798-5ea266f8880c', alt: 'Dubai skyline glowing at dusk', text: 'Skyline suites, desert dawns and remarkable dining.' },
    { name: 'Amalfi Coast', region: 'Italy', price: 2900, img: '1533105079780-92b9be482077', alt: 'Colourful hillside town on the Amalfi Coast', text: 'Lemon groves, cliffside hotels and long boat days.' }
  ];
  const resorts = [
    { name: 'Aman Blue Reef', loc: 'Baa Atoll, Maldives', rating: 4.9, price: 1250, img: '1571896349842-33c89424de2d', alt: 'Resort pool edged with palms beside the ocean', am: ['Private pool', 'Spa', 'Dive centre'] },
    { name: 'Casa Caldera', loc: 'Oia, Santorini', rating: 4.8, price: 780, img: '1499793983690-e29da59ef1c2', alt: 'Villa infinity pool with sea view', am: ['Infinity pool', 'Sunset terrace', 'Chef\'s table'] },
    { name: 'Hôtel des Cimes', loc: 'Zermatt, Switzerland', rating: 4.9, price: 940, img: '1566073771259-6a8506099945', alt: 'Elegant hotel exterior with mountain backdrop', am: ['Alpine spa', 'Ski-in', 'Fireside lounge'] }
  ];
  const experiences = [
    { name: 'Private yacht cruises', text: 'Sail hidden coves with your own crew.', img: '1520250497591-112f2f40a3f4', alt: 'Luxury yacht anchored in calm blue water' },
    { name: 'Mountain adventures', text: 'Guided hikes and heli-picnics.', img: '1493246507139-91e8fad9978e', alt: 'Hiker on a mountain ridge above the clouds' },
    { name: 'Desert safaris', text: 'Dunes at golden hour, dinner under stars.', img: '1509316975850-ff9c5deb0cd9', alt: 'Sand dunes in warm evening light' },
    { name: 'Culinary experiences', text: 'Market mornings and chef-led tables.', img: '1414235077428-338989a2e8c0', alt: 'Plated fine-dining dish being served' },
    { name: 'Wellness retreats', text: 'Restorative spa and yoga programs.', img: '1540555700478-4be289fbecef', alt: 'Calm spa setting with stones and candles' },
    { name: 'Cultural tours', text: 'Private access with local historians.', img: '1502602898657-3e91760cbb34', alt: 'Historic European street at golden hour' }
  ];
  const gallery = [
    ['1507525428034-b723cf961d3e', 'Tropical beach with clear water'], ['1469474968028-56623f02e42e', 'Sunlit mountain valley'],
    ['1476514525535-07fb3b4ae5f1', 'Mountain lake at dawn'], ['1544551763-46a013bb70d5', 'Diver exploring a coral reef'],
    ['1499856871958-5b9627545d1a', 'Paris rooftops at sunset'], ['1582719508461-905c673771fd', 'Refined hotel suite interior']
  ].map(([id, alt]) => ({ id, alt }));
  const reviews = [
    ['Elena Rossi', 'Italy', 5, 'Every detail was handled before we even asked. The Santorini villa felt like it was made for us.', 'rossi'],
    ['James Whitaker', 'United Kingdom', 5, 'Our Maldives honeymoon ran flawlessly, and the planner was reachable at 2am when a flight changed.', 'whitaker'],
    ['Amira Haddad', 'UAE', 5, 'The desert dinner was the best evening of our year. Thoughtful, private, unhurried.', 'haddad'],
    ['Lukas Meier', 'Germany', 4, 'Great alpine itinerary with just enough free time. We will book again next winter.', 'meier'],
    ['Priya Nair', 'India', 5, 'They found small Bali hotels we would never have discovered ourselves.', 'nair']
  ];
  const packages = [
    { name: 'Essential Escape', n: 4, from: 1800, items: ['Boutique stay', 'Airport transfer', 'Breakfast'] },
    { name: 'Signature Journey', n: 7, from: 4200, hi: true, items: ['Luxury resort', 'Private transfers', 'Daily breakfast', 'One curated experience'] },
    { name: 'Ultimate Escape', n: 10, from: 9800, items: ['Premium suite', 'Private chauffeur', 'Multiple experiences', '24/7 concierge'] }
  ];
  const faqs = [
    ['Can I customize my itinerary?', 'Yes. Every journey is built around you, from pace and hotels to the smallest activity. Packages are a starting point.'],
    ['What destinations do you cover?', 'Across Europe, the Indian Ocean, Southeast Asia and the Middle East, with new places added each season.'],
    ['Can you arrange airport transfers?', 'Yes. Shared, private and chauffeur options are available, depending on your package.'],
    ['Do you offer honeymoon packages?', 'We do, with private dining, room touches and quiet, romantic locations.'],
    ['Can I cancel my booking?', 'Most bookings offer flexible changes and free cancellation up to 30 days before travel. Terms vary by property, and we confirm them before you pay.'],
    ['How does the trip planning process work?', 'Tell us your wishes, receive a draft itinerary within 48 hours, refine it with a planner, then confirm when you are happy.']
  ];
  const plans = {
    Relaxation: ['Private transfer and welcome drinks', 'Spa morning and pool afternoon', 'Long lunch at a local favourite', 'Sunset boat outing'],
    Adventure: ['Arrival and guided orientation', 'Full-day guided trek or dive', 'Local market and street-food tour', 'Off-the-path excursion with a guide'],
    Culture: ['Arrival and private old-town walk', 'Museum access with a historian', 'Cooking class with a local family', 'Artisan workshop visit'],
    Romance: ['Champagne arrival and turndown', 'Couples spa ritual', 'Private beach or terrace dinner', 'Sunset cruise for two']
  };

  /* ---------- Helpers ---------- */
  const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
  const toastEl = $('#toast'); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 3200); }
  const img = (id, alt, w, eager) => `<img src="${U(id, w)}" alt="${alt}" ${eager ? '' : 'loading="lazy"'} width="800" height="600">`;
  // Load button spinner state
  function busy(btn, label, done) { const t = btn.textContent; btn.disabled = true; btn.textContent = label; setTimeout(() => { btn.disabled = false; btn.textContent = t; done(); }, 900); }

  /* ---------- Render sections ---------- */
  $('#destGrid').innerHTML = destinations.map(d => `
  <article class="card reveal"><div class="card__img">${img(d.img, d.alt, 800)}</div>
  <div class="card__body"><h3>${d.name}</h3><p class="card__meta">${d.region}</p><p>${d.text}</p>
  <div class="card__foot"><span class="price"><small class="card__meta">from </small>${fmt(d.price)}</span><button class="link" data-dest="${d.name}">Explore</button></div></div></article>`).join('');

  $('#resortGrid').innerHTML = resorts.map(r => `
  <article class="card reveal"><div class="card__img">${img(r.img, r.alt, 800)}</div>
  <div class="card__body"><div class="card__foot" style="padding:0"><h3>${r.name}</h3><span class="rating">★ ${r.rating}</span></div>
  <p class="card__meta">${r.loc}</p><div class="tags">${r.am.map(a => `<span>${a}</span>`).join('')}</div>
  <div class="card__foot"><span class="price">${fmt(r.price)}<small class="card__meta"> / night</small></span><button class="btn btn--outline" data-resort="${r.name}">View Resort</button></div></div></article>`).join('');

  $('#expGrid').innerHTML = experiences.map(e => `
  <article class="exp reveal">${img(e.img, e.alt, 900)}<div><h3>${e.name}</h3><p>${e.text}</p></div></article>`).join('');

  $('#masonry').innerHTML = gallery.map((g, i) => `<button data-i="${i}" aria-label="Open image: ${g.alt}"><img src="${U(g.id, 700)}" alt="${g.alt}" loading="lazy" width="700" height="${i % 2 ? 900 : 520}"></button>`).join('');

  $('#pkgGrid').innerHTML = packages.map(p => `
  <article class="pkg reveal ${p.hi ? 'pkg--hi' : ''}">${p.hi ? '<span class="pkg__tag">Most chosen</span>' : ''}<span class="nights">${p.n}</span><h3>nights · ${p.name}</h3>
  <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul><p class="from">From <strong>${fmt(p.from)}</strong> per person</p>
  <button class="btn ${p.hi ? 'btn--gold' : 'btn--outline'}" data-pkg="${p.name}">Choose ${p.name.split(' ')[0]}</button></article>`).join('');

  // Selects share the destination list
  const opts = destinations.map(d => `<option>${d.name}</option>`).join('');
  $('#bDest').insertAdjacentHTML('beforeend', opts); $('#pDest').innerHTML = opts;

  /* ---------- Nav: sticky, scroll effect, mobile menu ---------- */
  const nav = $('#nav'), burger = $('#burger'), menu = $('#menu'), toTop = $('#toTop');
  const onScroll = () => { nav.classList.toggle('scrolled', scrollY > 60); toTop.classList.toggle('show', scrollY > 700); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  toTop.addEventListener('click', () => scrollTo({ top: 0 }));

  /* ---------- Dark / light mode ---------- */
  const root = document.documentElement;
  try { root.dataset.theme = localStorage.getItem('aurelia-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); } catch { }
  $('#themeToggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('aurelia-theme', root.dataset.theme); } catch { }
  });

  /* ---------- Booking form validation ---------- */
  const bIn = $('#bIn'), bOut = $('#bOut'), today = new Date().toISOString().slice(0, 10);
  bIn.min = bOut.min = today;
  bIn.addEventListener('change', () => { bOut.min = bIn.value || today; });
  $('#bookingForm').addEventListener('submit', e => {
    e.preventDefault();
    const err = $('#bErr'), dest = $('#bDest');
    [dest, bIn, bOut].forEach(f => f.removeAttribute('aria-invalid'));
    let msg = '';
    if (!dest.value) { msg = 'Choose a destination.'; dest.setAttribute('aria-invalid', true); }
    else if (!bIn.value) { msg = 'Select a check-in date.'; bIn.setAttribute('aria-invalid', true); }
    else if (!bOut.value || bOut.value <= bIn.value) { msg = 'Check-out must be after check-in.'; bOut.setAttribute('aria-invalid', true); }
    err.textContent = msg;
    if (msg) return;
    busy($('#bBtn'), 'Searching…', () => {
      const d = destinations.find(x => x.name === dest.value);
      toast(`Great choice. ${$('#bGuests').value} in ${d.name} from ${fmt(d.price)}. A planner will be in touch.`);
    });
  });

  /* ---------- Card actions ---------- */
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-dest],[data-resort],[data-pkg]'); if (!c) return;
    if (c.dataset.dest) { $('#pDest').value = c.dataset.dest; $('#bDest').value = c.dataset.dest; $('#planner').scrollIntoView(); toast(`${c.dataset.dest} selected. Build your trip below.`); }
    else toast(`${c.dataset.resort || c.dataset.pkg} details are coming soon. Contact us to book.`);
  });
  $('#viewAll').addEventListener('click', e => { e.preventDefault(); toast('More destinations are on the way. Try the trip planner.'); });

  /* ---------- Trip planner: generates a sample itinerary ---------- */
  $('#plannerForm').addEventListener('submit', e => {
    e.preventDefault();
    const d = destinations.find(x => x.name === $('#pDest').value), style = $('#pStyle').value;
    const trav = Math.max(1, +$('#pTrav').value || 1), nights = Math.min(14, Math.max(3, +$('#pDays').value || 3));
    const mult = +$('#pBudget').value, out = $('#itinerary');
    out.innerHTML = '<p class="muted">Composing your itinerary…</p>';
    busy($('#pBtn'), 'Building…', () => {
      const steps = plans[style], days = Math.min(nights, 6);
      const items = Array.from({ length: days }, (_, i) => `<li style="animation-delay:${i * .08}s"><strong>Day ${i + 1}${i === days - 1 && nights > days ? '+' : ''}</strong>${steps[i % steps.length]} in ${d.name}</li>`).join('');
      const total = d.price / 4 * nights * mult * trav;
      out.innerHTML = `<h3>${nights} nights in ${d.name}</h3><p class="muted">${style} · ${trav} traveler${trav > 1 ? 's' : ''}</p><ol>${items}</ol>
      <div class="total"><span>Estimated total</span><span>${fmt(total)}</span></div>`;
      toast('Your sample itinerary is ready.');
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const lb = $('#lightbox'), lbImg = $('#lbImg'); let cur = 0, lastFocus;
  function show(i) {
    cur = (i + gallery.length) % gallery.length; lbImg.style.opacity = 0;
    setTimeout(() => { lbImg.src = U(gallery[cur].id, 1600); lbImg.alt = gallery[cur].alt; $('#lbCap').textContent = gallery[cur].alt; }, 150);
    lbImg.onload = () => { lbImg.style.opacity = 1; };
  }
  function openLb(i) { lastFocus = document.activeElement; lb.hidden = false; requestAnimationFrame(() => lb.classList.add('open')); show(i); $('#lbClose').focus(); document.body.style.overflow = 'hidden'; }
  function closeLb() { lb.classList.remove('open'); setTimeout(() => { lb.hidden = true; }, 300); document.body.style.overflow = ''; lastFocus && lastFocus.focus(); }
  $('#masonry').addEventListener('click', e => { const b = e.target.closest('button'); if (b) openLb(+b.dataset.i); });
  $('#lbClose').onclick = closeLb; $('#lbPrev').onclick = () => show(cur - 1); $('#lbNext').onclick = () => show(cur + 1);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1);
  });

  /* ---------- Testimonial carousel ---------- */
  const track = $('#cTrack'), dots = $('#cDots'); let slide = 0, timer;
  track.innerHTML = reviews.map(([n, c, r, t, seed]) => `
  <figure class="quote"><div class="rating" aria-label="${r} out of 5 stars">${'★'.repeat(r)}${'☆'.repeat(5 - r)}</div>
  <blockquote>“${t}”</blockquote><footer><img src="https://i.pravatar.cc/104?u=${seed}" alt="Portrait of ${n}" loading="lazy" width="52" height="52"><div><strong>${n}</strong><small>${c}</small></div></footer></figure>`).join('');
  dots.innerHTML = reviews.map((_, i) => `<button aria-label="Go to testimonial ${i + 1}"></button>`).join('');
  function go(i) {
    slide = (i + reviews.length) % reviews.length; track.style.transform = `translateX(-${slide * 100}%)`;
    $$('button', dots).forEach((b, k) => b.setAttribute('aria-current', k === slide));
    $$('.quote', track).forEach((q, k) => q.setAttribute('aria-hidden', k !== slide));
  }
  const auto = () => { clearInterval(timer); if (!matchMedia('(prefers-reduced-motion:reduce)').matches) timer = setInterval(() => go(slide + 1), 7000); };
  $('#cPrev').onclick = () => { go(slide - 1); auto(); }; $('#cNext').onclick = () => { go(slide + 1); auto(); };
  dots.addEventListener('click', e => { const i = $$('button', dots).indexOf(e.target); if (i > -1) { go(i); auto(); } });
  go(0); auto();
  // Touch swipe for the carousel
  let sx = null;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) { go(slide + (dx < 0 ? 1 : -1)); auto(); }
  });

  /* ---------- FAQ accordion ---------- */
  $('#faqList').innerHTML = faqs.map(([q, a], i) => `
  <div><h3><button class="q" aria-expanded="false" aria-controls="a${i}" id="q${i}">${q}</button></h3>
  <div class="a" id="a${i}" role="region" aria-labelledby="q${i}"><p>${a}</p></div></div>`).join('');
  $('#faqList').addEventListener('click', e => {
    const b = e.target.closest('.q'); if (!b) return;
    const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', open); $('#' + b.getAttribute('aria-controls')).classList.toggle('open', open);
  });

  /* ---------- Newsletter ---------- */
  $('#newsForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#nEmail').value.trim(), m = $('#nMsg');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { m.className = 'field-error'; m.textContent = 'Enter a valid email address, like name@example.com.'; return; }
    m.className = 'field-error ok'; m.textContent = 'Welcome aboard. Your first issue is on its way.';
    $('#nEmail').value = ''; toast('Subscribed. Thank you.');
  });

  /* ---------- Scroll reveal ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting) {
      const el = x.target, i = [...el.parentNode.children].indexOf(el);
      el.style.transitionDelay = (i % 3) * 90 + 'ms'; // stagger within a row
      el.classList.add('in'); io.unobserve(el);
      // Release reveal styles afterwards so card hover transforms and timing work
      setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.transitionDelay = ''; }, 1500);
    }
  }), { threshold: .12 }) : null;
  $$('.head').forEach(h => h.classList.add('reveal'));
  $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  // Graceful fallback if any remote image fails
  addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.style.visibility = 'hidden'; }, true);
})();
