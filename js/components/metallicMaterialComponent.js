AFRAME.registerComponent('metallic-material', {
  init: function () {
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
    })

    this.cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget)
    this.cubeCamera.position.copy(this.el.object3D.position)
    this.el.sceneEl.object3D.add(this.cubeCamera)

    const metallicMaterial = new THREE.MeshStandardMaterial({
      envMap: cubeRenderTarget.texture,
      metalness: 1,
      roughness: 0,
    })

    const mesh = this.el.getObject3D('mesh')
    if (mesh) {
      mesh.material = metallicMaterial
    }
  },
  tick: function () {
    if (this.cubeCamera) {
      const renderer = this.el.sceneEl.renderer
      const scene = this.el.sceneEl.object3D

      this.cubeCamera.update(renderer, scene)
    }
  },
  remove: function () {
    this.el.sceneEl.object3D.remove(this.cubeCamera)
  },
})
