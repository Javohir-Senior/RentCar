import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

export function CarCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let reqId: number;

    try {
      const scene = new THREE.Scene();
      // Scene Background is transparent
      
      const width = mountRef.current.clientWidth || 600;
      const height = mountRef.current.clientHeight || 600;
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 2, 8);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.85;
      mountRef.current.appendChild(renderer.domElement);

      const carGroup = new THREE.Group();
      scene.add(carGroup);

      // Add Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.15));
      
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
      mainLight.position.set(5, 5, 5);
      scene.add(mainLight);

      const blueFillLight = new THREE.DirectionalLight(0x0099FF, 0.4);
      blueFillLight.position.set(-4, 2, -4);
      scene.add(blueFillLight);

      const spotLight = new THREE.SpotLight(0xffffff, 2.0);
      spotLight.position.set(0, 8, 0);
      spotLight.target = carGroup;
      scene.add(spotLight);

      // Loaders
      const rgbeLoader = new RGBELoader();
      const HDR_URL = 'https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr';
      const MODEL_URL = 'https://threejs.org/examples/models/gltf/ferrari.glb';

      rgbeLoader.load(HDR_URL, (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;

        const loader = new GLTFLoader();
        loader.load(
          MODEL_URL,
          (gltf) => {
            const car = gltf.scene;
            car.scale.set(1, 1, 1);
            car.position.set(0, -0.3, 0);
            carGroup.add(car);
            setModelLoaded(true);
          },
          undefined,
          (error) => {
            console.error('Error loading car model', error);
            setWebglFailed(true);
          }
        );
      }, undefined, (error) => {
        console.error('Error loading HDR', error);
        setWebglFailed(true);
      });

      const clock = new THREE.Clock();

      const animate = () => {
        carGroup.rotation.y += 0.002;
        carGroup.position.y = Math.sin(Date.now() * 0.0005) * 0.08;
        
        if (renderer) {
          renderer.render(scene, camera);
        }
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
        renderer.dispose();
      };
    } catch (e) {
      console.error("WebGL setup failed:", e);
      setWebglFailed(true);
      return () => {
        if (reqId) cancelAnimationFrame(reqId);
        if (renderer) renderer.dispose();
      };
    }
  }, []);

  if (webglFailed) {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80" 
          alt="Premium Luxury Car" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!modelLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 rounded-full border border-[#0099FF] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(0,153,255,0.3)]">
            <span className="font-display text-[#0099FF] text-xl font-bold">RC</span>
          </div>
        </div>
      )}
      <div 
        ref={mountRef}
        className={`w-full h-[100vh] lg:h-full transition-opacity duration-1000 ${modelLoaded ? 'opacity-100' : 'opacity-0'}`}
        data-testid="car-canvas"
      />
    </div>
  );
}