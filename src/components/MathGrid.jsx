import React, { useEffect, useRef } from 'react';

const MathGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Extended math calculations and numbers
    const mathElements = [
      { text: '∑', x: 0, y: 0, speed: 0.5 },
      { text: '∫', x: 0, y: 0, speed: 0.3 },
      { text: 'π', x: 0, y: 0, speed: 0.4 },
      { text: '∞', x: 0, y: 0, speed: 0.6 },
      { text: '√', x: 0, y: 0, speed: 0.2 },
      { text: '∂', x: 0, y: 0, speed: 0.7 },
      { text: '∇', x: 0, y: 0, speed: 0.4 },
      { text: 'λ', x: 0, y: 0, speed: 0.5 },
      { text: 'σ', x: 0, y: 0, speed: 0.3 },
      { text: 'μ', x: 0, y: 0, speed: 0.6 },
      { text: 'α', x: 0, y: 0, speed: 0.4 },
      { text: 'β', x: 0, y: 0, speed: 0.5 },
      { text: 'γ', x: 0, y: 0, speed: 0.3 },
      { text: 'δ', x: 0, y: 0, speed: 0.6 },
      { text: 'ε', x: 0, y: 0, speed: 0.4 },
      { text: 'θ', x: 0, y: 0, speed: 0.5 },
      { text: 'φ', x: 0, y: 0, speed: 0.3 },
      { text: 'ψ', x: 0, y: 0, speed: 0.6 },
      { text: 'ω', x: 0, y: 0, speed: 0.4 },
      { text: 'ξ', x: 0, y: 0, speed: 0.5 },
      { text: 'η', x: 0, y: 0, speed: 0.3 },
      { text: 'ζ', x: 0, y: 0, speed: 0.6 },
      { text: 'ι', x: 0, y: 0, speed: 0.4 },
      { text: 'κ', x: 0, y: 0, speed: 0.5 },
      { text: 'ν', x: 0, y: 0, speed: 0.3 },
      { text: 'ρ', x: 0, y: 0, speed: 0.6 },
      { text: 'τ', x: 0, y: 0, speed: 0.4 },
      { text: 'υ', x: 0, y: 0, speed: 0.5 },
      { text: 'χ', x: 0, y: 0, speed: 0.3 },
      { text: 'ς', x: 0, y: 0, speed: 0.6 },
      { text: 'Γ', x: 0, y: 0, speed: 0.4 },
      { text: 'Δ', x: 0, y: 0, speed: 0.5 },
      { text: 'Θ', x: 0, y: 0, speed: 0.3 },
      { text: 'Λ', x: 0, y: 0, speed: 0.6 },
      { text: 'Ξ', x: 0, y: 0, speed: 0.4 },
      { text: 'Π', x: 0, y: 0, speed: 0.5 },
      { text: 'Σ', x: 0, y: 0, speed: 0.3 },
      { text: 'Φ', x: 0, y: 0, speed: 0.6 },
      { text: 'Ψ', x: 0, y: 0, speed: 0.4 },
      { text: 'Ω', x: 0, y: 0, speed: 0.5 },
      { text: '∅', x: 0, y: 0, speed: 0.3 },
      { text: '∈', x: 0, y: 0, speed: 0.6 },
      { text: '∉', x: 0, y: 0, speed: 0.4 },
      { text: '∋', x: 0, y: 0, speed: 0.5 },
      { text: '∌', x: 0, y: 0, speed: 0.3 },
      { text: '⊂', x: 0, y: 0, speed: 0.6 },
      { text: '⊃', x: 0, y: 0, speed: 0.4 },
      { text: '⊆', x: 0, y: 0, speed: 0.5 },
      { text: '⊇', x: 0, y: 0, speed: 0.3 },
      { text: '⊕', x: 0, y: 0, speed: 0.6 },
      { text: '⊗', x: 0, y: 0, speed: 0.4 },
      { text: '⊥', x: 0, y: 0, speed: 0.5 },
      { text: '⊤', x: 0, y: 0, speed: 0.3 },
      { text: '∨', x: 0, y: 0, speed: 0.6 },
      { text: '∧', x: 0, y: 0, speed: 0.4 },
      { text: '⇒', x: 0, y: 0, speed: 0.5 },
      { text: '⇔', x: 0, y: 0, speed: 0.3 },
      { text: '∀', x: 0, y: 0, speed: 0.6 },
      { text: '∃', x: 0, y: 0, speed: 0.4 },
      { text: '∄', x: 0, y: 0, speed: 0.5 },
      { text: '∴', x: 0, y: 0, speed: 0.3 },
      { text: '∵', x: 0, y: 0, speed: 0.6 },
      { text: '∝', x: 0, y: 0, speed: 0.4 },
      { text: '≈', x: 0, y: 0, speed: 0.5 },
      { text: '≠', x: 0, y: 0, speed: 0.3 },
      { text: '≤', x: 0, y: 0, speed: 0.6 },
      { text: '≥', x: 0, y: 0, speed: 0.4 },
      { text: '≪', x: 0, y: 0, speed: 0.5 },
      { text: '≫', x: 0, y: 0, speed: 0.3 },
      { text: '≡', x: 0, y: 0, speed: 0.6 },
      { text: '≅', x: 0, y: 0, speed: 0.4 },
      { text: '≃', x: 0, y: 0, speed: 0.5 },
      { text: '≄', x: 0, y: 0, speed: 0.3 },
      { text: '≅', x: 0, y: 0, speed: 0.6 },
      { text: '≆', x: 0, y: 0, speed: 0.4 },
      { text: '≇', x: 0, y: 0, speed: 0.5 },
      { text: '≉', x: 0, y: 0, speed: 0.3 },
      { text: '≊', x: 0, y: 0, speed: 0.6 },
      { text: '≋', x: 0, y: 0, speed: 0.4 },
      { text: '≌', x: 0, y: 0, speed: 0.5 },
      { text: '≍', x: 0, y: 0, speed: 0.3 },
      { text: '≎', x: 0, y: 0, speed: 0.6 },
      { text: '≏', x: 0, y: 0, speed: 0.4 },
      { text: '≐', x: 0, y: 0, speed: 0.5 },
      { text: '≑', x: 0, y: 0, speed: 0.3 },
      { text: '≒', x: 0, y: 0, speed: 0.6 },
      { text: '≓', x: 0, y: 0, speed: 0.4 },
      { text: '≔', x: 0, y: 0, speed: 0.5 },
      { text: '≕', x: 0, y: 0, speed: 0.3 },
      { text: '≖', x: 0, y: 0, speed: 0.6 },
      { text: '≗', x: 0, y: 0, speed: 0.4 },
      { text: '≘', x: 0, y: 0, speed: 0.5 },
      { text: '≙', x: 0, y: 0, speed: 0.3 },
      { text: '≚', x: 0, y: 0, speed: 0.6 },
      { text: '≛', x: 0, y: 0, speed: 0.4 },
      { text: '≜', x: 0, y: 0, speed: 0.5 },
      { text: '≝', x: 0, y: 0, speed: 0.3 },
      { text: '≞', x: 0, y: 0, speed: 0.6 },
      { text: '≟', x: 0, y: 0, speed: 0.4 },
      { text: '≠', x: 0, y: 0, speed: 0.5 },
      { text: '≡', x: 0, y: 0, speed: 0.3 },
      { text: '≢', x: 0, y: 0, speed: 0.6 },
      { text: '≣', x: 0, y: 0, speed: 0.4 },
      { text: '≤', x: 0, y: 0, speed: 0.5 },
      { text: '≥', x: 0, y: 0, speed: 0.3 },
      { text: '≦', x: 0, y: 0, speed: 0.6 },
      { text: '≧', x: 0, y: 0, speed: 0.4 },
      { text: '≨', x: 0, y: 0, speed: 0.5 },
      { text: '≩', x: 0, y: 0, speed: 0.3 },
      { text: '≪', x: 0, y: 0, speed: 0.6 },
      { text: '≫', x: 0, y: 0, speed: 0.4 },
      { text: '≬', x: 0, y: 0, speed: 0.5 },
      { text: '≭', x: 0, y: 0, speed: 0.3 },
      { text: '≮', x: 0, y: 0, speed: 0.6 },
      { text: '≯', x: 0, y: 0, speed: 0.4 },
      { text: '≰', x: 0, y: 0, speed: 0.5 },
      { text: '≱', x: 0, y: 0, speed: 0.3 },
      { text: '≲', x: 0, y: 0, speed: 0.6 },
      { text: '≳', x: 0, y: 0, speed: 0.4 },
      { text: '≴', x: 0, y: 0, speed: 0.5 },
      { text: '≵', x: 0, y: 0, speed: 0.3 },
      { text: '≶', x: 0, y: 0, speed: 0.6 },
      { text: '≷', x: 0, y: 0, speed: 0.4 },
      { text: '≸', x: 0, y: 0, speed: 0.5 },
      { text: '≹', x: 0, y: 0, speed: 0.3 },
      { text: '≺', x: 0, y: 0, speed: 0.6 },
      { text: '≻', x: 0, y: 0, speed: 0.4 },
      { text: '≼', x: 0, y: 0, speed: 0.5 },
      { text: '≽', x: 0, y: 0, speed: 0.3 },
      { text: '≾', x: 0, y: 0, speed: 0.6 },
      { text: '≿', x: 0, y: 0, speed: 0.4 },
      { text: '⊀', x: 0, y: 0, speed: 0.5 },
      { text: '⊁', x: 0, y: 0, speed: 0.3 },
      { text: '⊂', x: 0, y: 0, speed: 0.6 },
      { text: '⊃', x: 0, y: 0, speed: 0.4 },
      { text: '⊄', x: 0, y: 0, speed: 0.5 },
      { text: '⊅', x: 0, y: 0, speed: 0.3 },
      { text: '⊆', x: 0, y: 0, speed: 0.6 },
      { text: '⊇', x: 0, y: 0, speed: 0.4 },
      { text: '⊈', x: 0, y: 0, speed: 0.5 },
      { text: '⊉', x: 0, y: 0, speed: 0.3 },
      { text: '⊊', x: 0, y: 0, speed: 0.6 },
      { text: '⊋', x: 0, y: 0, speed: 0.4 },
      { text: '⊌', x: 0, y: 0, speed: 0.5 },
      { text: '⊍', x: 0, y: 0, speed: 0.3 },
      { text: '⊎', x: 0, y: 0, speed: 0.6 },
      { text: '⊏', x: 0, y: 0, speed: 0.4 },
      { text: '⊐', x: 0, y: 0, speed: 0.5 },
      { text: '⊑', x: 0, y: 0, speed: 0.3 },
      { text: '⊒', x: 0, y: 0, speed: 0.6 },
      { text: '⊓', x: 0, y: 0, speed: 0.4 },
      { text: '⊔', x: 0, y: 0, speed: 0.5 },
      { text: '⊕', x: 0, y: 0, speed: 0.3 },
      { text: '⊖', x: 0, y: 0, speed: 0.6 },
      { text: '⊗', x: 0, y: 0, speed: 0.4 },
      { text: '⊘', x: 0, y: 0, speed: 0.5 },
      { text: '⊙', x: 0, y: 0, speed: 0.3 },
      { text: '⊚', x: 0, y: 0, speed: 0.6 },
      { text: '⊛', x: 0, y: 0, speed: 0.4 },
      { text: '⊜', x: 0, y: 0, speed: 0.5 },
      { text: '⊝', x: 0, y: 0, speed: 0.3 },
      { text: '⊞', x: 0, y: 0, speed: 0.6 },
      { text: '⊟', x: 0, y: 0, speed: 0.4 },
      { text: '⊠', x: 0, y: 0, speed: 0.5 },
      { text: '⊡', x: 0, y: 0, speed: 0.3 },
      { text: '⊢', x: 0, y: 0, speed: 0.6 },
      { text: '⊣', x: 0, y: 0, speed: 0.4 },
      { text: '⊤', x: 0, y: 0, speed: 0.5 },
      { text: '⊥', x: 0, y: 0, speed: 0.3 },
      { text: '⊦', x: 0, y: 0, speed: 0.6 },
      { text: '⊧', x: 0, y: 0, speed: 0.4 },
      { text: '⊨', x: 0, y: 0, speed: 0.5 },
      { text: '⊩', x: 0, y: 0, speed: 0.3 },
      { text: '⊪', x: 0, y: 0, speed: 0.6 },
      { text: '⊫', x: 0, y: 0, speed: 0.4 },
      { text: '⊬', x: 0, y: 0, speed: 0.5 },
      { text: '⊭', x: 0, y: 0, speed: 0.3 },
      { text: '⊮', x: 0, y: 0, speed: 0.6 },
      { text: '⊯', x: 0, y: 0, speed: 0.4 },
      { text: '⊰', x: 0, y: 0, speed: 0.5 },
      { text: '⊱', x: 0, y: 0, speed: 0.3 },
      { text: '⊲', x: 0, y: 0, speed: 0.6 },
      { text: '⊳', x: 0, y: 0, speed: 0.4 },
      { text: '⊴', x: 0, y: 0, speed: 0.5 },
      { text: '⊵', x: 0, y: 0, speed: 0.3 },
      { text: '⊶', x: 0, y: 0, speed: 0.6 },
      { text: '⊷', x: 0, y: 0, speed: 0.4 },
      { text: '⊸', x: 0, y: 0, speed: 0.5 },
      { text: '⊹', x: 0, y: 0, speed: 0.3 },
      { text: '⊺', x: 0, y: 0, speed: 0.6 },
      { text: '⊻', x: 0, y: 0, speed: 0.4 },
      { text: '⊼', x: 0, y: 0, speed: 0.5 },
      { text: '⊽', x: 0, y: 0, speed: 0.3 },
      { text: '⊾', x: 0, y: 0, speed: 0.6 },
      { text: '⊿', x: 0, y: 0, speed: 0.4 },
      { text: '⋀', x: 0, y: 0, speed: 0.5 },
      { text: '⋁', x: 0, y: 0, speed: 0.3 },
      { text: '⋂', x: 0, y: 0, speed: 0.6 },
      { text: '⋃', x: 0, y: 0, speed: 0.4 },
      { text: '⋄', x: 0, y: 0, speed: 0.5 },
      { text: '⋅', x: 0, y: 0, speed: 0.3 },
      { text: '⋆', x: 0, y: 0, speed: 0.6 },
      { text: '⋇', x: 0, y: 0, speed: 0.4 },
      { text: '⋈', x: 0, y: 0, speed: 0.5 },
      { text: '⋉', x: 0, y: 0, speed: 0.3 },
      { text: '⋊', x: 0, y: 0, speed: 0.6 },
      { text: '⋋', x: 0, y: 0, speed: 0.4 },
      { text: '⋌', x: 0, y: 0, speed: 0.5 },
      { text: '⋍', x: 0, y: 0, speed: 0.3 },
      { text: '⋎', x: 0, y: 0, speed: 0.6 },
      { text: '⋏', x: 0, y: 0, speed: 0.4 },
      { text: '⋐', x: 0, y: 0, speed: 0.5 },
      { text: '⋑', x: 0, y: 0, speed: 0.3 },
      { text: '⋒', x: 0, y: 0, speed: 0.6 },
      { text: '⋓', x: 0, y: 0, speed: 0.4 },
      { text: '⋔', x: 0, y: 0, speed: 0.5 },
      { text: '⋕', x: 0, y: 0, speed: 0.3 },
      { text: '⋖', x: 0, y: 0, speed: 0.6 },
      { text: '⋗', x: 0, y: 0, speed: 0.4 },
      { text: '⋘', x: 0, y: 0, speed: 0.5 },
      { text: '⋙', x: 0, y: 0, speed: 0.3 },
      { text: '⋚', x: 0, y: 0, speed: 0.6 },
      { text: '⋛', x: 0, y: 0, speed: 0.4 },
      { text: '⋜', x: 0, y: 0, speed: 0.5 },
      { text: '⋝', x: 0, y: 0, speed: 0.3 },
      { text: '⋞', x: 0, y: 0, speed: 0.6 },
      { text: '⋟', x: 0, y: 0, speed: 0.4 },
      { text: '⋠', x: 0, y: 0, speed: 0.5 },
      { text: '⋡', x: 0, y: 0, speed: 0.3 },
      { text: '⋢', x: 0, y: 0, speed: 0.6 },
      { text: '⋣', x: 0, y: 0, speed: 0.4 },
      { text: '⋤', x: 0, y: 0, speed: 0.5 },
      { text: '⋥', x: 0, y: 0, speed: 0.3 },
      { text: '⋦', x: 0, y: 0, speed: 0.6 },
      { text: '⋧', x: 0, y: 0, speed: 0.4 },
      { text: '⋨', x: 0, y: 0, speed: 0.5 },
      { text: '⋩', x: 0, y: 0, speed: 0.3 },
      { text: '⋪', x: 0, y: 0, speed: 0.6 },
      { text: '⋫', x: 0, y: 0, speed: 0.4 },
      { text: '⋬', x: 0, y: 0, speed: 0.5 },
      { text: '⋭', x: 0, y: 0, speed: 0.3 },
      { text: '⋮', x: 0, y: 0, speed: 0.6 },
      { text: '⋯', x: 0, y: 0, speed: 0.4 },
      { text: '⋰', x: 0, y: 0, speed: 0.5 },
      { text: '⋱', x: 0, y: 0, speed: 0.3 },
      { text: '⋲', x: 0, y: 0, speed: 0.6 },
      { text: '⋳', x: 0, y: 0, speed: 0.4 },
      { text: '⋴', x: 0, y: 0, speed: 0.5 },
      { text: '⋵', x: 0, y: 0, speed: 0.3 },
      { text: '⋶', x: 0, y: 0, speed: 0.6 },
      { text: '⋷', x: 0, y: 0, speed: 0.4 },
      { text: '⋸', x: 0, y: 0, speed: 0.5 },
      { text: '⋹', x: 0, y: 0, speed: 0.3 },
      { text: '⋺', x: 0, y: 0, speed: 0.6 },
      { text: '⋻', x: 0, y: 0, speed: 0.4 },
      { text: '⋼', x: 0, y: 0, speed: 0.5 },
      { text: '⋽', x: 0, y: 0, speed: 0.3 },
      { text: '⋾', x: 0, y: 0, speed: 0.6 },
      { text: '⋿', x: 0, y: 0, speed: 0.4 }
    ];

    // Initialize positions with more density
    mathElements.forEach((element, index) => {
      element.x = Math.random() * canvas.width;
      element.y = Math.random() * canvas.height;
      element.opacity = 0.15; // Fixed opacity - no blinking
      element.size = Math.random() * 25 + 20; // Slightly larger size range
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(153, 138, 251, 0.03)';
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw math elements with fixed opacity
      mathElements.forEach((element) => {
        ctx.font = `${element.size}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(153, 138, 251, ${element.opacity})`;
        ctx.fillText(element.text, element.x, element.y);
        
        // Move elements
        element.y += element.speed;
        if (element.y > canvas.height + 50) {
          element.y = -50;
          element.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default MathGrid; 