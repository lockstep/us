function scrollForFixedColumn() {
  var f = $(".application-footer");
  if (f.length > 0) {
    if ($('.split-layout-secondary').css('display') !== "none") {
      var t = f.offset().top,
          n = $(window).height(),
          i = $(".split-layout--fixed-left").height(),
          r = $(".split-layout-secondary"),
          a = "split-layout-secondary--fixed";
      r.css("max-height", i),
      $(window).on("scroll", function() {
        var e = $(window).scrollTop();
        total = n + e - t;
        total >= 0 ? r.removeClass(a) : r.addClass(a)
      })
    }
  }
}

window.App = {},
  $(function() {
    scrollForFixedColumn()
  }), $(window).on("resize", function() {
    scrollForFixedColumn()
  }),
  function() {
    var e;
    new(e = function() {
      function e() {
        this.applicationHeader = $("[data-application-header]"),
        this.mobileMenuIcon = $("[data-application-nav-mobile-icon]"),
        this.navLinks = $("[data-application-nav-link]"),
        this.lastScrollTop = 0,
        this._bindEvents()
      }
      return e.prototype._bindEvents = function() {
        return $(window).scroll(function(e) {
        }(this)), this.navLinks.click(function(e) {
          return function(t) {
            return e._handleNavLinkClick(t)
          }
        }(this)), this.mobileMenuIcon.click(function(e) {
          return function(t) {
            return e._handleMobileIconClick(t)
          }
        }(this))
      }, e.prototype._showHeaderIfPastB = function() {
        return this._isPastPointB() ? this._showIfScrollingUp() : this.applicationHeader.removeClass("show")
      }, e.prototype._isPastPointA = function() {
        return $(window).scrollTop() > 100
      }, e.prototype._isPastPointB = function() {
        return $(window).scrollTop() > 700
      }, e.prototype._showIfScrollingUp = function() {
        var e;
        return e = $(window).scrollTop(), e >= this.lastScrollTop ? this.applicationHeader.removeClass("show").addClass("hide") : this.applicationHeader.removeClass("hide").addClass("show"), this.lastScrollTop = e
      }, e.prototype._handleMobileIconClick = function(e) {
        return e.preventDefault(), this.applicationHeader.toggleClass("mobile-menu")
      }, e.prototype._handleNavLinkClick = function() {
        return this.applicationHeader.removeClass("mobile-menu")
      }, e
    }())
  }.call(this), $(document).ready(function() {
    $(".nav-bar").click(function() {
      $(this).toggleClass("active");
    })
  });
