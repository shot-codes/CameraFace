import { writable } from "svelte/store";

export const irisLocation = writable({ x: 0, y: 0, z: 0 });
