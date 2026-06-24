"use strict";

let DATA = [];
let view = [];
let sort = { key: "year", dir: -1 };

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function uniqueSorted(items, fn) {
  return [...new Set(items.flatMap(fn).filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b)));
}

function fillSelect(sel, values, current) {
  for (const v of values) {
    const o = document.createElement("option");
    o.value = v; o.textContent = v;
    if (v === current) o.selected = true;
    sel.appendChild(o);
  }
}

function applyFilters() {
  const q = $("q").value.trim().toLowerCase();
  const cat = $("category").value;
  const prog = $("programme").value;
  const yr = $("year").value;
  const inst = $("institution").value;

  view = DATA.filter((r) => {
    if (cat && !(r.categories || []).includes(cat)) return false;
    if (prog && r.programme !== prog) return false;
    if (yr && String(r.year) !== yr) return false;
    if (inst && r.institution !== inst) return false;
    if (q) {
      const hay = (r.title + " " + r.abstract + " " + r.pi + " " +
        r.device_group + " " + (r.matched_keywords || []).join(" ")).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  sortView();
  render();
}

function sortView() {
  const { key, dir } = sort;
  view.sort((a, b) => {
    let x = a[key], y = b[key];
    if (Array.isArray(x)) x = x.join(",");
    if (Array.isArray(y)) y = y.join(",");
    if (key === "year") { x = x || 0; y = y || 0; return (x - y) * dir; }
    return String(x).localeCompare(String(y)) * dir;
  });
}

function render() {
  $("summary").textContent =
    `${view.length} of ${DATA.length} instruments shown` +
    (view.length ? ` · ${uniqueSorted(view, (r) => [r.institution]).length} institutions` : "");

  const tags = (cats) => (cats || []).map((c) =>
    `<span class="tag ${c}">${esc(c.replace("_", " "))}</span>`).join("");

  const tbody = $("rows");
  tbody.innerHTML = view.map((r, i) => `
    <tr class="main" data-i="${i}">
      <td class="num">${esc(r.year)}</td>
      <td class="title-cell">${esc(r.title)}</td>
      <td>${esc(r.institution)}</td>
      <td>${esc(r.subject_area)}</td>
      <td>${tags(r.categories)}</td>
      <td>${esc(r.programme)}</td>
    </tr>`).join("");

  // sort header arrows
  document.querySelectorAll("th.sortable").forEach((th) => {
    const base = th.textContent.replace(/[ ▲▼]+$/, "");
    th.innerHTML = base + (th.dataset.key === sort.key
      ? ` <span class="arrow">${sort.dir === 1 ? "▲" : "▼"}</span>` : "");
  });
}

function toggleDetail(tr) {
  const next = tr.nextElementSibling;
  if (next && next.classList.contains("detail")) { next.remove(); return; }
  const r = view[+tr.dataset.i];
  const det = document.createElement("tr");
  det.className = "detail";
  det.innerHTML = `<td colspan="6">
    <div class="abstract">${esc(r.abstract) || "<em>No abstract on GEPRIS.</em>"}</div>
    <div class="meta">
      ${r.pi ? "PI: " + esc(r.pi) + " · " : ""}
      ${r.device_group ? "Device group: " + esc(r.device_group) + " · " : ""}
      ${r.funding_period ? esc(r.funding_period) + " · " : ""}
      <a href="${esc(r.url)}" target="_blank" rel="noopener">Open in GEPRIS ↗</a>
    </div></td>`;
  tr.after(det);
}

function init(data) {
  DATA = data;
  fillSelect($("category"), ["robotics", "hci", "lab_automation"], "");
  fillSelect($("programme"), uniqueSorted(DATA, (r) => [r.programme]), "");
  fillSelect($("year"), uniqueSorted(DATA, (r) => [String(r.year)]).reverse(), "");
  fillSelect($("institution"), uniqueSorted(DATA, (r) => [r.institution]), "");

  ["q", "category", "programme", "year", "institution"].forEach((id) =>
    $(id).addEventListener("input", applyFilters));
  $("reset").addEventListener("click", () => {
    ["q", "category", "programme", "year", "institution"].forEach((id) => ($(id).value = ""));
    applyFilters();
  });
  document.querySelectorAll("th.sortable").forEach((th) =>
    th.addEventListener("click", () => {
      const k = th.dataset.key;
      sort = { key: k, dir: sort.key === k ? -sort.dir : (k === "year" ? -1 : 1) };
      sortView(); render();
    }));
  $("rows").addEventListener("click", (e) => {
    const tr = e.target.closest("tr.main");
    if (tr) toggleDetail(tr);
  });

  applyFilters();
}

fetch("data/projects.json")
  .then((r) => r.json())
  .then(init)
  .catch((e) => {
    document.getElementById("summary").textContent =
      "Could not load data/projects.json — serve this folder over HTTP (python3 -m http.server). " + e;
  });
