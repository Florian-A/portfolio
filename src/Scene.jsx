import { Canvas } from '@react-three/fiber'
import { useEffect, Suspense } from 'react'
import { Environment, ContactShadows, Grid, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Suzanne from './suzanne'

const canvasStyle = {
	width: "100vw",
	height: "100vh",
	touchAction: "none"
}

const cameraOffset = window.innerWidth > 600 ? {
	x: 15,
	y: 5,
	z: 0
} : {
	x: 30,
	y: 10,
	z: 4
}

export default function Scene() {

	useEffect(() => {
		var html = document.querySelector('html')
		if (html) {
			html.style.overflow = "hidden"
		}
		var body = document.querySelector('body')
		if (body) {
			body.style.overflow = "hidden"
			body.style.background = "#2d4967";
		}
	})

	return (
		<>
			<Suspense >
				<Canvas dpr={[1, 2]} eventSource={document.getElementById('root')} style={canvasStyle} camera={{ position: [cameraOffset.x, cameraOffset.y, cameraOffset.z], fov: 20 }}>
					<Suzanne />
					<Grid renderOrder={-1} position={[0, -1, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
					<OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
					<EffectComposer disableNormalPass>

						<Bloom luminanceThreshold={.6} mipmapBlur luminanceSmoothing={0} intensity={.2} />
					</EffectComposer>
					<ambientLight intensity={0.45} />

					<ContactShadows position={[.2, -1.5, 0.2]} opacity={0.75} scale={10} blur={2.5} far={3} />
					<Environment preset="sunset" />
				</Canvas>
			</Suspense>
		</>
	);
}
