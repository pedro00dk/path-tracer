// const a = { x: 0, y: 0, z: 0 }

// for (let i = 0; i < 1_000_000_000; i++) {
//     const v = {
//         x: 0,
//         y: 2,
//         z: 8,
//     }
//     const w = {
//         x: 0,
//         y: 2,
//         z: 8,
//     }
//     const z = { x: v.x + w.x, y: v.y + w.y, z: v.z + w.z }
//     a.x += z.x
//     a.y += z.y
//     a.z += z.z
// }

const a = [0, 0, 0]
const v = [0, 2, 8]
const w = [0, 2, 8]
const z = [v[0] + w[0], v[1] + w[1], v[2] + w[2]]
for (let i = 0; i < 1_000_000_000; i++) {
    z[0] = v[0] + w[0]
    z[1] = v[1] + w[1]
    z[2] = v[2] + w[2]
    a[0] += z[0]
    a[1] += z[1]
    a[2] += z[2]
}

// const a = [0, 0, 0]
// const v = [0, 2, 8]
// const w = [0, 2, 8]
// const z = []

// for (let i = 0; i < 1_000_000_000; i++) {
//     for (let i = 0; i < 3; i++) z[i] = v[i] + w[i]
//     for (let i = 0; i < 3; i++) a[i] += z[i]
// }

console.log(a)
