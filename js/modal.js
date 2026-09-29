const Modal = {
  overlay: document.getElementById("modal-overlay"),
  title: document.getElementById("modal-title"),
  body: document.getElementById("modal-body"),
  closeBtn: document.getElementById("modal-close-btn"),
  okBtn: document.getElementById("modal-ok-btn"),
  onCloseCallback: null,

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }
    if (this.okBtn) {
      this.okBtn.addEventListener("click", () => this.close());
    }
    if (this.overlay) {
      this.overlay.addEventListener("click", (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
    }
  },

  show({ title, message, errors = [], type = "error", onClose = null }) {
    if (!this.overlay) return;

    this.onCloseCallback = onClose;

    if (this.title) {
      this.title.textContent = title;
      this.title.className = `modal__title ${type}`;
    }

    if (this.body) {
      let content = "";
      if (message) {
        content += `<p>${message}</p>`;
      }
      if (errors && errors.length > 0) {
        content += `<ul class="modal__errors">`;
        errors.forEach(err => {
          content += `<li>${err}</li>`;
        });
        content += `</ul>`;
      }
      this.body.innerHTML = content;
    }

    if (this.okBtn) {
      this.okBtn.className = `modal__btn ${type === "error" ? "danger" : "success"}`;
    }

    this.overlay.classList.add("active");
  },

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove("active");
    if (typeof this.onCloseCallback === "function") {
      this.onCloseCallback();
      this.onCloseCallback = null;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Modal.init();
});
