/* =========================================================
   BEC — Brothers Engineer's & Construction
   Interactive JavaScript (script.js)
   ========================================================= */

// 1. Set Dynamic Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// 2. Project Portfolio Dataset
const projectsData = [
  {
    id: 1,
    title: "Vashantek Green View Heights",
    category: "residential",
    categoryLabel: "Residential Tower",
    location: "Dhaka Cantonment, Dhaka-1206",
    status: "Completed",
    structure: "G+8 RCC Frame + Shear Wall",
    area: "38,500 Sq. Ft.",
    scope: "Design, Piling & Turnkey Build",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    description: "A modern 9-story luxury residential apartment complex engineered with cast-in-situ bored piling, earthquake-resistant shear walls, rooftop community terrace, and full fire safety compliance."
  },
  {
    id: 2,
    title: "BEC Corporate & Commercial Plaza",
    category: "commercial",
    categoryLabel: "Commercial Complex",
    location: "Mirpur DOHS Avenue, Dhaka",
    status: "Completed",
    structure: "B+G+10 Composite RCC",
    area: "62,000 Sq. Ft.",
    scope: "Structural Design & Supervision",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description: "High-span commercial office and retail complex featuring basement parking with secant pile shoring, curtain wall glass facade, and high-capacity generator & substation rooms."
  },
  {
    id: 3,
    title: "Gazipur Pre-Engineered Steel Warehouse",
    category: "industrial",
    categoryLabel: "Industrial & Civil",
    location: "Joydebpur Industrial Belt, Gazipur",
    status: "Completed",
    structure: "PEB Steel Portal Frame",
    area: "45,000 Sq. Ft.",
    scope: "Foundation & Steel Erection",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    description: "Clear-span industrial logistics facility with heavy-duty fiber-reinforced concrete flooring, storm drainage network, and wind-load-certified steel trusses."
  },
  {
    id: 4,
    title: "Uttara Sector-11 Duplex Residence",
    category: "residential",
    categoryLabel: "Residential Villa",
    location: "Sector-11, Uttara, Dhaka",
    status: "Completed",
    structure: "G+2 Architectural Villa",
    area: "8,400 Sq. Ft.",
    scope: "Architectural, Structural & Interior",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    description: "Contemporary cantilevered duplex residence combining dramatic structural overhangs, natural daylighting courtyards, and bespoke interior finishes."
  },
  {
    id: 5,
    title: "Banani Boutique Medical & Diagnostic Center",
    category: "commercial",
    categoryLabel: "Commercial & Healthcare",
    location: "Road 11, Banani, Dhaka",
    status: "Ongoing",
    structure: "B+G+7 Retrofitted RCC",
    area: "29,000 Sq. Ft.",
    scope: "Structural Retrofitting & MEP",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    description: "Comprehensive structural strengthening via column micro-concrete jacketing and foundation underpinning to support heavy diagnostic imaging machinery."
  },
  {
    id: 6,
    title: "Savar Bridge Approach & Retaining Wall",
    category: "industrial",
    categoryLabel: "Civil Infrastructure",
    location: "Savar, Dhaka Division",
    status: "Completed",
    structure: "RCC Cantilever Retaining Wall",
    area: "420 Linear Meters",
    scope: "Geotechnical & Civil Execution",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80",
    description: "Flood-resilient reinforced concrete retaining embankment, culvert drainage, and compacted sub-base road construction built for heavy freight traffic."
  }
];

// 3. Render Project Cards
const projectsGrid = document.getElementById('projects-grid');

function renderProjects(filter = 'all') {
  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  projectsGrid.innerHTML = filtered.map(project => `
    <article class="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div class="relative h-56 overflow-hidden bg-slate-100">
        <img 
          src="${project.image}" 
          alt="${project.title}"
          onerror="this.src='https://placehold.co/800x500/001C54/F3B43F?text=${encodeURIComponent(project.title)}'"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute top-3.5 left-3.5">
          <span class="px-3 py-1 rounded-xl bg-brand-navy/90 backdrop-blur-sm text-white text-xs font-bold">
            ${project.categoryLabel}
          </span>
        </div>
        <div class="absolute top-3.5 right-3.5">
          <span class="px-2.5 py-1 rounded-xl bg-white/95 text-brand-navy text-xs font-extrabold shadow-sm">
            ${project.status}
          </span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p class="text-xs font-semibold text-brand-gold flex items-center gap-1.5 mb-1.5">
            <i class="fa-solid fa-location-dot"></i>
            <span>${project.location}</span>
          </p>
          <h3 class="font-display text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
            ${project.title}
          </h3>
          <p class="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            ${project.description}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <div class="text-xs text-slate-500">
            <span class="font-bold text-slate-700">${project.structure}</span> • ${project.area}
          </div>
          <button 
            onclick="openProjectModal(${project.id})"
            class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-brand-navy text-brand-navy hover:text-white text-xs font-bold transition-colors shrink-0">
            Details &rarr;
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

renderProjects('all');

// 4. Category Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('bg-brand-navy', 'text-white', 'font-bold', 'shadow-sm');
      b.classList.add('bg-slate-100', 'text-slate-700', 'font-semibold');
    });
    btn.classList.remove('bg-slate-100', 'text-slate-700', 'font-semibold');
    btn.classList.add('bg-brand-navy', 'text-white', 'font-bold', 'shadow-sm');
    renderProjects(btn.dataset.filter);
  });
});

// 5. Project Detail Modal Controls
const modal = document.getElementById('project-modal');
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-category').textContent = project.categoryLabel;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-status').textContent = project.status;
  document.getElementById('modal-location').querySelector('span').textContent = project.location;
  document.getElementById('modal-desc').textContent = project.description;
  document.getElementById('modal-structure').textContent = project.structure;
  document.getElementById('modal-area').textContent = project.area;
  document.getElementById('modal-scope').textContent = project.scope;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.getElementById('close-modal-btn').addEventListener('click', closeProjectModal);
document.getElementById('close-modal-footer').addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeProjectModal();
});

// 6. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// 7. Toast Notification Box
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const iconClass = type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-brand-goldLight';
  
  toast.className = 'pointer-events-auto max-w-sm w-full bg-brand-navyDark text-white border border-white/15 rounded-2xl p-4 shadow-2xl flex items-start gap-3 transition-all duration-300 transform translate-y-2 opacity-0';
  toast.innerHTML = `
    <i class="fa-solid ${iconClass} text-lg mt-0.5"></i>
    <div class="flex-1 text-sm">
      <p class="font-bold text-white">${title}</p>
      <p class="text-slate-300 text-xs mt-0.5">${message}</p>
    </div>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

// 8. One-Click Clipboard Copy
function copyToClipboard(text, label) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(`${label} Copied!`, `${text} copied to your clipboard.`);
  } catch (err) {
    showToast('Copy Info', text, 'info');
  }
  document.body.removeChild(tempInput);
}

// 9. Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('client-name').value.trim();
  const service = document.getElementById('service-type').value;

  showToast(
    'Consultation Request Sent!',
    `Thank you, ${name}. Engr. Rofikunnobi's team at BEC will contact you regarding ${service}.`
  );
  this.reset();
});