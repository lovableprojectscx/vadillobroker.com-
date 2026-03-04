const fs = require('fs');

const content = fs.readFileSync('src/pages/Index.tsx', 'utf-8');

const markers = {
    "SEGUROS": "{/* ══════════════════════════════════════\n            SEGUROS — Services\n        ══════════════════════════════════════ */}",
    "NOSOTROS": "{/* ══════════════════════════════════════\n            NOSOTROS — About\n        ══════════════════════════════════════ */}",
    "DESGRAVAMEN": "{/* ══════════════════════════════════════\n            DESGRAVAMEN\n        ══════════════════════════════════════ */}",
    "INMOBILIARIA": "{/* ══════════════════════════════════════\n            INMOBILIARIA\n        ══════════════════════════════════════ */}",
    "WHY_BROKER": "{/* ══════════════════════════════════════\n            WHY BROKER\n        ══════════════════════════════════════ */}",
    "TESTIMONIALS": "{/* ══════════════════════════════════════\n            TESTIMONIALS\n        ══════════════════════════════════════ */}"
};

let idx = {};
for (let name in markers) {
    let marker = markers[name];
    idx[name] = content.indexOf(marker.replace(/\r?\n/g, '\n'));
    if (idx[name] === -1) {
        idx[name] = content.indexOf(marker.replace(/\r?\n/g, '\r\n'));
    }
    console.log(name, idx[name]);
}

if (Object.values(idx).includes(-1)) {
    console.log("Error: One or more markers not found.");
    process.exit(1);
}

const parts = {
    "SEGUROS": content.substring(idx["SEGUROS"], idx["NOSOTROS"]),
    "NOSOTROS": content.substring(idx["NOSOTROS"], idx["DESGRAVAMEN"]),
    "DESGRAVAMEN": content.substring(idx["DESGRAVAMEN"], idx["INMOBILIARIA"]),
    "INMOBILIARIA": content.substring(idx["INMOBILIARIA"], idx["WHY_BROKER"]),
    "WHY_BROKER": content.substring(idx["WHY_BROKER"], idx["TESTIMONIALS"]),
};

const header = content.substring(0, idx["SEGUROS"]);
const tail = content.substring(idx["TESTIMONIALS"]);

// Reconstruct
let new_content = header + parts["NOSOTROS"] + parts["WHY_BROKER"] + parts["SEGUROS"] + parts["DESGRAVAMEN"] + parts["INMOBILIARIA"] + tail;

const nav_old_n = `const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Seguros", href: "#seguros" },
  { label: "Inmobiliaria", href: "#inmobiliaria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];`;

const nav_new_n = `const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Seguros", href: "#seguros" },
  { label: "Inmobiliaria", href: "#inmobiliaria" },
  { label: "Contacto", href: "#contacto" },
];`;

new_content = new_content.replace(nav_old_n, nav_new_n);
new_content = new_content.replace(nav_old_n.replace(/\n/g, '\r\n'), nav_new_n.replace(/\n/g, '\r\n'));

fs.writeFileSync('src/pages/Index.tsx', new_content, 'utf-8');
console.log("Successfully reordered sections.");
