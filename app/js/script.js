"use client";
if (typeof window !== "undefined") {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  btn?.addEventListener("click", () => {
    console.log("clicked");
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });
}
