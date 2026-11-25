/*
 * Project data for the Projects tab and the project rows on the Profile tab.
 * To add a project, append one object to PROJECTS. Nothing else needs to change.
 *
 * tone for a status: "pos" | "amber" | "muted"
 * tone for a metric value: "pos" | "neg" | "amber" | "text"
 */
var PROJECTS = [
  {
    title: "Kalshi Gas Market-Maker",
    status: { label: "LIVE-TESTED · PAUSED", tone: "amber" },
    short: "Automated resting offers on Kalshi gas-price markets. Live-tested, now paused.",
    summary: "Automated resting offers on Kalshi's daily gas-price markets, taken through a pre-registered backtest, a forward paper test and a small live trial.",
    metrics: [
      { value: "+16.9¢", label: "per contract after fees, 12-evening paper test", tone: "pos" },
      { value: "72.1%", label: "of paper fills were profitable", tone: "pos" },
      { value: "38 of 85", label: "ideas killed or failed a pre-registered gate", tone: "text" }
    ],
    caseStudy: "projects/gas.html",
    repo: "https://github.com/Prydae/kalshi-gas-maker"
  },
  {
    title: "Kalshi BTC 15-Minute Audit",
    status: { label: "AUDITED · RETIRED", tone: "muted" },
    short: "Audit of my own bitcoin backtest. 7.95% of settlement labels were wrong.",
    summary: "An audit of my own bitcoin backtest: settlement labels were checked against Kalshi's official results, and the apparent edges did not survive.",
    metrics: [
      { value: "7.95%", label: "of settlement labels disagreed with Kalshi (84 of 1,056)", tone: "neg" },
      { value: "+33.5¢ → −4.8¢", label: "REV01 cheap flip, original vs Kalshi-verified labels", tone: "neg" },
      { value: "0 of 6", label: "strategies survived correction", tone: "neg" }
    ],
    caseStudy: "projects/btc.html",
    repo: "https://github.com/Prydae/kalshi-btc-audit"
  }
];

(function () {
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function pill(status) {
    var p = el("span", "pill");
    p.appendChild(el("span", "dot " + status.tone));
    p.appendChild(el("span", "pill-text", status.label));
    return p;
  }

  function renderProjectCards(container) {
    PROJECTS.forEach(function (p) {
      var card = el("article", "panel proj");

      var head = el("div", "proj-head");
      head.appendChild(el("h2", "", p.title));
      head.appendChild(pill(p.status));
      card.appendChild(head);

      var metrics = el("div", "proj-metrics");
      p.metrics.forEach(function (m) {
        var tile = el("div", "tile");
        tile.appendChild(el("span", "big " + m.tone, m.value));
        tile.appendChild(el("span", "cap", m.label));
        metrics.appendChild(tile);
      });
      card.appendChild(metrics);

      card.appendChild(el("p", "summary", p.summary));

      var actions = el("div", "proj-actions");
      var cs = el("a", "btn btn-primary", "Case study →");
      cs.href = p.caseStudy;
      var repo = el("a", "btn", "Repo ↗");
      repo.href = p.repo;
      repo.rel = "noopener";
      actions.appendChild(cs);
      actions.appendChild(repo);
      card.appendChild(actions);

      container.appendChild(card);
    });
  }

  function renderProfileRows(container) {
    PROJECTS.forEach(function (p) {
      var row = el("a", "row-link");
      row.href = p.caseStudy;
      var text = el("span");
      text.appendChild(el("span", "row-title", p.title));
      text.appendChild(el("span", "row-desc", p.short));
      row.appendChild(text);
      row.appendChild(el("span", "row-cta", "Case study →"));
      container.appendChild(row);
    });
  }

  var grid = document.getElementById("project-grid");
  if (grid) renderProjectCards(grid);

  var rows = document.getElementById("profile-projects");
  if (rows) renderProfileRows(rows);
})();

/* Tab switching via URL hash. With JS off, both sections stack. */
(function () {
  var TABS = ["profile", "projects"];
  document.documentElement.classList.add("js");

  function current() {
    var h = (window.location.hash || "").replace("#", "");
    return TABS.indexOf(h) > -1 ? h : "profile";
  }

  function show() {
    var active = current();
    document.querySelectorAll("[data-tab]").forEach(function (section) {
      section.classList.toggle("is-active", section.getAttribute("data-tab") === active);
    });
    document.querySelectorAll("[data-tab-link]").forEach(function (link) {
      if (link.getAttribute("data-tab-link") === active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("hashchange", show);
  show();
})();
