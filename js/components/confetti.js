// Canvas Confetti Engine for Learning Universe LMS Celebrations

export function triggerConfetti(duration = 2500) {
  try {
    if (typeof document === 'undefined' || !document.createElement) return;
    let canvas = document.getElementById("confetti-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "confetti-canvas";
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "999999";
      if (document.body && document.body.appendChild) {
        document.body.appendChild(canvas);
      }
    }

    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = (typeof window !== 'undefined' ? window.innerWidth : 800) || 800;
    canvas.height = (typeof window !== 'undefined' ? window.innerHeight : 600) || 600;

    const colors = ["#7C3AED", "#EC4899", "#3B82F6", "#10B981", "#F59E0B", "#F43F5E", "#06B6D4"];
    const piecesCount = 120;
    const pieces = [];

    for (let i = 0; i < piecesCount; i++) {
      pieces.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.4 + (Math.random() - 0.5) * 100,
        w: Math.random() * 10 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 18,
        vy: Math.random() * -14 - 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.35,
        drag: 0.96,
        opacity: 1
      });
    }

    const startTime = Date.now();

    function render() {
      const elapsed = Date.now() - startTime;
      if (elapsed > duration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.rotation += p.rotationSpeed;

        if (elapsed > duration - 800) {
          p.opacity = Math.max(0, (duration - elapsed) / 800);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(render);
      }
    }

    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(render);
    }
  } catch (e) {
    // Graceful fallback
  }
}
