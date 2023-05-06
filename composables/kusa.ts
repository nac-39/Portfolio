import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Group,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { Ref } from "vue"
import { KusaWeek } from "~/types/GitHub"

export const useKusa = (
  container: Ref<HTMLElement>,
  width: Ref<number> | number,
  height: Ref<number> | number,
  weeks: KusaWeek[]
) => {
  const clientWidth = unref(width)
  const clientHeight = unref(height)

  const kusaMesh = (week: KusaWeek) => {
    const group = new Group()
    for (let i = 0; i < week.contributionDays.length; i++) {
      const height = week.contributionDays[i].contributionCount
      const geometry = new BoxGeometry(10, height, 10)
      const material = new MeshBasicMaterial({
        color: week.contributionDays[i].color
      }) // Number(week.contributionDays[i].color.replace("#", "0x")) })
      const cube = new Mesh(geometry, material)
      cube.position.set(i * 11, height / 2, 0)
      group.add(cube)
    }
    return group
  }
  const init = () => {
    // レンダラー作成
    const renderer = new WebGLRenderer()
    renderer.setSize(clientWidth, clientHeight)
    renderer.setPixelRatio(clientWidth / clientHeight)
    container.value.appendChild(renderer.domElement)
    // シーン追加
    const scene = new Scene()
    // カメラ作成
    const camera = new PerspectiveCamera(45, clientWidth / clientHeight)
    camera.position.set(weeks.length * 21, 0, weeks.length * 11)
    camera.lookAt(new Vector3(0, 0, 0))
    const controles = new OrbitControls(camera, renderer.domElement)
    controles.enableDamping = true
    // 草作成
    const kusa = new Group()
    for (let i = 0; i < weeks.length; i++) {
      const weekMesh = kusaMesh(weeks[i])
      weekMesh.position.set(0, 0, i * 11)
      kusa.add(weekMesh)
    }
    kusa.position.set(-5, 0, -((weeks.length * 11) / 2))
    scene.add(kusa)
    // 毎フレーム時に実行されるループイベント
    const tick = () => {
      // レンダリング
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }
    tick()
    // コンテキスト削除
    onUnmounted(() => {
      renderer.dispose()
      renderer.forceContextLoss()
    })
  }
  return { init }
}
