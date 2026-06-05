import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function CssFallbackCar() {
  return (
    <div className="w-full h-full flex items-center justify-center" data-testid="car-canvas-fallback">
      <div className="relative" style={{ animation: 'floatCar 3s ease-in-out infinite' }}>
        <svg viewBox="0 0 320 160" width="320" height="160" xmlns="http://www.w3.org/2000/svg">
          {/* Car body */}
          <rect x="30" y="70" width="260" height="55" rx="8" fill="#C0C8DC" />
          {/* Roof cabin */}
          <rect x="90" y="38" width="140" height="40" rx="10" fill="#A8B4C8" />
          {/* Hood slope */}
          <polygon points="230,70 290,70 270,55" fill="#C8D0E0" />
          {/* Trunk slope */}
          <polygon points="90,70 30,70 55,58" fill="#C8D0E0" />
          {/* Front bumper */}
          <rect x="285" y="82" width="15" height="28" rx="3" fill="#D0D8EC" />
          {/* Rear bumper */}
          <rect x="20" y="82" width="15" height="28" rx="3" fill="#D0D8EC" />
          {/* Windshield */}
          <polygon points="228,45 240,70 195,70 200,42" fill="#1a2a3a" opacity="0.75" />
          {/* Rear window */}
          <polygon points="92,45 80,68 125,70 122,42" fill="#1a2a3a" opacity="0.75" />
          {/* Side windows */}
          <rect x="135" y="43" width="55" height="25" rx="4" fill="#1a2a3a" opacity="0.75" />
          {/* Wheels */}
          <circle cx="80" cy="125" r="22" fill="#1a1a2e" />
          <circle cx="80" cy="125" r="13" fill="#E8EFF8" />
          <circle cx="80" cy="125" r="6" fill="#A0A8BC" />
          <circle cx="240" cy="125" r="22" fill="#1a1a2e" />
          <circle cx="240" cy="125" r="13" fill="#E8EFF8" />
          <circle cx="240" cy="125" r="6" fill="#A0A8BC" />
          {/* Headlights */}
          <rect x="288" y="75" width="10" height="8" rx="2" fill="#FFF9C4" opacity="0.9" />
          {/* Taillights */}
          <rect x="22" y="75" width="10" height="8" rx="2" fill="#FF6B6B" opacity="0.9" />
          {/* Side mirror */}
          <rect x="235" y="57" width="12" height="8" rx="2" fill="#A8B4C8" />
          {/* Shadow ellipse */}
          <ellipse cx="160" cy="149" rx="100" ry="7" fill="#000000" opacity="0.2" />
        </svg>
        <style>{`
          @keyframes floatCar {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes rotateCar {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

export function CarCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let reqId: number;

    try {
      const scene = new THREE.Scene();

      const width = mountRef.current.clientWidth || 600;
      const height = mountRef.current.clientHeight || 420;
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 1.5, 5);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      const format = renderer.capabilities.isWebGL2 ? THREE.RedFormat : THREE.LuminanceFormat;
      const colors = new Uint8Array([80, 140, 190, 220]);
      const gradientMap = new THREE.DataTexture(colors, 4, 1, format);
      gradientMap.needsUpdate = true;

      const bodyMat = new THREE.MeshToonMaterial({ color: 0xC0C8DC, gradientMap });
      const roofMat = new THREE.MeshToonMaterial({ color: 0xA8B4C8, gradientMap });
      const bumperMat = new THREE.MeshToonMaterial({ color: 0xD0D8EC, gradientMap });
      const wheelMat = new THREE.MeshToonMaterial({ color: 0x1a1a2e, gradientMap });
      const rimMat = new THREE.MeshToonMaterial({ color: 0xE8EFF8, gradientMap });
      const windowMat = new THREE.MeshToonMaterial({ color: 0x1a2a3a, opacity: 0.7, transparent: true, gradientMap });

      const carGroup = new THREE.Group();

      const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 1.0), bodyMat);
      body.position.y = 0.55;
      carGroup.add(body);

      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 0.9), roofMat);
      roof.position.set(-0.1, 1.025, 0);
      carGroup.add(roof);

      const hood = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.95), bodyMat);
      hood.position.set(0.85, 0.85, 0);
      hood.rotation.z = -0.15;
      carGroup.add(hood);

      const trunk = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.95), bodyMat);
      trunk.position.set(-0.85, 0.85, 0);
      trunk.rotation.z = 0.1;
      carGroup.add(trunk);

      const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 1.05), bumperMat);
      frontBumper.position.set(1.15, 0.35, 0);
      carGroup.add(frontBumper);

      const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 1.05), bumperMat);
      rearBumper.position.set(-1.15, 0.35, 0);
      carGroup.add(rearBumper);

      const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 16);
      const rimGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.24, 8);
      const wheelPositions: [number, number, number][] = [
        [0.88, 0.3, 0.52], [0.88, 0.3, -0.52],
        [-0.88, 0.3, 0.52], [-0.88, 0.3, -0.52]
      ];

      wheelPositions.forEach(pos => {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.x = Math.PI / 2;
        w.position.set(...pos);
        carGroup.add(w);

        const r = new THREE.Mesh(rimGeo, rimMat);
        r.rotation.x = Math.PI / 2;
        r.position.set(...pos);
        carGroup.add(r);
      });

      const windshield = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.82), windowMat);
      windshield.position.set(0.55, 1.0, 0);
      windshield.rotation.z = -0.35;
      carGroup.add(windshield);

      const rearWindow = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.82), windowMat);
      rearWindow.position.set(-0.65, 0.98, 0);
      rearWindow.rotation.z = 0.35;
      carGroup.add(rearWindow);

      const leftMirror = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.18), bodyMat);
      leftMirror.position.set(0.5, 0.9, 0.55);
      carGroup.add(leftMirror);

      const rightMirror = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.18), bodyMat);
      rightMirror.position.set(0.5, 0.9, -0.55);
      carGroup.add(rightMirror);

      carGroup.position.y = 0;
      scene.add(carGroup);

      const shadowGeo = new THREE.CircleGeometry(1.4, 32);
      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.3, transparent: true });
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.position.y = -0.28;
      shadow.rotation.x = -Math.PI / 2;
      scene.add(shadow);

      scene.add(new THREE.AmbientLight(0xffffff, 0.3));
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
      mainLight.position.set(3, 4, 3);
      scene.add(mainLight);
      const rimLight = new THREE.DirectionalLight(0x4488ff, 0.4);
      rimLight.position.set(-3, 1, -2);
      scene.add(rimLight);

      const particlesGeo = new THREE.BufferGeometry();
      const pCount = 120;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i += 3) {
        pPos[i] = (Math.random() - 0.5) * 12;
        pPos[i + 1] = (Math.random() - 0.5) * 8 + 2;
        pPos[i + 2] = (Math.random() - 0.5) * 6;
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff, transparent: true, opacity: 0.6 });
      const particles = new THREE.Points(particlesGeo, pMat);
      scene.add(particles);

      const animate = () => {
        carGroup.rotation.y += 0.003;
        carGroup.position.y = Math.sin(Date.now() * 0.0007) * 0.06;
        particles.rotation.y += 0.0005;
        renderer!.render(scene, camera);
        reqId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        if (!mountRef.current || !renderer) return;
        const w = mountRef.current.clientWidth;
        const h = mountRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(reqId);
        if (mountRef.current && renderer && renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer?.dispose();
      };
    } catch {
      setWebglFailed(true);
      return () => {
        if (reqId) cancelAnimationFrame(reqId);
        renderer?.dispose();
      };
    }
  }, []);

  if (webglFailed) {
    return <CssFallbackCar />;
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] md:min-h-[450px]"
      data-testid="car-canvas"
    />
  );
}
