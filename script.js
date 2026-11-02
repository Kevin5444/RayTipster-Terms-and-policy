(function () {
  var views = ["terms", "privacy"];
  var back = document.getElementById("back");
  var title = document.getElementById("page-title");
  var navigated = false;

  function current() {
    var h = (location.hash || "").replace("#", "");
    return views.indexOf(h) > -1 ? h : "terms";
  }

  function render() {
    var view = current();
    views.forEach(function (v) {
      document.getElementById(v).classList.toggle("hidden", v !== view);
    });
    document.querySelectorAll("footer nav a").forEach(function (a) {
      if (a.dataset.view === view) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var name = document.getElementById(view).dataset.title;
    title.textContent = name;
    document.title = "Tipster Ray – " + name;
    back.hidden = !(navigated || history.length > 1);
    window.scrollTo(0, 0);
  }

  back.addEventListener("click", function () { history.back(); });
  window.addEventListener("hashchange", function () { navigated = true; render(); });
  render();
})();
