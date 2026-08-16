"use strict";

const cuts = Array.from(document.querySelectorAll("[data-reel] .cut"));
const reelTime = document.getElementById("reel-time");
const heroTime = document.getElementById("hero-time");
const progress = document.querySelector(".control-line i");
const heroSegments = Array.from(document.querySelectorAll(".reel-progress i"));
const previousButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const copyMailButton = document.querySelector("[data-copy-email]");
const copyMailStatus = document.getElementById("copy-mail-status");

function selectCut(index) {
  const selected = cuts[index];
  if (!selected) return;
  cuts.forEach((cut, cutIndex) => {
    cut.classList.toggle("is-active", cutIndex === index);
    cut.setAttribute("aria-current", cutIndex === index ? "true" : "false");
  });
  const time = selected.dataset.time || "00:00:00";
  reelTime.textContent = time;
  heroTime.textContent = time;
  progress.style.width = `${((index + 1) / cuts.length) * 100}%`;
  heroSegments.forEach((segment, segmentIndex) => {
    segment.classList.toggle("is-lit", segmentIndex <= index);
  });
}

function slideTo(index) {
  const selected = cuts[index];
  if (!selected) return;
  selectCut(index);
  selected.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
}

function getActiveIndex() {
  return Math.max(0, cuts.findIndex((cut) => cut.classList.contains("is-active")));
}

cuts.forEach((cut, index) => {
  cut.tabIndex = 0;
  cut.setAttribute("role", "button");
  cut.setAttribute("aria-label", `${index + 1}番目のショーリールを表示`);
  cut.addEventListener("click", () => slideTo(index));
  cut.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      slideTo(index);
    }
  });
});

if (previousButton && nextButton) {
  previousButton.addEventListener("click", () => {
    slideTo(Math.max(0, getActiveIndex() - 1));
  });

  nextButton.addEventListener("click", () => {
    slideTo(Math.min(cuts.length - 1, getActiveIndex() + 1));
  });
}

selectCut(0);

if (copyMailButton && copyMailStatus) {
  copyMailButton.addEventListener("click", async () => {
    const email = copyMailButton.dataset.copyEmail || "";
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      copyMailStatus.textContent = "メールアドレスをコピーしました。";
    } catch {
      copyMailStatus.textContent = "コピーできない場合は、下のメールアドレスを選択してコピーしてください。";
    }
  });
}

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionWords = Array.from(document.querySelectorAll("[data-motion-text]"));
const railOne = document.querySelector(".type-rail-one");
const railTwo = document.querySelector(".type-rail-two");

if (window.gsap && !motionQuery.matches) {
  const gsapLib = window.gsap;

  gsapLib.set(motionWords, { autoAlpha: 0, yPercent: 90, rotateX: -45, skewY: 5 });
  gsapLib.set([railOne, railTwo], { xPercent: 0 });
  gsapLib.set(".motion-caption span", { autoAlpha: 0, y: 16 });

  const motionTimeline = gsapLib.timeline({
    defaults: { ease: "power4.out" },
    repeat: -1,
    repeatDelay: 1.2
  });

  motionTimeline
    .to(motionWords, {
      autoAlpha: 1,
      yPercent: 0,
      rotateX: 0,
      skewY: 0,
      duration: 1.05,
      stagger: 0.16
    })
    .to(".motion-caption span", {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.08
    }, "-=0.45")
    .to(motionWords, {
      x: (index) => [18, -14, 10][index] || 0,
      duration: 1.6,
      stagger: 0.08,
      ease: "sine.inOut"
    })
    .to(motionWords, {
      autoAlpha: 0,
      yPercent: -70,
      rotateX: 35,
      duration: 0.65,
      stagger: 0.08,
      ease: "power3.in"
    }, "+=1.1");

  gsapLib.to(railOne, { xPercent: -28, duration: 16, repeat: -1, ease: "none" });
  gsapLib.to(railTwo, { xPercent: 24, duration: 18, repeat: -1, ease: "none" });
  gsapLib.fromTo(".frame-word", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out" });
  gsapLib.from(".hero-copy > *", { y: 22, autoAlpha: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" });
}

document.getElementById("year").textContent = String(new Date().getFullYear());
