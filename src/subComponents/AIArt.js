import React, { useEffect, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const AIArt = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Detect theme based on theme.body
    // lightTheme: body is #FCF6F4 (light). Right half background is theme.body (light).
    // darkTheme: body is #000000 (dark). Right half background is theme.body (dark).
    const isDarkBg = theme.body === "#000000" || theme.body === "black";

    // Set colors based on background
    const colors = isDarkBg
      ? ["rgba(0, 240, 255, ", "rgba(189, 0, 255, ", "rgba(0, 114, 255, "] // Cyan, Purple, Blue for dark bg
      : ["rgba(0, 128, 128, ", "rgba(75, 0, 130, ", "rgba(0, 0, 139, "]; // Teal, Indigo, Dark Blue for light bg

    let width = 0;
    let height = 0;

    const particles = [];
    const particleCount = 45;
    const connectionDistance = 100;
    const mouse = { x: null, y: null, radius: 120 };

    class Particle {
      constructor() {
        this.x = Math.random() * (width || 300);
        this.y = Math.random() * (height || 300);
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2.5 + 1.5;
        this.colorIndex = Math.floor(Math.random() * colors.length);
        this.baseAlpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off bounds
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction (gentle attraction)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 0.4;
            this.y -= (dy / dist) * force * 0.4;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[this.colorIndex] + this.baseAlpha + ")";
        ctx.shadowBlur = isDarkBg ? 8 : 0;
        ctx.shadowColor = colors[this.colorIndex] + "1)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const reinitializeParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDarkBg 
              ? `rgba(0, 240, 255, ${alpha})`
              : `rgba(0, 128, 128, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDarkBg
              ? `rgba(189, 0, 255, ${alpha})`
              : `rgba(75, 0, 130, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        drawConnections();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Use ResizeObserver to track dimensional changes during animations
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        const wasZero = width === 0 || height === 0;
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
        
        if (wasZero && newWidth > 0 && newHeight > 0) {
          reinitializeParticles();
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <CanvasContainer ref={containerRef}>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default AIArt;
