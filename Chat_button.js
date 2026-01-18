(function () {

  // Turning On/Off is entirely event delegation.
  document.addEventListener("click", function (e) {

    // OPEN CHAT
    const openBtn = e.target.closest(".chat-btn");
    if (openBtn) {
      const overlay = document.getElementById("chatOverlay");
      if (overlay) overlay.classList.add("active");
      return;
    }

    // CLOSE CHAT(X)
    const closeBtn = e.target.closest("#chatClose");
    if (closeBtn) {
      const overlay = document.getElementById("chatOverlay");
      if (overlay) overlay.classList.remove("active");
      return;
    }

    // OVERLAY CHECK MARK
    if (e.target.classList.contains("chat-overlay")) {
      e.target.classList.remove("active");
    }
  });

})();