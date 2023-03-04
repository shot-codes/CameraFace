<script lang="ts">
  import { T } from "@threlte/core";
  import { Grid } from "@threlte/extras";
  import { DEG2RAD } from "three/src/math/MathUtils";
</script>

<T.Group position.y={-5}>
  <Grid gridSize={[20, 700]} fadeDistance={250} cellColor="blue" />
</T.Group>

<T.Group rotation.z={90 * DEG2RAD} position.x={-10}>
  <Grid gridSize={[10, 700]} fadeDistance={250} cellColor="blue" />
</T.Group>

<T.Group rotation.z={270 * DEG2RAD} position.x={10}>
  <Grid gridSize={[10, 700]} fadeDistance={250} cellColor="blue" />
</T.Group>

<T.Group rotation.z={180 * DEG2RAD} position.y={5}>
  <Grid gridSize={[20, 700]} fadeDistance={250} cellColor="blue" />
</T.Group>

<T.Group position={[4, 1, -10]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[-7, 1, -7]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[-3, -4, -20]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[0, -3, -30]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[-5, -1, -50]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[5, -1, -80]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[-4, 3, -120]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>

<T.Group position={[2, -1, -200]}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial color="#ff0000" />
  </T.Mesh>
  <T.Mesh rotation.x={90 * DEG2RAD} position.z={-250}>
    <T.CylinderGeometry args={[0.05, 0.05, 500, 32]} />
    <T.MeshBasicMaterial color="red" />
  </T.Mesh>
</T.Group>
