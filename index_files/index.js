
// const csrfToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDcxOTM1ODh9.PuJr0uu7ovZG0DiiI3Bx41tsq1KQGV-mARO1n0FUWmU';
// // event subscribed by Verify Enclave
// window.addEventListener("message", (event) => {
//     const attestationId = event.data
//     const origin = event.origin
//     if (!attestationId) return
//     if (attestationId.length !== 64) return
//     fetch(`${window.location.protocol}//${window.location.host}/attestation`, {
//         method: "POST",
//         body: JSON.stringify({ attestationId, origin }),
//         headers: new Headers({ 
//             'content-type': 'application/json',
//             'x-csrf-token': csrfToken
//         })
//     })
// })
// // auto reload to refresh token
// window.addEventListener("load", async () => {
//     setInterval(() => {
//         window.location.reload()
//     }, 60_000)
// })

// // notify the SDK that the iframe is ready
// window.parent.postMessage("verify_ready", "*")
