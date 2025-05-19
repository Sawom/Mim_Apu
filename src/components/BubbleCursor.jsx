import { useEffect, useRef } from "react";

export default function BubbleCursor() {
  // Reference to the canvas DOM element
  const canvasRef = useRef(null);
  // Store all the active particles (bubbles)
  const particles = useRef([]);
  // Used to cancel animation frame on cleanup
  const animationRef = useRef(null);
  // Used to reduce how often particles are added
  const lastMouseMove = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to match screen size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Recalculate canvas size when window is resized
    window.addEventListener("resize", resize);

    // Particle class represents each bubble
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 80; // Life span in animation frames
        this.size = 2 + Math.random() * 4; // Random small size
        // Random slow movement
        this.velocityX = (Math.random() - 0.5) * 0.8;
        this.velocityY = (Math.random() - 0.5) * 0.8;
      }

      // Update particle position and reduce life
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.life--;
      }

      // Draw the particle as a white outlined circle
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.life / 80})`; // Fade with life
        ctx.lineWidth = 1;
        ctx.stroke(); // Only stroke, no fill
      }
    }

    // Add a new particle at the mouse position
    const addParticle = (x, y) => {
      particles.current.push(new Particle(x, y));
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const now = Date.now();
      // Limit particle creation to 1 every 20ms to reduce density
      if (now - lastMouseMove.current > 20) {
        addParticle(e.clientX, e.clientY);
        lastMouseMove.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop that updates and draws particles
    const animate = () => {
      // Clear the whole canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each particle
      particles.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Remove particles that have no life left
      particles.current = particles.current.filter((p) => p.life > 0);

      // Request next animation frame
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(); // Start animation

    // Cleanup function when component unmounts
    return () => {
      cancelAnimationFrame(animationRef.current); // Stop animation
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Canvas is full-screen and above everything but doesn't block mouse clicks
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
    />
  );
}
