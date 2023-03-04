<script lang="ts">
  import { Canvas, OrbitControls, T } from "@threlte/core";
  import Scene from "$lib/Scene.svelte";
  import { tweened } from "svelte/motion";

  const cameraLocation = tweened(
    { x: 0, y: 0, z: 0 },
    {
      duration: 60,
    }
  );

  import { FaceMesh, type Results } from "@mediapipe/face_mesh";

  import { onMount } from "svelte";
  import { irisLocation } from "$lib/stores";

  let meshResults: Results;

  $: {
    if (meshResults) {
      for (const something of meshResults.multiFaceLandmarks) {
        const loc = something[474];
        cameraLocation.set({ x: loc.x, y: loc.y, z: loc.z });
      }
    }
  }

  $: console.log($irisLocation);
  onMount(async () => {
    const facemesh = new FaceMesh({
      locateFile: (file) => {
        console.log(file);
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    facemesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((mediaStream) => {
        const video = document.querySelector("video");

        function sendData() {
          if (video) {
            facemesh.send({ image: video });
          }
        }

        async function onResults(results: Results) {
          await new Promise((r) => setTimeout(r, 50));
          sendData();
          meshResults = results;
        }

        if (video) {
          video.srcObject = mediaStream;
          video.onloadedmetadata = () => {
            video.play();
            console.log("played");
            facemesh.onResults(onResults);
            sendData();
          };
          console.log("loaded");
        } else {
          console.log("notloaded");
        }
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="video" hidden />

<div class="w-full h-full">
  <Canvas>
    <T.PerspectiveCamera
      makeDefault
      position.x={3 + -$cameraLocation.x * 5}
      position.y={2 + -$cameraLocation.y * 5}
      position.z={1}
      fov={50}
    >
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        target={{ x: 0, y: 0, z: -1000 }}
      />
    </T.PerspectiveCamera>

    <T.DirectionalLight castShadow position={[3, 10, 10]} />
    <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
    <T.AmbientLight intensity={0.2} />

    <Scene />
  </Canvas>
</div>
