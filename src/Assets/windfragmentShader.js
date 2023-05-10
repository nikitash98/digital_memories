const fragmentShader = `
varying vec3 vColor;

void main() {
  gl_FragColor = vec4(0.34, 0.53, 0.96, 1.0);
  gl_FragColor = vec4( vColor.rgb, 1. );
}
`

export default fragmentShader
